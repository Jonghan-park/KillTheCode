//register controller
const registerUser = (req, res) => {
  res.send("Register Router");
};

//login controllers
const loginUser = (req, res) => {
  res.send("Login User");
};

module.exports = {
  registerUser,
  loginUser,
};
