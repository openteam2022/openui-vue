<template>
    <header class="navbar">
        <NavbarBrand :logo="data.logo" :title="data.name"/>
        <NavbarItems :data="data.nav"/>
    </header>
</template>

<script >
    import NavbarBrand from './open_navbar_brand.vue'
    import NavbarItems from './open_navbar_items.vue'

    export default{
        components: {
            NavbarBrand,
            NavbarItems,
        },
        props: {
            data: {
                type: Object,
                default: (data)=>{
                    return data
                }
            }
        },
        data(){
            return {
                brand: {},

            }
        },
        mounted(){
        }
    }


</script>

<style scoped>
    .navbar{
        position: sticky;
        top: 0;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        box-sizing: border-box;
        padding: 0 2rem;
        background: rgba(250, 250, 250, .5);
        border-bottom: 1px #ededed solid;
    }
    @media (max-width: 419px){
        .navbar{
            padding: 0 1rem;
        }
       
    }
</style>