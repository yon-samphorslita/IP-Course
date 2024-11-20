<template>
    <button class="button" :class="color" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'ButtonComponent',
        props: {
            color: {
                type: String,
                default: 'default',
            },
        },
        methods: {
            handleClick() {
                this.$emit('click');
            },
        },
    };
</script>

<style scoped>
.button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
.default {
    background-color: #28a745;
    color: white;
}
</style>