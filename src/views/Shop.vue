<script>
// @ is an alias to /src
import BookItem from '@/components/BookItem.vue'
import books from '@/data/books.js'
import strings from '@/strings/main'
import { mapGetters } from 'vuex'

export default {
    name: 'Shop',
    components: {
        BookItem,
    },
    data() {
        return {
            strings,
        }
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
            div.noBooksText(v-if="books.length < 1") {{ strings.noResults }}
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
.noBooksText {
    text-align: center;
    font-size: 22px;
}
</style>
