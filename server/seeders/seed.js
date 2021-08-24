const db = require("../config/connection");
const { User, Thought } = require("../models");
const userSeeds = require("./userSeeds.json");
const thoughtSeeds = require("./thoughtSeeds.json");

const createThought = async (thoughtData) => {
  const { _id, thoughtAuthor } = await Thought.create(thoughtData);
  return User.findOneAndUpdate(
    { username: thoughtAuthor },
    {
      $addToSet: {
        thoughts: _id,
      },
    }
  );
};

db.once("open", async () => {
  try {
    await db.dropDatabase();
    await User.create(userSeeds);
    await Promise.all(thoughtSeeds.map(createThought));
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
