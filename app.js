let myLibrary = [];

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

// form

const form_book = document.querySelector(".form_newbook");
form_book.addEventListener("submit", addBook);

function addBookToLibrary(newBook) {
    console.log(newBook);
    myLibrary.push(newBook);
    saveLocal();
    console.log(myLibrary);
}

function addBook() {
    addBookToLibrary(inputBook());
}

function inputBook() {
    const title = document.querySelector("#new_book").value;
    const author = document.querySelector("#new_author").value;
    return new Book(title, author);
}

function saveLocal() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }

function restoreLocal() {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    if (myLibrary === null) myLibrary = [];
  }
  
  restoreLocal();

// show books
const showBooks = document.querySelector(".showBooks");
showBooks.addEventListener("click", displayBooks);

function displayBooks(){
    for (let element in myLibrary) {
        console.log(myLibrary[element].title);
    }
}