<template>
    <div class="open-empty">
        <div class="open-empty-box">
            <div class="open-empty-img" v-if="show">
                <open-image :width="size" :height="size" :src="src"></open-image>
            </div>
            <p class="open-empty-box-text">{{text}}</p>
        </div>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    import {OpenImage} from '../../index.js'
    const props = defineProps({
        show: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: '100px'
        },
        src: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: '暂无数据'
        }
    })
    const { show,size,src,text } = reactive(props)
</script>

<style scoped>
    .open-empty{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open-empty-img{
        margin-bottom: 10px;
    }
    .open-empty-box{
        margin-top: -50px;
        text-align: center;
    }
    .open-empty-box-text{
        color: #bbbbbb;
        font-size: 13px;
        text-align: center;
    }
</style>