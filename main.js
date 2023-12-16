// Define a book object constructor
function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
}

// Array to store the collection of books
const booksCollection = [];

// Function to add a book to the collection
function addBook(title, author, ISBN) {
    const newBook = new Book(title, author, ISBN);
    booksCollection.push(newBook);
    // Log the updated collection to the console for demonstration
    console.log("Book added:", newBook);
    console.log("Updated collection:", booksCollection);
}

// Function to remove a book from the collection
function removeBook(ISBN) {
    // Find and remove the book with the given ISBN
    const indexToRemove = booksCollection.findIndex(book => book.ISBN === ISBN);
    if (indexToRemove !== -1) {
        const removedBook = booksCollection.splice(indexToRemove, 1)[0];
        // Log the removed book and the updated collection to the console for demonstration
        console.log("Book removed:", removedBook);
        console.log("Updated collection:", booksCollection);
    } else {
        console.log("Book not found in the collection.");
    }
}

// Function to add a book to the collection and update the HTML
function addBook(title, author, ISBN) {
    const newBook = new Book(title, author, ISBN);
    booksCollection.push(newBook);

    // Update the HTML to display the updated list of books
    updateBooksList();

    // Log the updated collection to the console for demonstration
    console.log("Book added:", newBook);
    console.log("Updated collection:", booksCollection);
}

// Function to update the HTML with the list of books
function updateBooksList() {
    const booksListContainer = document.getElementById("books-list");
    // Clear the existing list
    booksListContainer.innerHTML = "";

    // Populate the list with the updated collection
    booksCollection.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author} (ISBN: ${book.ISBN})`;
        booksListContainer.appendChild(listItem);
    });
}

// Event listener for the "Add Book" form
document.getElementById("add-book-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from the form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const ISBN = document.getElementById("isbn").value;

    // Add the book to the collection
    addBook(title, author, ISBN);

    // Clear the form fields
    event.target.reset();
});

// ... (remaining code)


// Example usage
addBook("The Great Gatsby", "F. Scott Fitzgerald", "978-3-16-148410-0");
addBook("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");
removeBook("978-3-16-148410-0");
