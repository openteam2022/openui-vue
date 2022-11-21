<template>
    <div class="navbar-brand">
        <div class="navbar-brand-pc">
            <a href="">
                <img :src="logoVal" alt="">
                <h4>{{nameVal}}</h4>
            </a>
        </div>
        <div class="navbar-brand-mobile">
            <span >
                <svg t="1666517242150" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2559" width="25" height="25"><path d="M905.2 144.9h-785c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h785c31.3 0 56.7-4.7 56.7-36.4v-7.7c0-31.7-25.4-57.3-56.7-57.3zM800.7 459.8H120.2c-31.3 0-56.7 25.6-56.7 57.3v-13.2c0 31.6 25.4 57.3 56.7 57.3h680.5c31.3 0 56.7-25.6 56.7-57.3v13.2c0-31.6-25.4-57.3-56.7-57.3z m-104.4 315h-576c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h576c31.3 0 56.7-4.7 56.7-36.4V832c0-31.6-25.4-57.2-56.7-57.2z" p-id="2560" fill="#555555"></path></svg>
            </span>
            <a href="">
                <img v-if="logoVal" :src="logoVal" alt="">
                <h4 v-else>{{nameVal}}</h4>
            </a>
        </div>
    </div>
</template>

<script setup>

    import {toRef,computed} from 'vue'

    const props = defineProps({
        logo: {
            type: String,
        },
        title: {
            type: String,
            required: true
        }
    });
    const { logo, title } = toRef(props);
    const logoVal = computed(()=>{
        return logo || require('@/assets/logo.png')
    })

    const nameVal = computed(()=>{
        return title || 'OpenMore'
    })
    
</script>

<style>
    h4{
        margin-bottom: 0;
    }
    a{
        text-decoration: none;
    }
    .navbar-brand{
       
    }
    .navbar-brand-pc a{
        display: flex;
        align-items: center;

    }
    .navbar-brand-pc a img{
        width: 2rem;
        height: 2rem;
        margin-right: 5px;
    }
    .navbar-brand-pc a h4{
        color: #333;
    }
    .navbar-brand-mobile{
        display: flex;
        align-items: center;
        display: none;
    }
    .navbar-brand-mobile span{
        display: inline-block;
    }
    .navbar-brand-mobile a{
        margin-left: 10px;
    }
    .navbar-brand-mobile a img{
        width: 2rem;
        height: 2rem;
        position: relative;
        top: 3px;
    }
    @media (max-width: 719px){
        .navbar-brand-pc{
            display: none;
        }
        .navbar-brand-mobile{
            display: block;
        }
    }
</style>