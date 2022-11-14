import axios from "axios";

// Register user
const register = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => localStorage.removeItem("user");

// update my info
// const updateMyInfo = async (user, config) => {
//   const userId = user._id;
//   const config = {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.put(
//     `http://localhost:5000/api/users/me/updateinfo`,
//     user,
//     config
//   );

//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   return response.data;
// };

const authService = {
  register,
  login,
  logout,
  // updateMyInfo,
};

export default authService;
