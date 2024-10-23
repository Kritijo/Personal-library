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
    addBookToLibrary();

    dialog.close();
    form.reset();
});

function Book(book,author,pages,status){
    this.bookName = book;
    this.author = author;
    this.pages = pages;
    this.status = status ? "read" : "not read yet";
}

Book.prototype.info = function(){
    return `${this.book} by ${this.author}, ${this.pages} pages, ${this.status}`
}

function addBookToLibrary() {
    let bookObj = myLibrary[myLibrary.length-1]
    let book = new Book(bookObj.book, bookObj.author, bookObj.pages, bookObj.status);

    createCards(book);
}

function createCards(book){
    let card = document.createElement("div");
    card.className = "card"
    
    let cardText1 = document.createElement("div");
    let cardText2 = document.createElement("div");
    let cardText3 = document.createElement("div");
    let cardText4 = document.createElement("div");
    let cardText5 = document.createElement("div");
    let deleteCard = document.createElement("button");
    cardText5.className = "delete-div";

    cardText1.textContent = `Book : ${book.bookName}`;
    cardText2.textContent = `Author : ${book.author}`;
    cardText3.textContent = `Pages : ${book.pages}`;
    cardText4.textContent = `Status : ${book.status}`;

    deleteCard.textContent = "Delete Card"
    deleteCard.addEventListener("click",()=>{
        let idx = myLibrary.indexOf(book);
        myLibrary.splice(idx-1,1);
        card.remove()
    });

    cardText5.append(deleteCard);
    card.append(cardText1,cardText2,cardText3,cardText4,cardText5);
    bookSection.append(card);
}


