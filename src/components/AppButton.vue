<script>
export default {
    name: 'AppButton',
}
</script>

<template lang="pug">
button.appButton(@click="$emit('click')")
    slot
        | Submit
</template>

<style lang="scss" scoped>
.appButton {
    display: flex;
    align-items: center;

    background-color: #4caf50;
    color: white;

    padding: 4px 4px;

    border: none;
    text-decoration: none;

    cursor: pointer;

    &:active {
        background-color: #3f9242;
    }
}
</style>
