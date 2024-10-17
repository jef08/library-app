const add_button = document.querySelector(".add");
const submit_button = document.querySelector("#submit")
const add_info = document.querySelector(".add-info");
const books = document.querySelector(".books");


//function book(title, author, num_pages, read) {
//    this.title = title;
//    this.author = author;
//    this.num_pages = num_pages;
//    this.read = read;
//}

const myLibrary = [];


//in html: onsubmit = "return false" so it doesnt reload the page after submitting//
//Something to work on, dont let user input no input.//
function addBookToLibrary() {

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    const titleValue = title.value;
    const authorValue = author.value;
    const pagesValue = pages.value;
    
    let booksObject = {title: titleValue, author: authorValue, pages: pagesValue};

    myLibrary.push(booksObject);
    console.log(myLibrary);

    //Solved by taking out loop. problem, on each new book, previous books are being reprinted. //
    const bookList = document.createElement("div");
    bookList.classname = "bookList";

    const list = document.createElement("p");

    list.innerText = `${booksObject.title} by ${booksObject.author}. Contains ${booksObject.pages} pages.`
    bookList.appendChild(list);
    books.appendChild(bookList);
    
}

submit_button.addEventListener("mousedown", addBookToLibrary)


//submit_button.addEventListener("mouseup", () => {
//    add_info.style.display = 'none';
//})


//myLibrary.push(titleValue);
 //   console.log(myLibrary);
    

//add_button.addEventListener("click", () => {
 //   add_info.style.display = 'flex';
//})





