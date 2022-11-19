import axios from "axios";

const listUser = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  try {
    const response = await axios.get(`http://localhost:5000/api/users`);

    const data = await response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const adminService = {
  listUser,
  // updateMyInfo,
};

export default adminService;
