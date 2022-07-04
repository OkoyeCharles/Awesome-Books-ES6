// ====== Book Class : Creates a Book when Instantiated ======
export class Book {
  constructor(title, author) {
    this.id = (title + author).replace(/\s/g, "");
    this.title = title;
    this.author = author;
  }
}