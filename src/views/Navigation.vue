<script>
import AppTextField from '@/components/AppTextField'
import strings from '@/strings/main'
import { mapGetters } from 'vuex'

export default {
    name: 'Navigation',
    components: {
        AppTextField,
    },
    data() {
        return {
            strings,
        }
    },
    computed: {
        ...mapGetters(['numberOfBooks']),
        searchQuery: {
            get() {
                return this.$store.state.searchQuery
            },
            set(value) {
                this.$store.commit('updateSearchQuery', value)
            },
        },
        currentRouteIsShop() {
            return this.$route.name === 'Shop'
        },
    },
    methods: {
        updateSearchQuery(e) {
            this.$store.commit('updateSearchQuery', e.target.value)
        },
    },
}
</script>
<template lang="pug">
div#nav
    div.title Book Shopping
    div.search
        app-text-field.search__field(:placeholder="strings.search", v-model="searchQuery")
    div.shoppingCart
        router-link.shoppingCart__link(v-if="currentRouteIsShop", to="/cart")
            img.shoppingCart__icon(src="@/assets/shopping_cart.svg")
            span.shoppingCart__name {{ strings.shoppingCart + (numberOfBooks > 0 ? ` | ${numberOfBooks}` : '') }}
        router-link.shoppingCart__link(v-else, to="/")
            img.shoppingCart__icon(src="@/assets/arrow_back.svg")
            span.shoppingCart__name {{ strings.back }}

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

    &__link {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        text-decoration: none;
        color: white;
    }
    &__name {
        font-size: 22px;
    }

    &__icon {
        padding-right: 16px;
        width: 32px;
    }
}
</style>
