const router = require("express").Router();

router.get("/my-posts", (req, res) => {
  res.render("my-posts", {layout: "dashboard"})
})
module.exports = router;