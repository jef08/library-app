const add_button = document.querySelector(".add");
const submit_button = document.querySelector("#submit")
const add_info = document.querySelector(".add-info");

const myLibrary = [];
function book(title, author, num_pages, read) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
}

submit_button.addEventListener("click", () => {
    add_info.style.display = 'none';
})

add_button.addEventListener("click", () => {
    add_info.style.display = 'flex';
})


const the_hobbit = new book("The Hobbit", "J.R.R. Tolkien", "295 pages", "read");
const great_gatsby = new book("The Great Gatsby", "F. Scott Fitzgerald", "192 pages", "read" );

book.prototype.info = function() {
     return `The book is called '${this.title}', the author is ${this.author}, it has ${this.num_pages} 
    and I have ${this.read} the book!`
}

console.log(the_hobbit.info());
console.log(great_gatsby.info());




