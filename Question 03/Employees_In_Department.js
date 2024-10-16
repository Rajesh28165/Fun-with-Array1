function employeesInDepartment(employees,Depart) {
    const filtered_employees = employees.filter(elem => elem.Department===Depart);
    const employeeNames = filtered_employees.map(elem => elem.Name);
    return employeeNames;
}

const employees = [
    {Name:"Rajesh", Age:24, Department:"Development", salary:50000},
    {Name:"Rajveer", Age:25, Department:"Analyst", salary:60000},
    {Name:"Rajat", Age:26, Department:"Tester", salary:70000},
    {Name:"Rajiv", Age:26, Department:"Development", salary:80000}
];

console.log(employeesInDepartment(employees,"Development"))