module.exports = class Database {
    #storage = {
        authors: [],
        posters: [],
        books: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key] //Função para acessar algum conteudo q esta dentro do storage
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBook(bookStorage) {
        return this.#storage.books.find(b => b.name === bookStorage) //Com essa arrowFunction, estou procurando se o livro em questão ja esta salvo no storage
    }

    saveBook(book) {
        const bookExist = this.findBook(book.name)//cA variavel esta armazenando os books existentes
        if (!bookExist) {
            this.#storage.books.push(book)
        }
    }

    addBook(bookStorage, qnt) {
        const book = this.findBook(bookStorage)//Estou verificando se o produto esta no estoque
        book?.addStock(qnt)// Estou utilizando o encadeamento condicional para verificar se o book realmente existe(se n é um valor nulo)
    }

    removeBook(bookStorage, qnt) {
        const book = this.findBook(bookStorage)
        book?.removeStock(qnt)
    }
    findPoster(poster) {
        return this.#storage.posters.find(p => p.name === poster)
    }

    savePoster(posterStorage) {
        const posterExist = this.findPoster(posterStorage.name)
        if (!posterExist) {
            this.#storage.posters.push(posterStorage)
        }
    }

    addPoster(posterStorage, qnt) {
        const poster = this.findPoster(posterStorage)
        poster?.addStock(qnt)
    }

    removePoster(posterStorage, qnt) {
        const poster = this.findPoster(posterStorage)
        poster?.removeStock(qnt)
    }

    saveUser(user) {
        const userExist = this.#storage.users.find(u => u.email === user.email)
        if (!userExist) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data)) //A order possui os atributos privados, então estou usando essa função para poder usar o metodo criado para mostrar os valores desses atributos
    }
}