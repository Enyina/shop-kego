const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const Product = require("./../models/Product");

//Create product
exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    data: { newProduct },
  });
});

//Get Product
exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError("No product with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { product },
  });
});

//Get All Product
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const qCategory = req.query.category;
  const qNew = req.query.new;
  let products;
  if (qNew) {
    const products = await Product.find().sort({ createdAt: -1 }).limit(1);
  } else if (qCategory) {
    products = await Product.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else {
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    products = await features.query;
  }
  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

//Update Product
exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("No product with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { product },
  });
});

//Delete Product
exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new AppError("No product with that ID found", 404));
  }

  res.status(200).json({
    status: "success",
  });
});
