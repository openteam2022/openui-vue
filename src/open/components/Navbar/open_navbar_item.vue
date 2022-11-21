<template>
    <div class="navbar-item">
        <div class="navbar-item-option" v-for="item in data">
            <NavbarDropdown :data="item" v-if="item.children"/>
            <AutoLink :item="item" v-else />
        </div>
    </div>
</template>

<script>
    import NavbarDropdown from './open_navbar_dropdown.vue'
    import AutoLink from '../AutoLink/open_auto_link.vue'
    export default{
        components: {
            NavbarDropdown,
            AutoLink,
        },
        props: {
            data: {
                type: Array,
                required: true
            },
        }
    }
    
</script>

<style scoped>
    .navbar-item{
        display: flex;
        align-items: center;
        height: inherit;
    }
    .navbar-item-option{
        margin: 0 0.8rem;
        height: inherit;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
</style>