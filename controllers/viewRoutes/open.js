const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landing", {loggedIn: req.session.logged_in, layout: "main"})
});
router.get('/all', (req, res) => {
  res.render("all-posts", {loggedIn: req.session.logged_in, layout: "main"})
});
router.get("/login", (req, res) => {
  res.render("login", {loggedIn: req.session.logged_in, layout: "main"})
});
router.get("/signup", (req, res) => {
  res.render("signup", {loggedIn: req.session.logged_in, layout: "main"})
});

router.get("/goodbye", (req, res) => {
  res.render("goodbye")
})

module.exports = router;