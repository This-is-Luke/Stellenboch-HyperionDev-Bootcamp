const side1 = 5
const side2 = 10
const side3 = 5
const side4 = 10
const corner1 = 100
const corner2 = 80
const corner3 = 100
const corner4 = 80

let shape = ""

switch(true) 
{
  case (side1 === side2 && side2 === side3 && side3 === side4 && corner1 === 90 && corner2 === 90 && corner3 === 90 && corner4 === 90):
    shape = "Square"
    break
  case (side1 === side3 && side2 === side4 && corner1 === 90 && corner2 === 90 && corner3 === 90 && corner4 === 90):
    shape = "Rectangle"
    break
  case (side1 === side2 && side2 === side3 && side3 === side4 && (corner1 === corner3 || corner2 === corner4)):
    shape = "Rhombus"
    break
  case (side1 === side3 && side2 === side4 && (corner1 === corner3 || corner2 === corner4)):
    shape = "Parallelogram"
    break
}

if (shape !== "") 
{
  console.log(shape)
} 
else 
{
  console.log("Shape could not be determined.")
}

/*reference: 
hyperion docs  
https://www.mathsteacher.com.au/year10/ch06_geometry/06_quadrilaterals/quad.htm
*/