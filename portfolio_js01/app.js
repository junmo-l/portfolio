// const a = 5;
// const b = 2;

// let myName = "junmo";
// console.log(a + b);
// console.log("hello " + myName);

// myName = "junmoLee";

// console.log("your new name is " + myName);

// const amIFat = null;
// console.log(amIFat);

// let something;
// console.log(something);

// array
// const daysOfWeek = ["mon", "tue", "wde", "thu", "fri", "sat", "sun"];
// console.log(daysOfWeek[6]);

// daysOfWeek.push("sunday");
// console.log(daysOfWeek[7]);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");
// console.log(toBuy);

// object
// const player = {
//   name: "junmo",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// player.lastname = "potato";
// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);
// console.log(player);

// funtion
// function sayHello(){
//     console.log("Hello my name is C");
// }
// console.log("hello");
// sayHello("junmo");
// sayHello("mojun");
// sayHello("leejun");

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }
// // 값넣기
// sayHello("junmo", 10);
// sayHello("mojun", 20);
// sayHello("leejun", 30);

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(8, 60);

// function divide(a, b) {
//   console.log(a / b);
// }
// divide(100, 2);

// const player = {
//   name: "junmo",
//   sayHello: function (otherPersonsName) {
//     console.log("hello! " + otherPersonsName + " nice to meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("msoso");

// const player = {
//   name: "junmo",
//   age: 27,
// };
// player.name = "junmolee";
// console.log(player);
// player.sexy = true;
// console.log(player);

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(100, 200);

const claculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

claculator.plus(5, 5);
claculator.minus(5, 5);
claculator.multi(5, 5);
claculator.divide(5, 5);
claculator.powerOf(5, 5);
