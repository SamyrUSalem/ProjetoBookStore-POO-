module.exports = class Order {
    #items //Os itens seriam o produto e a sua quantidade
    #user
    #total
    constructor(items, user) {
        items.forEach(({ product, qnt }) => { //O items foi destruturado para realizar uma verificação, q seria identificar se possui a quantidade de item q o cliente deseja
            if (qnt > product.inStock) {
                throw new Error(`Infelizmente, não foi possível prosseguir!`) //Essa classe é usada para mostrar como se fosse um error do JavaScript normal
            }
        });
        this.#user = user
        this.#items = items
        this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0) //Estou utilziando o reduce para realizar o calclulo de valor total dos produtos, o sum seria o valor acumulado, então o valor do produto foi multiplicado pela quantidade e com isso tem o valor total, e o sum foi inicializado no 0(pq com esse acumulador q o reduce possui, todos os valores serão armazendos, caso o cliente compre livros, posters, etc...

    }
    get data() { //Dessa forma, sera possivel acessar os valores privados
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}

