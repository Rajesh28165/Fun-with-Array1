function totalSalaryByDepartment(employees,depart) {
    const filtered_employees=employees.filter(elem=>elem.department===depart);
    const total_salary=filtered_employees.reduce((sum,employee)=>sum+employee.salary,0);
    return total_salary
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(totalSalaryByDepartment(employees, "Finance"));
  
  
  
  