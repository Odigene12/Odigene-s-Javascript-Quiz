// set variables tree character and tree height that use getElementById
// set varable that holds height and character variables
// create function that holds to variables from line 1
// create if/else statement that makes sure values are entered
// create function for second variable (with variable in argument) whose output goes into div in html tag
// create forloop that does tree height and character
// create function for clearing
// create eventlistener for clear button and calculate button

// create function that gets the values that the user places inside spaces and returns it
function getValue(){
	var treeHeight = document.getElementById("heightInput").value
	var treeChar = document.getElementById("charInput").value

	var input = {
	height: treeHeight,
	character: treeChar
	};
	console.log(treeHeight);
	return input
}

// create function that checks values (using a function) that are inputted by user and shoots out alert if they do not put any values and  
function checkInput(){
	var object = getValue()	
	console.log("object value", object);
	if (object.height === "" || object.character === ""){
		alert("Please input Stuff")
	}	
	else { 
		treetop(object)
	};
}

// create function that refreshes div and clears it out
function clear() {
  document.getElementById("treeDiv").innerHTML="";
}

// create function that builds tree using height and character input values and makes space between characters
function treetop(object) {
	for (i = 1; i <= object.height ; i++){
		var spaceJam = object.height -1
		var demChars = (i * 2) - 1

	};
}






// Add event listener for click that checks what is inputed into lines and then starts the tree
document.getElementById("butt").addEventListener("click", checkInput)
// Add event listener for click that clears values entered by user.
document.getElementById("butt2").addEventListener("click", clear)