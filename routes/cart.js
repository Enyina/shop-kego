const router = require("express").Router();
const cartController = require("./../controllers/cartController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(cartController.getAllCarts)
  .post(authController.protect, cartController.createCart);

router.route("/:userId").get(cartController.getCart);

router
  .route(":id")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    cartController.updateCart
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    cartController.deleteCart
  );

module.exports = router;
