var name = "moshiur";
// console.log(typeof (name), name);
var num = 14;
// console.log(typeof num);
var num = true;
// console.log(typeof num);
var a = 10;
var b = 5;
var sum = a + b;
var sub = b - a;
var div = a / b;
var mul = a * b;
// console.log("sum of " + a + " " + "and " + b + " is: " + sum);
// console.log("subtraction of " + b + " " + "and " + a + " is: " + sub);
// console.log("Division of " + a + " " + "and " + b + " is: " + div);
// console.log("Multiplication of " + a + " " + "and " + b + " is: " + mul);
var c = 3;
var mul3 = a ** c;
// console.log(mul3);

// convert datatype
var d = 40;
var e = parseFloat("50.50");
var add = d + e;
// console.log(add);

var firstName = "moshiur";
var lastName = " rahman";
// var fullName = firstName + " " + lastName;
var fullName = firstName.concat(lastName);
// console.log(fullName);
var len = fullName.length;
// console.log(len);

var newArray = ["kamal", "jamal", "rahim", "jalil"];

// console.log(newArray[2]);

// var user = expload("kamal", "jamal", "rahim","karim");

var myArray = new Array("bangladesh", "india", "pakistan");
// var index = myArray.indexOf('comilla');
// myArray.pop();
// myArray.pop();
// myArray.pop();
myArray.push("dhaka");
myArray.push("comilla");
myArray.push("bandarban");
myArray.push("sylet");
myArray.unshift("USA", "UK", "poland", "japan");
console.log(myArray);