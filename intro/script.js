// Your JavaScript code goes below!
// This code will add extra functionality to your HTML page
// This is a JavaScript comment, by the way

// This code declares some variables!
// We can always change their values later
let name = "Paws"
let age = 25;

// This is a function! We can call it to do something
function sayName() {
	alert(name)
}

// What do you think this function will do?
function sayHello(message) {
	// message is an argument of this function--data passed into it we can do something with
	alert(message);
}

function changeHeading(newText) {
	// What does this do?
	// Go investigate!
	document.getElementById("foo").innerText = newText
}

// For more help writing JS code, check out:
// https://www.w3schools.com/js/js_syntax.asp

// For a challenge, you can try:

// 1. Use the built-in prompt function to get a user's name, then use it to greet them!
// https://www.w3schools.com/jsref/met_win_prompt.asp
// 2. Use the built-in confirm function and an if statement to display different messages depending on what user selects
// https://www.w3schools.com/jsref/met_win_confirm.asp
// https://www.w3schools.com/js/js_if_else.asp