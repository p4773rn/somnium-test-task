<script>
import AppTextField from '@/components/AppTextField'
export default {
    name: 'App',
    components: {
        AppTextField,
    },
}
</script>

<template lang="pug">
    div#app
        div#nav
            div.title Book Shopping
            div.search
                app-text-field.search__field(placeholder="Поиск")
            div.shoppingCart
                img.shoppingCart__icon(src="@/assets/shopping_cart.svg")
            //- <router-link to="/">Home</router-link> |
            //- <router-link to="/about">About</router-link>
        router-view
</template>

<style lang="scss">
html,
body {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #263238;
    color: #eceff1;
    font-size: 30px;

    padding: 16px;
    margin-bottom: 16px;
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
        width: 100%;
        height: 32px;

        padding: 0 4px;

        font-size: 18px;

        background: #cfd8dc;
        background-image: url('/assets/shopping_cart.svg');
    }
}

.shoppingCart {
    flex: 1;

    &__icon {
        float: right;
        width: 32px;
    }
}
</style>
