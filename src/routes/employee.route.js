const router = require("express").Router();
const EmployeeController = require("../controllers/employee.controller");

//CREATE EMPLOYEE

router.post("/create", EmployeeController.create);

//GET ALL EMPLOYEES

router.get("/employees", EmployeeController.getAllEmployees);

//UPDATE

router.put("/update/:id", EmployeeController.update);

//DELETE

router.delete("/delete:id", EmployeeController.delete);

module.exports = router;
