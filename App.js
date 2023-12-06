const Database = require("./dataBase")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
    static #database = new Database()

    createUser(name, password, email) {
        const user = new User(name, password, email)
        App.#database.saveUser(user)
    }

    getUsers() { //Método para encontrar todos os usuarios q estão no dataBase
        return App.#database.find("users")
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find("authors")
    }

    createBook(title, synopse, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopse, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
        return App.#database.find("books")
    }

    addBookInSotck(book, qnt) {
        App.#database.addBook(book, qnt)
    }
    cretePoster(name, description, price, heigh, width, inStock) {
        const poster = new Poster(name, description, price, heigh, width, inStock)
        App.#database.savePoster(poster)
    }

    getPosters() {
        return App.#database.find("posters")
    }


    addBookInSotck(poster, qnt) {
        App.#database.addPoster(poster, qnt)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {//Essa função esta sendo utilizada para retirar do estoque os livros e poster vendidos, sera feito uma buscar em cada item do array
            if (product instanceof Book) {
                App.#database.removeBook(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePoster(product.name, quantity)
            }
        })
    }


    getOrders() {
        return App.#database.find("orders")
    }

    showDataBase() {
        App.#database.showStorage()
    }
}