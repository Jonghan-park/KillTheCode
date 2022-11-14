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

const updateService = {
  // updateMyInfo,
  getUser,
};

export default updateService;
