let foodArr = ['Even Stevens', 'Spitz', 'Hamachi Sushi Bar', 'Red Iguana', 'Bombay House', "Feldman's Deli", "Cafe Rio", "Pizza Nono", "The Pie Pizzeria", "Tonyburgers"]


function randomGenerator () {
const randomElement = [Math.floor(Math.random() * foodArr.length)];
 document.write(foodArr[randomElement]);
}