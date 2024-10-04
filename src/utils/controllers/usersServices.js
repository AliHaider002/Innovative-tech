import ApiInstance from "../axiosconfig";
import { DELETE_User, GET_ALL_Users } from "../routes";

const fetchUsers = async (page) => {
  const response = await ApiInstance.get(GET_ALL_Users(page));
  return response.data;
};

const deleteUser = async (id) => {
  const response = await ApiInstance.delete(DELETE_User(id));
  return response.data;
};

const userService = {
  fetchUsers,
  deleteUser,
};

export default userService;
