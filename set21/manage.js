// This is a fairly simple capstone submission
// First we start with the super class, which is the Employee class
class Employee 
{
constructor(name, age, salesTarget) 
{
    this.name = name
    this.age = age
    this.salesTarget = salesTarget
}
}

// Then we create the subclasses, which are the SalariedEmployee, HourlyEmployee and HybridEmployee classes
class SalariedEmployee extends Employee 
{
constructor(name, age, salesTarget, salary) 
{
    super(name, age, salesTarget)
    this.salary = salary
}
//Simple if statement (in shorthand) to check if the sales are greater than the sales target, if so, the salaried employee gets a 10% bonus
calculatePayout(sales) 
{
    return sales > this.salesTarget ? this.salary * 1.1 : this.salary
}
}

class HourlyEmployee extends Employee 
{
constructor(name, age, salesTarget, hourlyRate, hoursLogged) 
{
    super(name, age, salesTarget)
    this.hourlyRate = hourlyRate
    this.hoursLogged = hoursLogged
}
// again a simple if statement to check if the sales are greater than the sales target, if so, the hourly employee gets a 50% bonus
calculatePayout(sales) 
{
    const rate = sales > this.salesTarget ? this.hourlyRate * 1.5 : this.hourlyRate
    return rate * this.hoursLogged
}
}

class HybridEmployee extends Employee 
{
constructor(name, age, salesTarget, salary, hourlyRate, hoursLogged) 
{
    super(name, age, salesTarget)
    this.salary = salary
    this.hourlyRate = hourlyRate
    this.hoursLogged = hoursLogged
}
// again a simple if statement to check if the sales are greater than the sales target, if so, the hybrid employee gets a 20% bonus
calculatePayout(sales) 
{
    const rate = sales > this.salesTarget ? this.hourlyRate * 1.2 : this.hourlyRate
    return this.salary + rate * this.hoursLogged
}
}
  
  //Then I made a function to display the payout of each employee
  function displayPayout(employee, sales) 
  {
    const payout = employee.calculatePayout(sales)
    const employeeType = employee.constructor.name
    const formula = getFormula(employeeType, sales, employee)
    console.log(`${employee.name} (${employeeType}): R${payout.toFixed(2)} (${formula})`)
  }

  //Then I need a function to get the formula for each employee
  function getFormula(employeeType, sales, employee) 
  { 
    //I used a if statement to check which employee type it is and then return the correct formula
    if (employeeType === 'SalariedEmployee') 
    {
      return sales > employee.salesTarget ? 'salary * 1.1' : 'salary'
    } 
    else if (employeeType === 'HourlyEmployee') 
    {
      return sales > employee.salesTarget ? 'hourlyRate * 1.5 * hoursLogged' : 'hourlyRate * hoursLogged'
    } 
    else if (employeeType === 'HybridEmployee') 
    {
      return sales > employee.salesTarget ? 'salary + hourlyRate * 1.2 * hoursLogged' : 'salary + hourlyRate * hoursLogged'
    }
  }
  
  //Then I created the employees and the sales data arrayy
  const salariedEmployee1 = new SalariedEmployee('Luke', 30, 10000, 30000)
  const salariedEmployee2 = new SalariedEmployee('Michelle', 35, 15000, 35000)
  const hourlyEmployee1 = new HourlyEmployee('Charlie', 25, 8000, 20, 1600)
  const hourlyEmployee2 = new HourlyEmployee('Billy', 28, 9000, 25, 1700)
  const hybridEmployee1 = new HybridEmployee('Tyron', 40, 12000, 25000, 15, 100)
  const hybridEmployee2 = new HybridEmployee('Chad', 45, 13000, 28000, 18, 120)
  const salesData = 
  {
    Alice: 11000,
    Bob: 14000,
    Carol: 8500,
    David: 9500,
    Eve: 12500,
    Frank: 13500,
  }
  
  //Then I could call the displayPayout function for each employee and the sales data for each
  displayPayout(salariedEmployee1, salesData['Alice'])
  displayPayout(salariedEmployee2, salesData['Bob'])
  displayPayout(hourlyEmployee1, salesData['Carol'])
  displayPayout(hourlyEmployee2, salesData['David'])
  displayPayout(hybridEmployee1, salesData['Eve'])
  displayPayout(hybridEmployee2, salesData['Frank'])
  
