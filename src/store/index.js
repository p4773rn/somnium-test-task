import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        booksInShoppingCart: [],
    },
    getters: {
        numberOfBooks: state => {
            return state.booksInShoppingCart.length
        },
    },
    mutations: {
        addBook(state, payload) {
            state.booksInShoppingCart.push(payload)
        },
    },
    actions: {},
    modules: {},
})
