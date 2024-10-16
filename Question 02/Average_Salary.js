function averageSalary(employees) {
    let total_Salary = 0;
    for (const {salary} of employees) {
        total_Salary+=salary
    }
    average_salary=total_Salary/employees.length;
    return average_salary;
}

const employees = [
    {Name:"Rajesh", Age:24, Department:"Development", salary:50000},
    {Name:"Rajveer", Age:25, Department:"Analyst", salary:60000},
    {Name:"Rajat", Age:26, Department:"Tester", salary:70000}
];

console.log(averageSalary(employees))