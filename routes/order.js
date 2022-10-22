const router = require("express").Router();
const orderController = require("./../controllers/orderController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.getAllOrders
  )
  .post(authController.protect, orderController.createOrder);

router
  .route("/:userId")
  .get(authController.protect, orderController.getUserOrder);

router
  .route(":id")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.updateOrder
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.deleteOrder
  );

router
  .route("/income")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.monthlyIncome
  );

module.exports = router;
