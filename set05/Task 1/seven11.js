let num = parseInt(prompt("Enter an integer:"))

while (num.toString().match(/\D/)) //rejects any input that isn't a number
{
  alert("Please input a number.")
  num = parseInt(prompt("Enter an integer:"))
}

switch (true) 
{
  case (num % 7 === 0 && num % 11 === 0): // if num is divisible by both 
    alert(num + " is divisible by both 7 and 11.")
    break

  case (num % 11 === 0):// if num is only divisible by 11
    alert(num + " is divisible by 11.")
    break

  case (num % 7 === 0):// if num is only divisible by 7
    alert(num + " is divisible by 7.")
    break

  default:// if num is not divisible by either 
    alert(num + " is divisible by neither 7 nor 11.")
    break
}

// reference: hyperion docs
