const router = require("express").Router();
const homeRoutes = require("./open");
const dashboardRoutes = reqiuire("./closed.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes)
module.exports = router;