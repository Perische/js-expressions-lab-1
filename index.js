//! Start by creating the variables for the data recorded
const day1 = "32°F";
const day2 = "25°C";
const day3 = "70°F";
const day4 = "18°C";
const day5 = "80°F";
const day6 = "15°C";
const day7 = "72°F";
const day8 = "28°C";
const day9 = "68°F";
const day10 = "20°C";
const day11 = "75°F";
const day12 = "23°C";
const day13 = "82°F";
const day14 = "30°C";
const day15 = "65°F";
const day16 = "22°C";
const day17 = "77°F";
const day18 = "26°C";
const day19 = "78°F";
const day20 = "24°C";
const day21 = "73°F";
const day22 = "21°C";
const day23 = "79°F";
const day24 = "27°C";
const day25 = "71°F";
const day26 = "19°C";
const day27 = "74°F";
const day28 = "17°C";
const day29 = "76°F";
const day30 = "29°C";

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const temperaturesCelsius = [
  (32 - 32) * 5 / 9,
  25,
  (70 - 32) * 5 / 9,
  18,
  (80 - 32) * 5 / 9,
  15,
  (72 - 32) * 5 / 9,
  28,
  (68 - 32) * 5 / 9,
  20,
  (75 - 32) * 5 / 9,
  23,
  (82 - 32) * 5 / 9,
  30,
  (65 - 32) * 5 / 9,
  22,
  (77 - 32) * 5 / 9,
  26,
  (78 - 32) * 5 / 9,
  24,
  (73 - 32) * 5 / 9,
  21,
  (79 - 32) * 5 / 9,
  27,
  (71 - 32) * 5 / 9,
  19,
  (74 - 32) * 5 / 9,
  17,
  (76 - 32) * 5 / 9,
  29
];

console.log(temperaturesCelsius);


//! Start the calculation of the total temperatures
const tot_temperature_in_fahrenheit = temperaturesCelsius
  .map(temp => (temp * 9 / 5) + 32)
  .reduce((sum, temp) => sum + temp, 0);

const tot_temperature_in_celsius = temperaturesCelsius.reduce((sum, temp) => sum + temp, 0);

//* Then apply the conversion to calculate the total in the other unit of measurement


//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
const avg_temperature_in_celsius =
  tot_temperature_in_celsius / temperaturesCelsius.length;

const avg_temperature_in_fahrenheit = (avg_temperature_in_celsius * 9 / 5) + 32;

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

