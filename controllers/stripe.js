const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.payment = (req, res, next) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        next(new AppError(stripeErr, 500));
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
