const mongoose = require("mongoose");
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.MONGO_URI, connectionParams)
    .then(() => console.log("Connected to database successfully"))
    .catch((err) => console.log(err));
};
