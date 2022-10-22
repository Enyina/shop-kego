const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A product must have a name"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A product name must have less or equal then 40 characters",
      ],
      minlength: [
        10,
        "A product name must have more or equal then 10 characters",
      ],
    },
    desc: {
      type: String,
      required: [true, "A product must have a discription"],
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
