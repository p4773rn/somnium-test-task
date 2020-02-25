<script>
// @ is an alias to /src
import BookItem from '@/components/BookItem.vue'
import books from '@/data/books.js'
import { mapGetters } from 'vuex'

export default {
    name: 'Shop',
    components: {
        BookItem,
    },
    computed: {
        ...mapGetters(['searchQuery']),
        books() {
            return books.filter(book =>
                book.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
        },
    },
}
</script>

<template lang="pug">
div   
    div.content
        div.list
            div(v-for="(book, index) in books")
                book-item.bookItem(:book="book", :class="{ 'bookItem--highlighted': index % 2 !== 0 }")
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
