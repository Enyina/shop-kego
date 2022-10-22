const express = require("express");
const cors = require("cors");
const connectDB = require("./config/DB");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripe");
const path = require("path");

const app = express();

app.use(express.json());

connectDB();

app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/checkout", stripeRoutes);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

module.exports = app;
