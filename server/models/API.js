const { Schema, model } = require("mongoose");

const apiSchema = new Schema({
  title: String,
  category: String,
  description: String,
  url: String,
  auth: {
    type: String,
  },
  https: {
    type: String,
    enum: ["Yes", "No"],
  },
  cors: {
    type: String,
    enum: ["Unknown", "Yes", "No"],
  },
});

apiSchema.virtual("reviews", {
  ref: "Review", // The model to use
  localField: "_id", // Find people where `localField`
  foreignField: "api", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  options: { sort: { date: -1 } }, // Query options, see http://bit.ly/mongoose-query-options
});

apiSchema.virtual("rating").get(function calculateRating() {
  const reviews = this.get("reviews");
  const ratings = reviews.map((rev) => rev.rating);
  if (ratings.length) {
    return (
      reviews.map((rev) => rev.rating).reduce((a, b) => a + b) / reviews.length
    );
  } else {
    return -1;
  }
});

const API = model("API", apiSchema);

module.exports = API;
