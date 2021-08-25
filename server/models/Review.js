const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  api: {
    type: ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: Number,
  comment: String,
});

const Review = model("Review", reviewSchema);

module.exports = Review;
