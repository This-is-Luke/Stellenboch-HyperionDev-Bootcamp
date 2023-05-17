/* base psuedo
 consts to hold book object (auth,title,genre,disc = book obj)
 function to listen to form
 function to delete items
 function to makesure its stored in session data (bookStorage)
*/


// Event listener function for form's submit event
document.getElementById("book-form").addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the values of the author, title, genre, and description input fields
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const description = document.getElementById("description").value;
    
    // Create a new book object with the input field values
    const book = {
      author: author,
      title: title,
      genre: genre,
      description: description,
    };
  
    // Call the bookStorage function to save the book to session storage
    bookStorage(book);
  
    // Call the bookDisplayer function to add the book to the book list on the page
    bookDisplayer(book);
  
    // Reset the form to clear the input fields
    event.target.reset();
  });
  
  // Define a function to store a book object in session storage
  function bookStorage(book) {
    // Get the existing books array from session storage, or create an empty array if none exists
    const storedBooks = JSON.parse(sessionStorage.getItem("books")) || [];
  
    // Add the new book object to the array
    storedBooks.push(book);
  
    // Convert the updated array to a JSON string and store it in session storage
    sessionStorage.setItem("books", JSON.stringify(storedBooks));
  }
  
  // Define a function to display a book object in the book list on the page
  function bookDisplayer(book) {
    // Get the book list element from the page
    const bookList = document.getElementById("book-list");
  
    // Create a new list item element
    const listItem = document.createElement("li");
  
    // Set the text content of the list item to the book information
    listItem.textContent = `${book.title} by ${book.author} (${book.genre}) - ${book.description}`;
  
    // Create a new button element and set its attributes
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", () => {
    bookDeleter(book, listItem);
  });

  // Append the delete button and book list to the list item
  listItem.appendChild(deleteButton);
  bookList.appendChild(listItem);
  }

  // function to delete books
  function bookDeleter(book, listItem) {
    // Remove the book object from the stored books array
    const storedBooks = JSON.parse(sessionStorage.getItem("books")) || [];

     // Update the condition to compare book properties, this was to combat a logic error when deleting 
     // from sessionstorage
    const updatedBooks = storedBooks.filter(storedBook => 
    storedBook.author !== book.author ||
    storedBook.title !== book.title ||
    storedBook.genre !== book.genre ||
    storedBook.description !== book.description
  );
  
    // Update session storage with the new array
    sessionStorage.setItem("books", JSON.stringify(updatedBooks));
  
    // Remove the list item from the book list
    listItem.remove();
  }
  
  // Define a function to load stored books from session storage and display them on the page
  function storedBookLoader() {
    // Get the existing books array from session storage, or create an empty array if none exists
    const storedBooks = JSON.parse(sessionStorage.getItem("books")) || [];
  
    // Loop through the stored books and call the bookDisplayer function for each one
    storedBooks.forEach((book) => {
      bookDisplayer(book);
    });
  }
  
  // Call the storedBookLoader function when the page loads to display any stored books
  storedBookLoader();
  
