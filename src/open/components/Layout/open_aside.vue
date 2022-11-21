<template>
    <aside class="open-aside">
        <slot></slot>
    </aside>
</template>

<script>
    export default{
        name: 'OpenAside',
        props: {
            width: {
                type: String,
                default: '220px'
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
   .open-aside{
        width: v-bind(width);
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
   } 
</style>