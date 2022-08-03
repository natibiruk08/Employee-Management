const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First Name can not be empty"],
    },
    last_name: {
      type: String,
      required: [true, "Last Name can not be empty"],
    },
    age: {
      type: Number,
      required: [true, "Age can not be empty"],
    },
    salary: {
      type: Number,
      required: [true, "Salary can not be empty"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employees", EmployeeSchema);
