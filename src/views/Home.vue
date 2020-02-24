<script>
// @ is an alias to /src
import BookItem from '@/components/BookItem.vue'
import books from '@/data/books.js'
export default {
    name: 'Home',
    components: {
        BookItem,
    },
    data() {
        return {
            books: books,
        }
    },
}
</script>

<template lang="pug">
    div.container
        div.list
            div(v-for="(book, index) in books")
                BookItem.bookItem(:book="book", :class="{ 'bookItem--highlighted': index % 2 !== 0 }")
</template>

<style lang="scss" scoped>
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
