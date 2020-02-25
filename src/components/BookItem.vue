<script>
import AppButton from '@/components/AppButton'
import strings from '@/strings/main'
import { mapMutations } from 'vuex'

export default {
    name: 'BookItem',
    props: {
        book: Object,
    },
    components: {
        AppButton,
    },
    data() {
        return {
            strings,
            imageEnlarged: false,
        }
    },
    methods: {
        ...mapMutations(['addBook']),
        enlargeImage() {
            this.imageEnlarged = !this.imageEnlarged
            console.log('xD')
        },
    },
}
</script>

<template lang="pug">
div.container
    div.content--left
        div.cover(@click="enlargeImage", :class="{ 'cover--enlarged' : this.imageEnlarged }")
            img.cover__image(:src="book.cover", :class="{ 'cover--enlarged' : this.imageEnlarged }")
        div.description
            div.name {{ book.name }}
            div.author {{ `${strings.author}: ${book.author}` }}
            div.year {{ `${strings.year}: ${book.year}` }}
    div.content--right
        div.action
            app-button(@click="addBook(book)")
                img.action__icon(src="@/assets/add_shopping_cart.svg")
                span.action__text {{ strings.addToCart }}
        div.price {{ `$${book.price}` }}
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-height: 100px;

    padding: 8px 8px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}
.content--left {
    display: flex;
    align-items: stretch;
}
.cover {
    padding-right: 8px;
    height: 100px;

    transition: all 0.2s;

    cursor: pointer;

    &__image {
        max-width: 100%;
        max-height: 100%;
    }

    &--enlarged {
        height: 350px;
        width: auto;
    }
}
.description {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    * {
        padding: 2px 0;
    }
}
.name {
    font-size: 22px;
    font-weight: 600;
}
.author {
    font-size: 18px;
}
.year {
    font-size: 18px;
}

.content--right {
    display: flex;
    flex-direction: column;

    align-items: flex-end;
    justify-content: center;
}
.action {
    padding: 4px 0;

    &__icon {
        padding-right: 4px;
    }
    &__text {
        padding-right: 4px;
        font-size: 16px;
    }
}
.price {
    font-size: 19px;
    font-weight: 600;

    padding: 4px 0;
    color: #d31d1d;
}
</style>
