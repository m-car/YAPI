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

const API = model("API", apiSchema);

module.exports = API;
