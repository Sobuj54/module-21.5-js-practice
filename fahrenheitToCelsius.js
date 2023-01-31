function temperatureConverter(valNum) {
  var celsius = (valNum - 32) / 1.8
  var celsius = celsius.toFixed(2)
  return parseFloat(celsius)
}
const temp = 103
const celsius = temperatureConverter(temp)

console.log(celsius)
