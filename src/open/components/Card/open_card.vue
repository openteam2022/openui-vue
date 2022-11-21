<template>
    <div class="open-card">
        <open-image :width="size" :height="size" :src="src" :load="load" :error="error"></open-image>
        <div class="open-card-title">{{title}}</div>
        <div class="open-card-text">{{text}}</div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import {OpenImage} from '../../index.js'
    const props = defineProps({
        size: {
            type: String,
            default: '200px'
        },
        load: {
            type: String
        },
        src: {
            type: String,
            default: ''
        },
        error: {
            type: String
        },
        title: {
            tyle: String,
            default:'标题'
        },
        text: {
            tyle: String,
            default:'这是文本内容'
        }
    })
    
    const { size,load,src,error,title,text } = reactive(props)
</script>

<style scoped>
    .open-card{
        display: inline-block;
        box-sizing: border-box;
        border-radius: 4px;
        padding-bottom: 20px;
        box-shadow: 1px 1px 7px 0 #eee;
        border: 1px #ededed solid;
    }
     .open-card-title{
        color: #333333;
        font-size: 1rem;
        margin-top: 10px;
        text-align: center;
        padding: 0 15px;
    }
    .open-card-text{
        box-sizing: border-box;
        text-align: left;
        margin-top: 10px;
        color: #999999;
        font-size: 0.8rem;
        padding: 0 15px;
    }
</style>