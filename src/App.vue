<script>
import Navigation from '@/views/Navigation'
export default {
    name: 'App',
    components: {
        Navigation,
    },
}
</script>

<template lang="pug">
    div#app
        navigation
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
}
</style>
