function thirdEmployeeInfo(employees) {
    const {Name:thirdEmployeeName, Age:thirdEmployeeAge, salary:thirdEmployeeSalary} = employees[2]
    const bonus=(thirdEmployeeSalary*10)/100
    return `Name:${thirdEmployeeName}, Age:${thirdEmployeeAge}, Salary:${thirdEmployeeSalary}, Bonus:${bonus}`
}

const employees = [
    {Name:"Rajesh", Age:24, Department:"Development", salary:50000},
    {Name:"Rajveer", Age:25, Department:"Analyst", salary:60000},
    {Name:"Rajat", Age:26, Department:"Tester", salary:70000}
];

console.log(thirdEmployeeInfo(employees))