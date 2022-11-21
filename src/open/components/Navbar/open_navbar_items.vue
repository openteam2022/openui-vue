<template>
    <div class="navbar-items">
        <NavbarItem :data="data"/>
        <!-- <NavbarColor/> -->
    </div>
</template>

<script>
    import NavbarColor from './open_navbar_color.vue'
    import NavbarItem from './open_navbar_item.vue'
    export default{
        components: {
            NavbarColor,
            NavbarItem
        },
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        data(){

        }
    }
    
</script>

<style scoped>
    .navbar-items{
        display: flex;
        height: 100%;
    }
    @media (max-width: 719px){
        .navbar-items{
            display: none;
        }
    }
</style>
