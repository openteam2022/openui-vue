<template>
    <div class="navbar-dropdown">
        <p class="navbar-dropdown-title">
            <span>{{data.text}}</span>
            <svg t="1666525684412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2542" width="15" height="15"><path d="M512 657.723077c-7.876923 0-15.753846-3.938462-19.692308-7.876923l-240.246154-232.369231c-11.815385-11.815385-11.815385-31.507692 0-43.323077 11.815385-11.815385 31.507692-11.815385 43.323077 0l220.553847 212.676923 220.553846-212.676923c11.815385-11.815385 31.507692-11.815385 43.323077 0 11.815385 11.815385 11.815385 31.507692 0 43.323077l-240.246154 232.369231c-11.815385 3.938462-19.692308 7.876923-27.569231 7.876923z" fill="#666666" p-id="2543"></path></svg>
        </p>
        <ul>
            <li v-for="item in data.children">
                <AutoLink :item="item"/>
            </li>
        </ul>
    </div>
</template>

<script >
    import AutoLink from '../AutoLink/open_auto_link.vue'

    export default{
        components: {
            AutoLink
        },
        props: {
            data: {
                type: Object,
                default: {}
            }
        }
       
    }
    
    
</script>

<style scoped>
    .navbar-dropdown{
        height: inherit;
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
    }
    .navbar-dropdown-title{
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        height: 100%;
    }
    p{
        margin: 0;
    }
    .navbar-dropdown-title span{
        margin-right: 3px;
    }
    .navbar-dropdown-title:hover{
        color: var(--app-color);
    }
    .navbar-dropdown:hover ul{
        display: block;

    }
    .navbar-dropdown ul{
        position: absolute;
        top: 48px;
        right: 0;
        z-index: 99;
        background: #fff;
        box-shadow: 0px 1px 7px #ededed;
        display: none;
        border: 1px var(--app-border-color) solid;
        padding: 5px 0;
        width: 100px;
    }
    .navbar-dropdown ul li{
        padding: 5px 1rem;
        font-size: 0.8rem;
    }
    .navbar-dropdown ul li:hover{
        background: var(--app-bg);
    }
</style>