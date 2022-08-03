const Employee = require("../models/Employee");

const EmployeeService = {
  CreateEmployee: async (employeeData) => {
    try {
      const employee = new Employee({
        first_name: employeeData.first_name,
        last_name: employeeData.last_name,
        age: employeeData.age,
        salry: employeeData.salry,
      });
      return await employee.save();
    } catch (error) {
      console.log(error);
      return "Something went wrong!";
    }
  },
  UpdateeEmployee: async (newEmployeeData, employeeId) => {
    try {
      const filter = { _id: employeeId };
      const { first_name, last_name, age, salary } = newEmployeeData;
      const update = {
        first_name,
        last_name,
        age,
        salary,
      };
      await Employee.findOneAndUpdate(filter, update);
      return await Employee.findById(id);
    } catch (error) {
      console.log(error);
      return "Something went wrong!";
    }
  },
  GetEmployees: async (page, limit) => {
    try {
      if (!page || !limit) {
        return await Employee.find({});
      }
      return await Employee.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } catch (error) {
      console.log(error);
      return "Something went wrong!";
    }
  },
  DeleteEmployee: async (employeeId) => {
    try {
      const filter = {
        _id: employeeId,
      };

      return await Employee.deleteOne(filter);
    } catch (error) {
      console.log(error);
      return "Something went wrong!";
    }
  },
};

module.exports = EmployeeService;
