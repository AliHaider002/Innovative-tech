import React, { useState, useEffect, useCallback } from "react";
import userService from "../../utils/controllers/usersServices";
import axios from "axios";
import FormDialog from "./modal";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  addUser,
  changeUpdate,
  deleteUser,
} from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { updateReload } from "../../store/slices/reloadSlice";

const Listing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const uniqueData = users.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.id === item.id || i._id === item._id)
  );
  const { reload } = useSelector((state) => state.reload);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [open, setOpen] = React.useState(false);

  const fetchData = useCallback(async () => {
    dispatch(updateReload());
    try {
      const response = await userService.fetchUsers();

      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        response.data.map((v) => {
          dispatch(addUser(v));
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(updateReload());
    }
  }, [page]);

  useEffect(() => {
    fetchData();

    const source = axios.CancelToken.source();
    return () => {
      source.cancel("Component unmounted, cancelling API call");
    };
  }, [fetchData]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !reload &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [reload, hasMore]);

  useEffect(() => {
    setData((prevData) => [...new Set([...prevData, ...users])]);
  }, [users]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdate = (v) => {
    dispatch(changeUpdate(v));
    navigate("/form");
  };

  return (
    <>
      <FormDialog open={open} handleClose={handleClose} />
      <div className="max-w-2xl mx-auto p-4">
        {/* List Content */}
        <ul className="mt-4">
          {uniqueData &&
            uniqueData.length > 0 &&
            uniqueData.map((item, index) => (
              <li key={index} className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>{item.name}</div>
                  <div>{item.email}</div>
                  <div className="flex justify-normal gap-[1rem]">
                    <div onClick={() => handleUpdate(item)}>
                      <EditIcon
                        style={{
                          color: "green",
                        }}
                      />
                    </div>
                    <div onClick={() => handleDelete(item.id)}>
                      <DeleteForeverIcon
                        style={{
                          color: "red",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Listing;
