<script>
export default {
    name: 'App',
}
</script>

<template lang="pug">
    div#app
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
</style>
