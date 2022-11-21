<template>
    <div class="open-carousel" ref="opencarousel">
        <ul class="open-carousel-list" ref="opencarousellist">
            <slot>
            </slot>
        </ul>
        <Transition name="left" v-if="showBtn">
            <div class="open-carousel-btn-left" v-show="isShow"><span @click="moveRight">&lsaquo;</span></div>
        </Transition>
        <Transition name="right" v-if="showBtn">
            <div class="open-carousel-btn-right" v-show="isShow"><span @click="moveLeft">&rsaquo;</span></div>
        </Transition>
    </div>
</template>

<script>
    import {eachNodesClass} from '../../utils/node.js'
    export default {
        name: 'OpenCarousel',
        props: {
            width: {
                type: String,
                default: '500px'
            },
            height: {
                type: String,
                default: '200px'
            }
        },
        data() {
            return {
                showBtn: true,
                isShow: false,
                moveDistance: 0,//每次移动的距离
                moveTotalDistance: 0,//移动的总距离
                currentLeft: 0,//当前距离左边距离
                element: '',//dom对象
            }
        },
        mounted(){
            this.init();
            // 自动轮播
            let time;
            let el = this.$refs.opencarousel;
            if(this.showBtn){
                time = this.autoPlay(); 
                el.addEventListener('mouseenter',()=>{
                    this.isShow = true;
                    clearInterval(time)
                })
                el.addEventListener('mouseleave',()=>{
                    this.isShow = false;
                    time = this.autoPlay();
                })
            }
        },
        methods: {
            // 初始化数据
            init(){
                // 获取轮播列表dom对象
                let el = this.$refs.opencarousellist;
                // 赋值给组件值
                this.element = el;
                // 获取子元素
                let cel = el.childNodes;
                // 判断如果轮播图只有1个子页面，就不显示左右按钮
                if(cel.length <= 3){
                    this.showBtn = false
                }
                let celArr = []; 
                eachNodesClass(cel,(className,node)=>{
                    if(className == 'open-carousel-item'){
                        celArr.push(node);
                    }
                })
                // 克隆第一个元素添加到最后
                let endCl = celArr[0].cloneNode(true);
                // 添加到子元素最后
                el.insertBefore(endCl,cel[cel.length]);
                // 克隆最后一个元素添加到最前面
                let startCl = celArr[celArr.length-1].cloneNode(true);
                el.insertBefore(startCl,cel[0]);
                // 获取屏幕宽度
                let clientW = document.body.clientWidth;
                // 获取每个元素的宽度
                if(this.width.indexOf('%') != -1){
                    this.moveDistance = clientW * this.width.substring(0,this.width.indexOf('%')) / 100;
                }else{
                    if(this.width.indexOf('px')){
                        this.moveDistance = this.width.substring(0,this.width.indexOf('px'));
                    }else{
                        this.moveDistance = this.width;
                    }

                }
                // 初始化left距离
                this.currentLeft = this.moveDistance;

                // 获取总移动距离
                this.moveTotalDistance = this.moveDistance * (cel.length - 2);
                // 设置css初始时left值
                el.style.left = '-' + this.currentLeft + 'px';
                console.log(this.currentLeft)
            },
            // 向左移动
            moveLeft(){
                let currentLeft = this.currentLeft;
                let moveDistance = this.moveDistance;
                let time;
                let move = 0;
                time = setInterval(()=>{
                    move += 15;
                    if(move > moveDistance){
                        let diff = move - moveDistance;
                        if(diff < 15){
                            currentLeft += moveDistance - (move - 15);
                            this.currentLeft = currentLeft;
                            this.element.style.left = '-' + this.currentLeft + 'px' 
                        }
                        clearInterval(time);
                    }else{
                        currentLeft = parseInt(currentLeft) + 15;
                        if((this.moveTotalDistance - moveDistance) - this.currentLeft < 5  ){
                            currentLeft = moveDistance;
                        }
                        console.log(currentLeft)
                        this.currentLeft = currentLeft;
                        this.element.style.left = '-' + this.currentLeft + 'px' 
                    }
                },10)
            },
            // 向右移动
            moveRight(){
                console.log("懂了")
                let moveDistance = this.moveDistance;
                let time;
                let move = 0;
                time = setInterval(()=>{
                    move += 15;
                    if(move > moveDistance){
                        let diff = move - moveDistance;
                        if(diff < 15){
                            this.currentLeft -= moveDistance - (move - 15);
                            this.element.style.left = '-' + this.currentLeft + 'px' 
                        }
                        clearInterval(time);
                    }else{
                        this.currentLeft -= 15;
                        if(this.currentLeft < 5){
                            this.currentLeft = this.moveTotalDistance - this.moveDistance * 2;
                        }
                        this.element.style.left = '-' + this.currentLeft + 'px' 
                    }
                },10)
            },
            // 自动轮播
            autoPlay(){
                return setInterval(()=>{
                    this.moveLeft()
                },5000)
            },
        }
    }
</script>

<style scoped>
    .open-carousel{
        width: v-bind(width);
        height: v-bind(height);
        overflow: hidden;
        position: relative;
        user-select: none;
    }
    .open-carousel-list{
        height: v-bind(height);
        width: v-bind(width);
        display: flex;
        justify-content: start;
        flex-wrap: nowrap;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        borer: 1px red solid;
        padding: 0!important;
        margin: 0!important;
    }
    :deep(.open-carousel-item){
        width: v-bind(width);
        height: v-bind(height);
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open-carousel-btn-left{
        position: absolute;
        left: 10px;
        top: 0;
        z-index: 99;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 25px;
    }
    .open-carousel-btn-right{
        position: absolute;
        right: 10px;
        top: 0;
        z-index: 99;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 25px;
    }
    .open-carousel-btn-right span,.open-carousel-btn-left span{
        display: inline-block;
        width: 35px;
        line-height: 35px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.2);
        color: #f4f4f4;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }
    .right-enter-active,
    .right-leave-active,
    .left-enter-active,
    .left-leave-active {
      transition: opacity 0.8s ease;
    }
    .right-enter-from,
    .right-leave-to,
    .left-enter-from,
    .left-leave-to {
      opacity: 0;
    }
</style>