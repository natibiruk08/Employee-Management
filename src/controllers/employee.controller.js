const EmployeeService = require("../services/employee.service");

//CREATE NEW EMPLOYEE
exports.create = async (req, res) => {
  try {
    const employeeData = req.body;

    const newEmployee = await UserService.CreateUser(employeeData);

    if (!newEmployee) {
      return res.status(500).json({ message: "Failed!" });
    }
    return res.json({
      newEmployee,
      message: "Employe created successfully!",
    });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

//UPDATE EMPLOYEE

exports.update = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const employeeData = req.body;

    const updatedemployee = await EmployeeService.UpdateeEmployee(
      employeeData,
      employeeId
    );
    if (!updatedemployee) {
      return res.status(500).json({ message: "Failed!" });
    }
    return res.json({
      updatedemployee,
      message: "Employee updated successfully!",
    });
  } catch (error) {
    res.send(error);
  }
};

//DELETE EMPLOYEE

exports.delete = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const deletedEmployee = await EmployeeService.DeleteEmployee(employeeId);

    if (!deletedEmployee) {
      return res.status(500).json({ message: "Failed!" });
    }
    return res.json({
      deletedEmployee,
      message: "Employee deleted successfully!",
    });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

//GET A SINGLE EMPLOYEES

exports.getEmployee = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

//GET ALL EMPLOYEES

exports.getAllEmployees = async (req, res) => {
  try {
    const { page, limit } = req.query;
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};
