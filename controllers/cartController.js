const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const Cart = require("./../models/Cart");

//Create cart
exports.createCart = catchAsync(async (req, res, next) => {
  const newCart = await Cart.create(req.body);

  res.status(201).json({
    status: "success",
    data: { newCart },
  });
});

//Get User Cart
exports.getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.params.userId });

  if (!cart) {
    return next(new AppError("No cart with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { cart },
  });
});

//Get All Cart
exports.getAllCarts = catchAsync(async (req, res, next) => {
  const carts = await Cart.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: carts.length,
    data: {
      carts,
    },
  });
});

//Update Cart
exports.updateCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!cart) {
    return next(new AppError("No cart with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { cart },
  });
});

//Delete Cart
exports.deleteCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);

  if (!cart) {
    return next(new AppError("No cart with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
  });
});
