const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors
app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});
//for user
const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);
//for product
const productRoute = require("./routes/productRoute");
app.use("/products", productRoute);

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(_dirname + "/" + "login.html");
});
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(_dirname + "/" + "register.html");
});
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(_dirname + "/" + "reset_password.html");
});
