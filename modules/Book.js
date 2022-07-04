// ====== Book Class : Creates a Book when Instantiated ======
export default class Book {
  constructor(title, author) {
    this.id = (title + author).replace(/\s/g, '');
    this.title = title;
    this.author = author;
  }
}