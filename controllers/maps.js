const Map = require("../models/Maps");
require("dotenv").config({ path: "./config/.env" });

module.exports = {
  getFarm: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("farm.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

};