const NoticeModels = require("../models/noticeModels");
const User = require("../models/user");
const noticeModelsCounter = require("../models/noticeModelsCount");
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return new Date(
    Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
  );
}

module.exports.getAllNotice = async (req, res) => {
  const notice = await NoticeModels.find();

  res.send(notice);
};
/** create New notice  */
module.exports.addNotice = async (req, res) => {
  const { message } = req.body;

  let NoticeModel;
  try {
    const user = await User.findById(message.userId);
    const date = getCurrentDate();

    noticeModelsCounter.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      (err, cd) => {
        let seqId;
        if (cd == null) {
          const newval = new noticeModelsCounter({ id: "autoval", seq: 1 });
          console.log(newval);
          newval.save();
          seqId = 1;
        } else {
          seqId = cd.seq;
        }

        NoticeModel = new NoticeModels({
          date: date,
          content: message.content,
          user: user,

          title: message.title,
          username: user.username,
          number: seqId,
        });

        NoticeModel.save();
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/** update  notice */
module.exports.updateNotice = async (req, res) => {
  const { _id, title, content, userId } = req.body;

  NoticeModels.findByIdAndUpdate(_id, { title, date, content })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

/** delete  */
module.exports.deleteNotice = async (req, res) => {
  const { _id, title, date, content } = req.body;

  NoticeModels.findByIdAndDelete(_id, { title, date, content })
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
