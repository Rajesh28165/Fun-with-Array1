function EmployeeInformation(employees) {
    const{Name:secondEmployeeName, Department:secondEmployeeDepartment} = employees[1];
    return {secondEmployeeName, secondEmployeeDepartment}
}

const employees = [
    {Name:"Rajesh", Age:24, Department:"Development", salary:50000},
    {Name:"Rajveer", Age:25, Department:"Analyst", salary:60000},
    {Name:"Rajat", Age:26, Department:"Tester", salary:70000}
];

console.log(EmployeeInformation(employees))