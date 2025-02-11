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

function addBook() {
    
}