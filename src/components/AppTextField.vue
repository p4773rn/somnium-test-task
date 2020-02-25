<script>
export default {
    name: 'AppTextField',
    props: {
        placeholder: String,
        value: String,
    },
}
</script>

<template lang="pug">
input.appTextField(:placeholder="placeholder", :value="value", @input="$emit('input', $event.target.value)")
</template>

<style lang="scss" scoped>
.appTextField {
    border: none;
    border: 1px solid #455a64;
}
</style>
