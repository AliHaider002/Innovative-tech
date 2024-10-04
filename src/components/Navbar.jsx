import { CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { reload } = useSelector((state) => state.reload);
  const { users } = useSelector((state) => state.users);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold p-4">Innovative TECH</h1>
          {reload && <CircularProgress />}
          <div className="flex justify-normal items-center gap-[1rem]">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer px-[0.2rem] font-[500] border-b-[2px] border-transparent hover:border-[black]/80 transition-all duration-500"
            >
              Home
            </div>
            <button
              onClick={() => navigate("/form")}
              className="bg-blue-400 text-white px-[0.7rem] py-[0.5rem] rounded-full"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
