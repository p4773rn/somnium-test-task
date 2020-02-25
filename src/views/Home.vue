<script>
// @ is an alias to /src
import BookItem from '@/components/BookItem.vue'
import AppTextField from '@/components/AppTextField'
import books from '@/data/books.js'
import strings from '@/strings/main'
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        BookItem,
        AppTextField,
    },
    data() {
        return {
            strings,
            searchText: '',
        }
    },
    computed: {
        ...mapGetters(['numberOfBooks']),
        books() {
            return books.filter(book =>
                book.name.toLowerCase().includes(this.searchText.toLowerCase())
            )
        },
    },
}
</script>

<template lang="pug">
div
    div#nav
        div.title Book Shopping
        div.search
            app-text-field.search__field(:placeholder="strings.search", v-model="searchText")
        div.shoppingCart
            span.shoppingCart__name {{ strings.shoppingCart + (numberOfBooks > 0 ? ` | ${numberOfBooks}` : '') }}
            img.shoppingCart__icon(src="@/assets/shopping_cart.svg")
            
    div.content
        div.list
            div(v-for="(book, index) in books")
                book-item.bookItem(:book="book", :class="{ 'bookItem--highlighted': index % 2 !== 0 }")
</template>

<style lang="scss" scoped>
#nav {
    position: fixed;
    top: 0;
    width: calc(100% - 32px);

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #263238;
    color: #eceff1;
    font-size: 30px;

    padding: 16px;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #425eb9;
        }
    }
}

.title {
    flex: 1;
}

.search {
    flex: 1;
    text-align: center;
    &__field {
        height: 32px;
        width: calc(100% - 8px);
        padding: 0 4px;

        font-size: 18px;

        background: #cfd8dc;
        background-image: url('/assets/shopping_cart.svg');
    }
}

.shoppingCart {
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    &__name {
        padding-right: 16px;

        font-size: 22px;
    }

    &__icon {
        width: 32px;
    }
}

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
