<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup>
  import Index from './pages/Index.vue'
  import CreateLink from '@/open/theme/createLink.js'

  CreateLink()
</script>

<style>
    /* ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-track{
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);
        background-color:#f9f9f9;
    }
    ::-webkit-scrollbar-thumb{
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
        background-color: #eee;
    }*/
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
