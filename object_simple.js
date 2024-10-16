// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

const user = {};
user.name = "Alise";
user.age = "25";
user.email = "alice@example.com";

user.greet = function() {
  console.log(`Hi , ${this.name}`);
}

user.updateEmail = function(){
  console.log(`My new email is: ${this.email}`);
  
}
// user.greet();
// user.updateEmail("newalice@example.com");

// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
const workers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Max", age: 47 }
];

function filterUsersByAge(minAge) {
  return workers.filter(worker => worker.age > minAge);
}

const olderUsers = filterUsersByAge(24);
// console.log(olderUsers);


// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
const collection = [
  { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
  { title: "1984", pages: 328, pagesRead: 50 },
  { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
];


function countTotalPagesRead() {
 return collection.reduce((sum, obj) =>  sum + obj.pagesRead, 0);
}

const totalRead = countTotalPagesRead();
// console.log(totalRead);


// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.
const library = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    isRead: false
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 635,
    isRead: true
  }
];

function addNewBook(title, author, pages, isRead) {
  let newBook = {
    title: title,
    author: author,
    pages: pages,
    isRead: isRead
  };
  
  library.push(newBook);
}

function listBooks() {
  library.forEach(book =>{ 
    let readStatus = book.isRead ? "Yes" : "No"; // Use a ternary operator for readability
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: "${readStatus}"`);
  });
  
}

// addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
// addNewBook("1984", "George Orwell", 328, false);
// console.log(library);

// listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no

// 5. Extra: Grouping Library Functions into One Object
const librarySystem = {
  books: [],

  addNewBook(book) {
    return this.books.push(book);
  },

  listBooks() {
    this.books.forEach(book => {
        const readStatus = book.isRead ? "Yes" : "No"; 
        console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: "${readStatus}"`);
    });
},

  getBookById(bookId) {
    return this.books[bookId] || undefined;
  },

  updateBook(bookId, updatedBook) {
    const book = this.books[bookId];
    if (book) {
        let keys = Object.keys(updatedBook);
        
        keys.forEach(key => {
            book[key] = updatedBook[key];
        });

        return book;
    }
    
},

deleteBook(bookId) {
  if (bookId >= 0 && bookId < this.books.length) {
    this.books.splice(bookId, 1);
    return true;
  }
  return false;
},


  getBooksByAvailableStatus(status) {
    return this.books.filter(book => book.isAvailable === status);
  }
};

let book = {      
  title:"The Great Gatsby",
  author:"F. Scott Fitzgerald",
  year:1925,
  genre:"Fiction",
  pages:180,
  isRead:true,
  isAvailable: true
  };

  let newBook = {      
    title:"1984",
    author:"George Orwell",
    year:1949,
    genre:"Dystopian",
    pages:328,
    isRead:false,
    isAvailable:false
  }

// Example usage:
// librarySystem.books // book[]

// librarySystem.addNewBook(book);
// librarySystem.addNewBook(newBook);

// List all books
// librarySystem.listBooks() //print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'

// console.log( librarySystem.getBookById(1)); // :book | undefined

// console.log(librarySystem.updateBook(1, { isAvailable: true })); // :book

// console.log(librarySystem.deleteBook(1));  // :true/false

// console.log(librarySystem.getBooksByAvailableStatus(true)); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }
