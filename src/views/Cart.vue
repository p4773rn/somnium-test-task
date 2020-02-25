<script>
import BookItem from '@/components/BookItem'
import strings from '@/strings/main'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Cart',
    components: {
        BookItem,
    },
    beforeMount() {
        this.updateSearchQuery('')
    },
    data() {
        return {
            strings,
        }
    },
    computed: {
        ...mapGetters(['books', 'searchQuery', 'totalCost']),
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
    div.spacer
    div.list
        div(v-for="(book, index) in filteredBooks")
            book-item.bookItem(:book="book", :class="{ 'bookItem--highlighted': index % 2 !== 0 }", :inCart="true")
        div.noBooksText(v-if="books.length < 1") {{ strings.cartIsEmpty }}
    div.spacer
    div.checkout
        span.checkout__text {{ `${strings.totalCost}: $${totalCost}` }}
</template>

<style lang="scss" scoped>
.content {
    margin-top: 96px;

    display: flex;
}
.spacer {
    flex: 1;
}
.list {
    flex: 4;
    max-width: 900px;
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
.checkout {
    position: fixed;
    right: 0;
    margin-right: 8px;
    flex: 1;
    &__text {
        padding-left: 20px;

        font-size: 22px;
        font-weight: 700;
        color: #d31d1d;
    }
}
</style>
