const bookDisplay = document.querySelector('.bookDisplay');


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = read;

}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
myLibrary.push(theHobbit);

function displayBooks() {
    bookDisplay.textContent = '';
    myLibrary.forEach(book => {

        const bookCard = document.createElement("div");
        bookCard.classList.add('bookCard');

        //Title
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;

        //Author
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;

        //Pages
        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${book.pages}`;

        //isRead?
        const bookReadStatus = document.createElement('p');
        bookReadStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        //Add param to card
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookReadStatus);

        bookDisplay.appendChild(bookCard);

    })
}
displayBooks();


const newBookBtn = document.querySelector('.addBook');
const bookContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');

newBookBtn.addEventListener('click', function() {
    bookContainer.style.display = 'block';
})

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //Get the user input values from form

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = parseInt(document.querySelector('#pages').value);
    const read = document.querySelector('#read').value;

    //Add that value to our Library
    addBookToLibrary(title, author, pages, read);

    bookContainer.style.display = 'none';

    displayBooks();

})
