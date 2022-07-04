// ====== Store Class: Handles all Operations on Local Storage ======
export default class Store {
  static setBook(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static addBook(book) {
    // Check if books exist then add them to Local Storage
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    this.setBook(books);
  }

  static getBooks() {
    // Retrieve books from Storage
    const books = JSON.parse(localStorage.getItem('books'));
    return books;
  }

  static removeBook(ID) {
    let books = Store.getBooks();
    books = books.filter((book) => book.id !== ID);
    this.setBook(books);
  }
}
