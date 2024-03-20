class Book {
    private title: string;
    private author: string;
    private available: boolean;
  
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
      this.available = true;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    isAvailable(): boolean {
      return this.available;
    }
  
    borrow(): void {
      if (this.available) {
        this.available = false;
        console.log(`Book "${this.title}" by ${this.author} has been borrowed.`);
      } else {
        console.log(`Book "${this.title}" by ${this.author} is not available.`);
      }
    }
  
    returnBook(): void {
      if (!this.available) {
        this.available = true;
        console.log(`Book "${this.title}" by ${this.author} has been returned.`);
      } else {
        console.log(`Book "${this.title}" by ${this.author} is already available.`);
      }
    }
  }
  
  class Library {
    private books: Book[];
  
    constructor() {
      this.books = [];
    }
  
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Book "${book.getTitle()}" by ${book.getAuthor()} has been added to the library.`);
    }
  
    displayBooks(): void {
      console.log("Books available in the library:");
      this.books.forEach((book, index) => {
        console.log(`${index + 1}. "${book.getTitle()}" by ${book.getAuthor()} (${book.isAvailable() ? 'Available' : 'Not Available'})`);
      });
    }
  }
  
  // Example usage:
  const library = new Library();
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
  const book3 = new Book("1984", "George Orwell");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  library.displayBooks();
  
  book1.borrow();
  book2.borrow();
  book1.returnBook();
  
  library.displayBooks();
  