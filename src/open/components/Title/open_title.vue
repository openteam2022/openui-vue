<template>
    <div class="open-title">
        <div class="open-title-text">
            <slot name="title"></slot>
        </div>
        <div class="open-title-subtitle">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OpenTitle',
    
       
    }
</script>

<style scoped>
    .open-title{
        width: 100%;
        text-align: center;
        padding: 60px 0;
    }
    .open-title-text{
        font-size: 2rem;
        color: #666666;
        line-height: 40px;
        font-weight: 500;
    }
    .open-title-subtitle{
        font-size: 0.9rem;
        color: #666666;
        line-height: 40px;
    }
    @media (max-width: 780px) { 
        .open-title{
            width: 100%;
            text-align: center;
            padding: 30px 0;
        }
        .open-title-text{
            font-size: 18px;
            color: #666666;
            line-height: 30px;
        }
        .open-title-subtitle{
            font-size: 14px;
            line-height: 30px;
            box-sizing: border-box;
            padding: 0 20px;
        }
    }
</style>