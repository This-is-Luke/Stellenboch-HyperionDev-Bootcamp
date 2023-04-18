// This function converts the input temperature value between Celsius, Fahrenheit, and Kelvin
// It first retrieves the input temperature value and selected unit from the HTML elements
// Then it checks if the input is a valid number and returns an error message if not
// If the input is valid, it performs the appropriate temperature conversion calculation based on the selected unit
// The result is then displayed in the HTML element with id "result" as a string with interpolated variables.


function convertTemperature() {
    const tempInput = document.getElementById("temp")
    const unitSelect = document.getElementById("unit")
    const result = document.getElementById("result")
    const temp = parseFloat(tempInput.value)
    const unit = unitSelect.value

    if (isNaN(temp)) 
    {
        result.textContent = "Please enter a valid temperature."
        return
    }
    if (unit === "c") 
    {
        const f = ((temp * 9/5) + 32).toFixed(2)
        const k = (temp + 273.15).toFixed(2)
        result.innerHTML = `${temp} Celsius = ${f} Fahrenheit, <br><br>and<br><br> ${temp} Celsius = ${k} Kelvin`
    } 
    else if (unit === "f") 
    {
        const c = ((temp - 32) * 5/9).toFixed(2)
        const k = ((temp + 459.67) * 5/9).toFixed(2)
        result.innerHTML = `${temp} Fahrenheit = ${c} Celsius, <br><br>and<br><br> ${temp} Fahrenheit = ${k} Kelvin`
    } 
    else if (unit === "k") 
    {
        const c = (temp - 273.15).toFixed(2)
        const f = ((temp * 9/5) - 459.67).toFixed(2)
        result.innerHTML = `${temp} Kelvin = ${c} Celsius, <br><br>and<br><br> ${temp} Kelvin = ${f} Fahrenheit`
    }
}

// I did go a bit beyond with this assignment, I am proud of the solution but please do let me know if I must resubmit without the extra credit. 
//I will await your response. Thank you for your time and patience.