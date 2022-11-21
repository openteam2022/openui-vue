<template>
    <div class="open-tip">
        <p class="open-tip-title">
            <slot name="title"></slot>
        </p>
        <p class="open-tip-content">
            <slot name="content"></slot>
        </p>
    </div>
</template>

<script setup>
    import {ref ,reactive, onMounted} from 'vue'

    const props= defineProps({
        type: {
            type: String,
            default: 'base'
        },
    })
</script>

<style scoped>
    .open-tip{
        width: 100%;
        box-sizing: border-box;
        border-left: 5px #42b983 solid;
        margin: 20px 0;
        padding: 5px 24px;
        font-size: 16px;
        background: #f6f6f6;
        color: #555;
    }
    .open-tip-title{
        padding-top: 16px;
        font-weight: 600;
    }
    .open-tip-content{
        padding: 16px 0;
    }
</style>