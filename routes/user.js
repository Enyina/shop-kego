const router = require("express").Router();
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/resetPassword", authController.forgotPassword);

router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateMe", authController.protect, userController.updateMe);
router.delete("/deleteMe", authController.protect, userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.stats
  );

router.route("/:id").get(userController.getUser);

module.exports = router;
