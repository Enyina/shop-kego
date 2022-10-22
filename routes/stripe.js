const router = require("express").Router();
const stripe = require("./../controllers/stripe");

router.route("/payment").get(stripe.payment);

module.exports = router;
