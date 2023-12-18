//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let message =
lightBulbStatus === "On"
? "Light bulb status is On."
: lightBulbStatus === "Off"
? "Light bulb status is Off."
: lightBulbStatus === "Broken"
? "Light bulb stats is Broken."
: "Please choose the correct input (On/Off)"
console.log(message)