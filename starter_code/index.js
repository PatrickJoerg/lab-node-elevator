const Elevator = require('./elevator.js');
const Person = require ('./person.js');

let myElevator = new Elevator;
myElevator.update();

var julia = new Person ("Julia", 3, 8);
myElevator.call(julia);
var peter = new Person ("Peter", 3, 9);
myElevator.call(peter);
var hans = new Person ("Hans", 10, 5);
myElevator.call(hans);
var horst = new Person ("Horst", 0, 10);
myElevator.call(horst);
myElevator.start();

