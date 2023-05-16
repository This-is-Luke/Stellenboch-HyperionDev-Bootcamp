/*This example shows how we use the built-in methods getElementbyId, createElement and appendChild for manipulating
our HTML page. */

/*See the querySelector method below. 
    The querySelector method finds the first Element within the document that matches the specified selector, or group of selectors.
    For more info about this methos see here:https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    The code below, therefore, finds an ordered list <ol> element.
    We store a reference to the <ol> element that is found in a variable called htmList. */
let htmlList = document.querySelector('ol');

alert("The list items on this page were added using JavaScript!! :) ");

    /* We want to add listItems <li> to the ordered list element that we found above. To do this,
    we first have to create a list item. Notice how an element can be created below using the createElement method. 
    Here we create 4 <li> elements. */
for (i = 0; i < 5; i++) {
     let listItem = document.createElement('li');
     /*Once we have create the <li> elements, we set the innerHTML for each element and then use the 
    appendChild method to add each <li> element to the <ol> element that we found before that we 
    stored in a variable called htmlList. */
    listItem.innerHTML = "I am list item number " + i;
   htmlList.appendChild(listItem);
}
  
