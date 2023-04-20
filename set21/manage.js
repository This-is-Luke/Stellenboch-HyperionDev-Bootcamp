// This is a fairly simple capstone submission
// First we start with the super class, which is the Employee class
class Employee 
{
constructor(name, age, salesTarget) 
{
    this.name = name;
    this.age = age;
    this.salesTarget = salesTarget;
}
}

// Then we create the subclasses, which are the SalariedEmployee, HourlyEmployee and HybridEmployee classes
class SalariedEmployee extends Employee 
{
constructor(name, age, salesTarget, salary) 
{
    super(name, age, salesTarget);
    this.salary = salary;
}
//Simple if statement (in shorthand) to check if the sales are greater than the sales target, if so, the salaried employee gets a 10% bonus
calculatePayout(sales) 
{
    return sales > this.salesTarget ? this.salary * 1.1 : this.salary;
}
}

class HourlyEmployee extends Employee 
{
constructor(name, age, salesTarget, hourlyRate, hoursLogged) 
{
    super(name, age, salesTarget);
    this.hourlyRate = hourlyRate;
    this.hoursLogged = hoursLogged;
}
// again a simple if statement to check if the sales are greater than the sales target, if so, the hourly employee gets a 50% bonus
calculatePayout(sales) 
{
    const rate = sales > this.salesTarget ? this.hourlyRate * 1.5 : this.hourlyRate;
    return rate * this.hoursLogged;
}
}

class HybridEmployee extends Employee 
{
constructor(name, age, salesTarget, salary, hourlyRate, hoursLogged) 
{
    super(name, age, salesTarget);
    this.salary = salary;
    this.hourlyRate = hourlyRate;
    this.hoursLogged = hoursLogged;
}
// again a simple if statement to check if the sales are greater than the sales target, if so, the hybrid employee gets a 20% bonus
calculatePayout(sales) 
{
    const rate = sales > this.salesTarget ? this.hourlyRate * 1.2 : this.hourlyRate;
    return this.salary + rate * this.hoursLogged;
}
}
  
  //Then I made a function to display the payout of each employee
  function displayPayout(employee, sales) 
  {
    // a variable to store the payout
    const payout = employee.calculatePayout(sales);
    // a variable to store the type of employee
    const employeeType = employee.constructor.name;
    // Then a consoloe.log template literal to display the name, type, payout, sales and sales target based off the new employees
    console.log(`${employee.name} (${employeeType}): R${payout.toFixed(2)} (Sales: ${sales}, Target: ${employee.salesTarget})`);
  }
  
// Then I created the new employees with constructor arguments (I choose to use more humane salaries and hourly rates)
//The sallaried employees only have 4 arguments, the name, age, sales target and salary
  const salariedEmployee1 = new SalariedEmployee('Luke', 30, 10, 30000);
  const salariedEmployee2 = new SalariedEmployee('Michelle', 35, 15, 35000);
//The hourly employees have 5 arguments, the name, age, sales target, hourly rate and hours logged
  const hourlyEmployee1 = new HourlyEmployee('Charlie', 25, 20, 15, 1600);
  const hourlyEmployee2 = new HourlyEmployee('Billy', 28, 25, 18, 1700);
//The hybrid employees have 6 arguments, the name, age, sales target, salary, hourly rate and hours logged
  const hybridEmployee1 = new HybridEmployee('Tyron', 32, 30, 25000, 120, 100);
  const hybridEmployee2 = new HybridEmployee('Chad', 40, 35, 28000, 140, 80);
  
// and filled out the simple tests  
  displayPayout(salariedEmployee1, 12);
  displayPayout(salariedEmployee2, 14);
  displayPayout(hourlyEmployee1, 22);
  displayPayout(hourlyEmployee2, 24);
  displayPayout(hybridEmployee1, 32);
  displayPayout(hybridEmployee2, 36);

  
// my fluenccy and understanding is increasing with each submission, I am starting to understand the concepts better and how to apply them to my code.