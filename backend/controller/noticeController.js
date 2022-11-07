const NoticeModels = require("../models/noticeModels");

module.exports.getAllNotice = async (req, res) => {
  const notice = await NoticeModels.find();
  res.send(notice);
};
/** create New notice  */
module.exports.saveNotice = (req, res) => {
  const { title, date, content } = req.body;

  NoticeModels.create({ title, date, content })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

/** update  */
module.exports.updateNotice = async (req, res) => {
  const { _id, title, date, content } = req.body;

  NoticeModels.findByIdAndUpdate(_id, { title, date, content })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteNotice = async (req, res) => {
  const { _id, title, date, content } = req.body;

  NoticeModels.findByIdAndDelete(_id, { title, date, content })
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
