const Product = require("./Product")

module.exports = class Book extends Product {
    constructor(title, synopse, genre, pages, author, description, price, inStock = 0) {
        super(`Book: ${title}`, description, price, inStock)
        this.synopse = synopse
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}