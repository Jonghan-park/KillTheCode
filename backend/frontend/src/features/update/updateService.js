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
    `http://vast-island-14964.herokuapp.com/api/users/me/${userId}`,

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
    `http://vast-island-14964.herokuapp.com/api/users/me/updateinfo`,
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
