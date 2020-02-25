import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        booksInShoppingCart: [],
        searchQuery: '',
    },
    getters: {
        numberOfBooks: state => {
            return state.booksInShoppingCart.length
        },
        books: state => {
            return state.booksInShoppingCart
        },
        searchQuery: state => {
            return state.searchQuery
        },
        totalCost: state => {
            return state.booksInShoppingCart
                .map(book => parseInt(book.price))
                .reduce((a, b) => a + b, 0)
        },
    },
    mutations: {
        addBook(state, payload) {
            state.booksInShoppingCart.push(payload)
        },
        removeBook(state, payload) {
            state.booksInShoppingCart.splice(
                state.booksInShoppingCart.findIndex(
                    book => book.id === payload.id
                ),
                1
            )
        },
        updateSearchQuery(state, query) {
            state.searchQuery = query
        },
    },
    actions: {},
    modules: {},
})
