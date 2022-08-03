const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const employeeRoutes = require("./src/routes/employee.route");
app.use(express.json());

app.listen(process.env.PORT || "5000", () => {
  console.log("backend is running");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/", employeeRoutes);
