const router = require("express").Router();

router.get("/my-posts", (req, res) => {
  res.render("my-posts", {layout: "dashboard"})
})
router.get("/new-post", (req, res) => {
  res.render("new-post", {layout: "dashboard"})
})
module.exports = router;