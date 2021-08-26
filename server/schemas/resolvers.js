const { AuthenticationError } = require("apollo-server-express");
const { User, API, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    search: async (parent, { input }) => {
      const regex = new RegExp(`${input}`, "i");
      return API.find({ $or: [{ title: regex }, { category: regex }] });
    },
    test: () => {
      return API.find({ category: "Animals" });
    },
    getApi: async (parent, { id }) => {
      return API.findById(id).populate("reviews");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { api, username, comment, rating }) => {
      const newReview = await Review.create({ api, username, rating, comment });
      return newReview;
    },
  },
};

module.exports = resolvers;
