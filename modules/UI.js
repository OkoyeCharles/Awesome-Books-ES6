const booksContainer = document.querySelector('.added-books-container');

export default class UI {
  // Get Books from Local Storage and Updates the UI
  static updateBooks(booksContainer) {
    const books = JSON.parse(localStorage.getItem('books'));
    booksContainer.innerHTML = '';
    if (books) books.forEach((book) => this.addBook(book));
  }

  // Creates the UI's Book
  static addBook(book) {
    const bookUI = document.createElement('div');
    bookUI.className = 'book';
    const BookId = (book.title + book.author).replace(/\s/g, '');
    bookUI.setAttribute('id', (BookId));
    bookUI.innerHTML = `
                <p class="book-title">"
                    <span id='${BookId}title'>${book.title}</span>" by 
                    <span id='${BookId}author'>${book.author}</span>
                </p>
                <button class="${BookId}btn remove-button" type="button">
                    &times;
                </button>`;
    booksContainer.append(bookUI);
  }

  // Removes the Book
  static removeBook(BookId) {
    document.getElementById(BookId).remove();
  }

  // This displays an error
  static displayError(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.innerHTML = message;
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 3000);
  }

  // Check if book has been added
  static validate(book) {
    const books = JSON.parse(localStorage.getItem('books'));
    if (!books) return true;
    let count = 0;
    books.forEach((b) => {
      if (b.title === book.title && b.author === book.author) count += 1;
    });
    if (count === 0) return true;
    UI.displayError('Book title and author already added');
    return false;
  }
}

// This displays the page based on the clicked link
export const displayPage = () => {
  const main = document.querySelector('main');
  const sections = Array.from(document.querySelectorAll('section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  navLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
      sections.forEach((section) => section.classList.add('hide'));
      main.children[i].classList.remove('hide');
      navLinks.forEach((link) => { link.className = 'nav-link'; });
      navLinks[i].classList.add('active');
    });
  });
};