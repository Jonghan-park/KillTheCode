import axios from "axios";

const getUser = async (user, token) => {
  const userId = user._id;
  const config = {
    headers: {
      //   "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `http://localhost:5000/api/users/me/${userId}`,

    config
  );

  return response.data;
};

const updateUser = async (user, token) => {
  const userId = user._id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `http://localhost:5000/api/users/me/updateinfo`,
    user,
    config
  );

  return response.data;
};
const updateService = {
  updateUser,
  getUser,
};

export default updateService;
