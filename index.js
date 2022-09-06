const employee = {};
employee.name = "Sweet Patot";
employee.streetAddress = "11 Sweet Patot Rd";
//employee.name = "isaac";
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfemployee = {...employee};
    copyOfemployee[key] = value;
    return copyOfemployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
    const copyOfemployee = {...employee};
    delete copyOfemployee[key];
    return copyOfemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
