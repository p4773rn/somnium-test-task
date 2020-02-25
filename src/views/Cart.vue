<script>
import BookItem from '@/components/BookItem'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Cart',
    components: {
        BookItem,
    },
    beforeMount() {
        this.updateSearchQuery('')
    },
    computed: {
        ...mapGetters(['books', 'searchQuery']),
        filteredBooks() {
            return this.books.filter(book =>
                book.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
        },
    },
    methods: {
        ...mapMutations(['updateSearchQuery']),
    },
}
</script>

<template lang="pug">
div.content
    div.list
        div(v-for="(book, index) in filteredBooks")
            book-item.bookItem(:book="book", :class="{ 'bookItem--highlighted': index % 2 !== 0 }", :inCart="true")
</template>

<style lang="scss" scoped>
.content {
    margin-top: 96px;
}
.list {
    max-width: 900px;
    margin: auto;
}
.bookItem {
    background: #cfd8dc;
}
.bookItem--highlighted {
    background: #eceff1;
}
</style>
