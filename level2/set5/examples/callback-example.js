/* 
	The function below accepts two arguments, a string value is passed to the parameter 'text'
	and a function is passed to the parameter 'callback'. This illustrates the use of a callback
	function. Notice that the function with the identifier 'b' (Line 9), is passed as an argument
	to the function below ('a') when function a is called in line 14. 
*/
function a(text, callback) {
	callback(text);
}

function b(text) {
	console.log(text + "! It's me!");
}

// call function 'a' with a predefined callback 'b'
a("Hello world", b);

// call function 'a' with a custom callback.
a("Hello world", function(text) {
	console.log(text + ", I can use callbacks");
});
