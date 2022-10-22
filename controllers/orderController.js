const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const Order = require("./../models/Order");

//Create order
exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create(req.body);

  res.status(201).json({
    status: "success",
    data: { newOrder },
  });
});

//Get User Orders
exports.getUserOrder = catchAsync(async (req, res, next) => {
  const order = await Order.find({ userId: req.params.userId });

  if (!order) {
    return next(new AppError("No order with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

//Get All Order
exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: carts.length,
    data: {
      carts,
    },
  });
});

//Update Order
exports.updateOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!order) {
    return next(new AppError("No order with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

//Delete Order
exports.deleteOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) {
    return next(new AppError("No order with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
  });
});

exports.monthlyIncome = catchAsync(async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
