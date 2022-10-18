/*
DESCRITPTION:

Debug celsius converter

Your friend is traveling abroad to the United States so he wrote a 
program to convert fahrenheit to celsius. Unfortunately his code has 
some bugs.

Find the errors in the code to get the celsius converter working 
properly.

To convert fahrenheit to celsius:

celsius = (farenheit - 32) * (5/9)

Remember that typically temperatures in the current weather conditions 
are given in whole numbers. It is possible for temperature sensors to 
report temperatures with a higher accuracy such as to the nearest tenth. 
Instrument error though makes this sort of accuracy unreliable for many 
types of temperature measuring sensors.
*/
//function
function weatherInfo (temp) {
    let c = (temp)
    if (c > 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    let celsius = weatherInfo(temp) - 32 + (5/9)
    return celsius
}
//Test cases
console.log(weatherInfo(50)) //'10 is above freezing temperature 
console.log(weatherInfo(23)) //'-5 is freezing temperature 