const express = require("express");
const app = express();
const sellerSignupRoute = require("./router/sellersignup");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/sellersignup", sellerSignupRoute);

module.exports = app;
