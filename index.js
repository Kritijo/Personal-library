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




