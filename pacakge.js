var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.isAvailable = function () {
        return this.available;
    };
    Book.prototype.borrow = function () {
        if (this.available) {
            this.available = false;
            console.log("Book \"".concat(this.title, "\" by ").concat(this.author, " has been borrowed."));
        }
        else {
            console.log("Book \"".concat(this.title, "\" by ").concat(this.author, " is not available."));
        }
    };
    Book.prototype.returnBook = function () {
        if (!this.available) {
            this.available = true;
            console.log("Book \"".concat(this.title, "\" by ").concat(this.author, " has been returned."));
        }
        else {
            console.log("Book \"".concat(this.title, "\" by ").concat(this.author, " is already available."));
        }
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.getTitle(), "\" by ").concat(book.getAuthor(), " has been added to the library."));
    };
    Library.prototype.displayBooks = function () {
        console.log("Books available in the library:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". \"").concat(book.getTitle(), "\" by ").concat(book.getAuthor(), " (").concat(book.isAvailable() ? 'Available' : 'Not Available', ")"));
        });
    };
    return Library;
}());
// Example usage:
var library = new Library();
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee");
var book3 = new Book("1984", "George Orwell");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayBooks();
book1.borrow();
book2.borrow();
book1.returnBook();
library.displayBooks();
