const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  api: {
    type: Schema.Types.ObjectId,
    ref: "API",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: Number,
  comment: String,
  date: {
    type: Number,
    default: Date.now,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
