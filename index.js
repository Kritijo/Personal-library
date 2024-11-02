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
    new addBookToLibrary().createCards();

    dialog.close();
    form.reset();
});

class Book{
    constructor(book,author,pages,status){
        this.bookName = book;
        this.author = author;
        this.pages = pages;
        this.status = status ? "read" : "not read yet";
    }
    info(){
        return `${this.book} by ${this.author}, ${this.pages} pages, ${this.status}`
    }
}

class addBookToLibrary{
    bookObj = myLibrary[myLibrary.length-1]
    book = new Book(this.bookObj.book, this.bookObj.author, this.bookObj.pages, this.bookObj.status);

    createCards(){
        let card = document.createElement("div");
        card.className = "card"
    
        let cardText1 = document.createElement("div");
        let cardText2 = document.createElement("div");
        let cardText3 = document.createElement("div");
        let cardText4 = document.createElement("div");
        let cardText5 = document.createElement("div");
        let deleteCard = document.createElement("button");
        let changeStatus = document.createElement("button");
        cardText5.className = "delete-div";

        cardText1.textContent = `Book : ${this.book.bookName}`;
        cardText2.textContent = `Author : ${this.book.author}`;
        cardText3.textContent = `Pages : ${this.book.pages}`;
        cardText4.textContent = `Status : ${this.book.status}`;

        changeStatus.textContent = "Change Status";
        deleteCard.textContent = "Delete Card";

        cardText5.append(changeStatus, deleteCard);
        card.append(cardText1,cardText2,cardText3,cardText4,cardText5);
        bookSection.append(card);
        this.updateCards(changeStatus,deleteCard,cardText4,card);
        }

    updateCards(changeStatus,deleteCard,cardText4,card){
        changeStatus.addEventListener("click",()=>{
            this.book.status = (this.book.status === "read") ? "not read yet" : "read";
            cardText4.textContent = `Status : ${this.book.status}`;
        })
        deleteCard.addEventListener("click",()=>{
            let idx = myLibrary.indexOf(this.book);
            myLibrary.splice(idx-1,1);
            card.remove()
        });
    }
}
