const employeesArray = []
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() 
{
  // TODO: Get user input to create and return an array of employee objects
  let keepGoing = true
    while (keepGoing === true)
    {
        let newEmployeeFN = window.prompt("Please enter the employee's first name")
        //if return's are to make sure that all fields are filled
        if (!newEmployeeFN) 
        {
            return;
        }
        let newEmployeeLN = window.prompt("Please enter the employee's last name")
        if (!newEmployeeLN) 
        {
            return;
        }
        let newEmployeeSalary = window.prompt("Please enter the employee's salary")

        let employee =
        {
            firstName: newEmployeeFN,
            lastName: newEmployeeLN,
            salary: parseInt(newEmployeeSalary)
        };
        employeesArray.push(employee);

        keepGoing = window.confirm("Add another employee?");           
    }
    //console.log(employeesArray)
    return employeesArray;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) 
{
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary = 0;
  for(let employee of employeesArray) 
  { 
    totalSalary = totalSalary + employee.salary
  }
  averageSalary = parseFloat(totalSalary / employeesArray.length)
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) 
{
  // TODO: Select and display a random employee
  let minCeil = Math.ceil(0);
  let maxFloor = Math.floor(employeesArray.length);
  let randomWinner = Math.floor(Math.random() * (maxFloor - minCeil) + minCeil)
  //console.log(randomWinner)
  console.log(`Congratulations to ${employeesArray[randomWinner].firstName} ${employeesArray[randomWinner].lastName}, our random drawing winner!`)
  return employeesArray[randomWinner]
}

/*
  ==================================================================================================================================
  STARTER CODE
  Do not modify any of the code below this line:
  ==================================================================================================================================
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
