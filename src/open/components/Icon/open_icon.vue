<template>
    <div class="open-icon">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'OpenIcon'
    }
</script>
<style scoped>
    .open-icon{
        display: inline-block;
        width: 25px;
        height: 100%;
    }
</style>