//variable to hold array of output
let items = [];
//fetch command from website
fetch("https://www.affirmations.dev/")

// then(pun intended) get the json data and then parse it to the items array
.then(res => res.json())
.then((result) => {
items = result;
console.log(items);
}),
//error handleing function
(error) => {
console.log(error);
}
