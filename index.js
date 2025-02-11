const bookDisplay = document.querySelector('.bookDisplay');


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = read;

}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
addBookToLibrary("How I Raised Myself From Failure to Success in Selling", "Frank Bettger", 208, true);
myLibrary.push(theHobbit);

function displayBooks() {
    bookDisplay.textContent = '';
    myLibrary.forEach((book, index) => {

        const bookCard = document.createElement("div");
        bookCard.classList.add('bookCard');
        bookCard.setAttribute('data-index', index);

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

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(index);
        })

        const changeReadStatus = document.createElement('button');
        changeReadStatus.textContent = 'Change Read Status';
        changeReadStatus.addEventListener('click', () => {
            book.changeReadStatus();
            displayBooks();
        })

        //Add param to card
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookReadStatus);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(changeReadStatus);

        bookDisplay.appendChild(bookCard);

    });
}
  function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
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
