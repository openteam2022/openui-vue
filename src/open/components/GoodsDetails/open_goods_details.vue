<template>
     <div class="open-detail-view">
        <div class="open-box">
            <div class="open-box-header">
                商品详情
            </div>
            <div class="open-box-main" >
                <div :class="['open-box-main-item',options == index+1 ? 'borderColor': '']" v-for="(item,index) in files" @click="selectImg(index)">
                    <open-image :src="item.img"></open-image>
                </div>
            </div>
            <div class="open-box-btn">
                <div></div>
            </div>
            <ul class="open-box-tool" v-if="showTool">
                <li @click="removeImg">
                    <i class="bi bi-trash3"></i>
                    删
                </li>
                <li @click="moveUp">
                    <i class="bi bi-chevron-bar-up"></i>
                    上
                </li>
                <li @click="moveDown">
                    <i class="bi bi-chevron-bar-down"></i>
                    下
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {OpenImage} from '../../index.js'
    export default {
        name: 'OpenGoodsDetail',
        components: {
            OpenImage: OpenImage
        },
        props: {
            // 接收一个图片数组
            files: {
                type: Array,
                default: [
                    {
                        img: require('../../assets/base.png')
                    },
                    {
                        img: require('../../assets/img_error.png')
                     },
                    {
                        img: require('../../assets/load.png')
                    }
                ]
                
            },

        },
        data() {
            return {
                options: 0,
                showTool: false,
            }
        },
        methods: {
               // 点击图片
            selectImg(index){
                this.options = index+1;
                this.showTool = true;
                this.imgIndex = index;
            },
            // 删除图片
            removeImg(){
                this.files.splice(this.imgIndex,1);
                this.options = 0;
                this.showTool = false;
            },
            // 图片上移
            moveUp(){
                if(this.imgIndex == 0){
                    return false;
                }
                let img = this.files[this.imgIndex];
                this.files.splice(this.imgIndex,1);
                this.files.splice(this.imgIndex-1,0,img);
                this.options = this.imgIndex;
                this.imgIndex = this.imgIndex - 1; 
                
            },
             // 图片下移
            moveDown(){
                if(this.imgIndex == this.files.length - 1){
                    return false;
                }
                let img = this.files[this.imgIndex];
                this.files.splice(this.imgIndex,1);
                this.files.splice(this.imgIndex+1,0,img);
                this.options = this.imgIndex + 2;
                this.imgIndex = this.imgIndex + 1; 
                
            }
        }
    }
</script>

<style scoped>
    .open-detail-view{
        padding: 35px 40px;
    }
    .open-box{
        height: 533px;
        width: 300px;
        box-sizing: border-box;
        border-radius: 30px;
        border: 1px #cccccc solid;
        padding: 0 8px;
        box-shadow: 0px 2px 10px #eeeeee;
        position: relative;
    }
    .open-box-header{
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #999999;
    }
    .open-box-main{
        width: 278px;
        height: 431px;
        border: 1px #cccccc solid;
        overflow-y: scroll;
        
    }
    .open-box-main-item{
        width: 274px;
        height: auto;
        border: 2px #ffffff solid;
        cursor: pointer;
    }
    .open-box-main-item:hover{
        border: 2px #1890ff dashed;
    }
    .open-box-main-item:focus{
        border: 2px red solid;
    }
    ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .open-box-main-item img{
        width: inherit;
        height: auto;
       
    }
    .open-box-tool{
        position: absolute;
        top: 50%;
        right: -40px;
        z-index: 99;
        list-style: none;
        margin-top: -45px;
    }
    .open-box-tool li{
        color: #666666;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
    }
     .open-box-tool li:hover{
        color: #1890ff;
    }
    .borderColor{
        border: 2px #1890ff dashed;
    }
    .open-box-btn{
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     .open-box-btn div{
        height: 27px;
        width: 27px;
        border: 1px #ccc solid;
        border-radius: 50%;
    }
</style>