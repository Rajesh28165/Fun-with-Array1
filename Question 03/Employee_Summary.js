function employeeSummary(employees) {
    result=[]
    employees.forEach(elem=>{
        const summary=`Employee ${elem.name} works in ${elem.department} department and earns $${elem.salary} annually.`;
        result.push(summary);
    });  
    return result;
};

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(employeeSummary(employees));

  