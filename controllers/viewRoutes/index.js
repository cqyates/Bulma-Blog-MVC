const router = require("express").Router();
const homeRoutes = require("./open.js");
const dashboardRoutes = require("./closed.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes)
module.exports = router;