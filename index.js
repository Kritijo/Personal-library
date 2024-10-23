const dialog = document.querySelector("dialog");
const newBook = document.querySelector(".bttn-div button");
const form = document.querySelector("form");
const bookSection = document.querySelector(".book-section");

const myLibrary = [];

newBook.addEventListener("click",()=>dialog.showModal());

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let data = new FormData(form);
    
    let bookInstance = {};
    data.forEach((val,key) => bookInstance[key]=val);

    myLibrary.push(bookInstance);
    console.log(myLibrary);
    addBookToLibrary();

    dialog.close();
    form.reset();
});

function Book(book,author,pages,status){
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.status = status ? "read" : "not read yet";
}

Book.prototype.info = function(){
    return `${this.book} by ${this.author}, ${this.pages} pages, ${this.status}`
}




