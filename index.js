require("dotenv").config();
const {resolvePort} = require("./utils/startup");
// Load the app only after .env is initialized: app.js connects to MongoDB.
const app = require("./app");

const port = resolvePort(process.env.PORT);
app.listen(port, () => {
  console.log("Server running on port " + port);
});
