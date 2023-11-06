var x = 52;
var y = '50';
var z = x + y * 2;
var w = 500;
var a;
var b = null;
let c = false;
let d = true;
let name = "Bango";
// console.log("The final result is "+ z);



//results = "Your final result is: ";

//console.log("exp: "+ x + y)
//console.log("exp: "+ x + y * 2)

//console.log(x > w ? x : w);

console.log(b ?? "b is null");
console.log(a ?? b);
console.log(w ?? a);
console.log(c ?? b);

console.log( "Hello " + (name ? name : "there"));