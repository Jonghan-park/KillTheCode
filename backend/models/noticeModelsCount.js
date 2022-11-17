var mongoose = require("mongoose");

const noticeModelsCounterSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});

const noticeModelsCounter = mongoose.model(
  "noticeModelsCounter",
  noticeModelsCounterSchema
);

module.exports = noticeModelsCounter;
