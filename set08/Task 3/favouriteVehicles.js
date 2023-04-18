// fist set the array and favorite car variables
let cars = ["Audi", "BMW", "Dodge", "Ford", "Honda"]
let favoriteCar = "Ford"
// Itterate through the array with a for loop and compare the array to the favorite car variable
for (let i = 0; i < cars.length; i++) 
{
  if (cars[i] === favoriteCar) 
  {
    console.log("The " + favoriteCar + " is my favourite car!")
  } 
  else 
  {
    console.log("The " + cars[i] + " is not my favourite car")
  }
}
// reference: hyperion docs