const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landing", {loggedIn: false})
});
router.get('/all', (req, res) => {
  res.render("all-posts", {loggedIn: false})
});
router.get("/login", (req, res) => {
  res.render("login", {loggedIn: false})
});
router.get("/signup", (req, res) => {
  res.render("signup", {loggedIn: false})
});

router.get("/goodbye", (req, res) => {
  res.render("goodbye")
})

module.exports = router;