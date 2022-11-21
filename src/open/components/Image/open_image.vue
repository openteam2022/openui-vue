<template>
    <div class="open-image" >
        <img class="open-image-img" :src="load"  loading="lazy"  alt="loading..." v-if="!src">
        <img class="open-image-img" :src="src" :alt="alt" v-if="src"  loading="lazy" :onerror="changeImg">
    </div>
</template>

<script>
    export default{
        name: 'OpenImage',
        props: {
            size: {
                type: String,
                default: '100px'
            },
            load: {
                type: String,
                default: require('../../assets/base.png')
            },
            src: {
                type: String,
                default: ''
            },
            error: {
                type: String,
                default: require('../../assets/img_error.png')
            },
            alt: {
                type: String,
                default: '图片'
            }
        },
        methods:{
            changeImg(e){
                let img = e.srcElement;
                img.src = this.error;
                img.alt = "加载失败";
                img.onerror = null;
            }
        }
    }
</script>

<style scoped>
    .open-image{
        display: inline-block;
        width: v-bind(size);
        height: v-bind(size);
    }
    .open-image-img{
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
</style>