//A class, a Array, a few functions and console logs to test the functions
// First the class to create the shoes objects
class Shoes 
{
    //I used a constructor to create the object 
    constructor(name, productCode, quantity, valuePerItem) {
      this.name = name;
      this.productCode = productCode;
      this.quantity = quantity;
      this.valuePerItem = valuePerItem;
    }
}
  //Then populate some variables with new objects  
  let shoes1 = new Shoes("Nike", "NIF1", 10, 2459);
  let shoes2 = new Shoes("Adidas", "ADF2", 8, 1549);
  let shoes3 = new Shoes("Puma", "PUF3", 12, 2199);
  let shoes4 = new Shoes("Reebok", "REF4", 5, 1129);
  let shoes5 = new Shoes("Vans", "VAF5", 15, 660);

  //Then I created an array to store the objects and pushed the objects into the array
  let shoesArray = [];
  shoesArray.push(shoes1, shoes2, shoes3, shoes4, shoes5);

//Then I needed to create a function to search for a shoe by name  
function searchShoe(name) 
{
  const shoe = shoesArray.find(shoe => shoe.name === name);
  if (shoe) 
  {
    console.log(`Found: ${shoe.name}, Product Code: ${shoe.productCode}, Quantity: ${shoe.quantity}, Cost: R${shoe.valuePerItem}`);
  } else 
  {
    console.log(`Shoe not found: ${name}`);
  }
}

//Then I needed to create a function to find the lowest cost shoe
function findLowestValueShoe() 
{
  const lowestValueShoe = shoesArray.reduce((currentLowest, shoe) => shoe.valuePerItem < currentLowest.valuePerItem ? shoe : currentLowest);
  console.log(`Lowest Value Shoe we have is: ${lowestValueShoe.name}, Cost: R${lowestValueShoe.valuePerItem}`);
}

//Then I needed to create a function to find the highest cost shoe
function findHighestValueShoe() 
{
  const highestValueShoe = shoesArray.reduce((currentHighest, shoe) => shoe.valuePerItem > currentHighest.valuePerItem ? shoe : currentHighest);
  console.log(`Highest Value Shoe we have is: ${highestValueShoe.name}, Cost: R${highestValueShoe.valuePerItem}`);
}

//Then I needed to create a function to edit a shoe array
function editShoe(name, attributeName, newValue) 
{
  const shoe = shoesArray.find(shoe => shoe.name === name);
  if (shoe && attributeName in shoe) 
  {
    shoe[attributeName] = newValue;
    console.log(`Updated shoe: ${shoe.name}, ${attributeName} = ${newValue}`);
  } 
  else 
  {
    console.log(`Shoe not found or invalid attribute: ${name}, ${attributeName}`);
  }
}

//Then I needed to create a function to order the shoes by cost in acending order
function orderShoeByCost()
{
  const orderedShoes = shoesArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
  console.log("Ordered by Cost:");
  orderedShoes.forEach(shoe => console.log(`Name: ${shoe.name}, Cost: R${shoe.valuePerItem}`));
}

//Then a simple console log to test the results of the functions
  console.log("==========================================================")
  console.log("If searching by name eg 'Nike' or 'Adidas'...")
  searchShoe("Nike");
  searchShoe("Adidas");
  console.log("==========================================================")
  console.log("If searching for highes or lowest cost shoes...")
  findLowestValueShoe();
  findHighestValueShoe();
  console.log("==========================================================")
  console.log("If editing a shoe eg 'Nike', 'quantity', 20 and updating the price..." )
  console.log(shoes1)
  editShoe("Nike", "quantity", 20);
  console.log(shoes1)
  editShoe("Nike", "valuePerItem", 3000);
  console.log(shoes1)
  console.log("==========================================================")
  console.log("To simply order by price...")
  orderShoeByCost();
  console.log("==========================================================")






  //I typed the word Shoe so many times in this I started doubting my spelling of it...