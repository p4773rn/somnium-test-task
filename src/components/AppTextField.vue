<script>
export default {
    name: 'AppTextField',
    props: {
        placeholder: String,
    },
}
</script>

<template lang="pug">
input.appTextField(:placeholder="placeholder")
</template>

<style lang="scss" scoped>
.appTextField {
    border: none;
    border: 1px solid #455a64;
}
</style>
