var mongoose = require("mongoose");
// (Schema = mongoose.Schema),
//   (autoIncrement = require("mongoose-auto-increment"));
// var connection = mongoose.createConnection("mongodb://localhost/myDatabase");
// autoIncrement.initialize(connection);
const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
  },
});

// noticeSchema.plugin(autoIncrement.plugin, {
//   model: "Notice",
//   id: "number_seq",
//   inc_field: "number",
//   startAt: 1,
//   incrementBy: 1,
// });

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
