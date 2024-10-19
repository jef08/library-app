const add_button = document.querySelector(".add");
const submit_button = document.querySelector("#submit")
const add_info = document.querySelector(".add-info-container");
const books = document.querySelector(".books");
const exit_button = document.querySelector(".exit");
const table = document.querySelector(".table");

const myLibrary = [];

//in html: onsubmit = "return false" so it doesnt reload the page after submitting//
//Something to work on, dont let user input no input.//
function addBookToLibrary() {

    //code to put form input into object array//
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    const titleValue = title.value;
    const authorValue = author.value;
    const pagesValue = pages.value;

    
    let booksObject = {title: titleValue, author: authorValue, pages: pagesValue};

    myLibrary.push(booksObject);
    console.log(myLibrary);


    //code to print out books into table//

    //create new row, give it a class//
    const bookTable = document.createElement("tr");
    bookTable.classname = "bookTable";

    //delete/erase button//
    const delete_button = document.createElement("button");
    delete_button.className = "delete_button";
    span = document.createElement("span");
    span.innerHTML = "Erase";

    //checkbox//
    const check_box = document.createElement("INPUT");
    check_box.setAttribute("type", "checkbox");
    check_box.className = "check_box";

    //insert cells//
    const read_button = bookTable.insertCell(0);
    const titleData = bookTable.insertCell(1);
    const authorData = bookTable.insertCell(2);
    const pagesData= bookTable.insertCell(3);
    const erase_button = bookTable.insertCell(4);

    //give the cells their data from the object array//
    read_button.innerHTML = "";
    titleData.innerHTML = `${booksObject.title}`;
    authorData.innerHTML = `${booksObject.author}`;
    pagesData.innerHTML = `${booksObject.pages}`;
    erase_button.innerHTML = "";
    
    //append cells to row and row to html table//
    read_button.appendChild(check_box);
    
    delete_button.appendChild(span);
    erase_button.appendChild(delete_button);
    
    bookTable.appendChild(read_button);
    bookTable.appendChild(titleData);
    bookTable.appendChild(authorData);
    bookTable.appendChild(pagesData);
    bookTable.appendChild(erase_button);
    
    table.appendChild(bookTable);

    //event listener for erasing row//
    delete_button.addEventListener("click", () => {
    bookTable.deleteCell(0);
    bookTable.deleteCell(1);
    bookTable.deleteCell(1);
    bookTable.deleteCell(0);
    bookTable.deleteCell(0);
})    

}

//add the info button with above function//
submit_button.addEventListener("mousedown", addBookToLibrary)

//buttons//
submit_button.addEventListener("mouseup", () => {
    add_info.style.display = 'none';
})

exit_button.addEventListener("click", () => {
    add_info.style.display = 'none';
})

add_button.addEventListener("click", () => {
   add_info.style.display = 'flex';
})


