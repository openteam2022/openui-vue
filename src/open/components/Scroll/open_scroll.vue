<template>
    <div class="open-scroll"  @scroll="onScroll">
        <div class="open-scroll-warpper" ref="openscroll" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="open-scroll-header" ref="openscrollheader">
                <open-load-bar :show="show"></open-load-bar>
            </div>
            <!-- 跳转到顶部的锚点元素 -->
            <div id="top"></div>
            <slot>
                
            </slot>
            <!-- 跳转到底部的锚点元素 -->
            <div id="bottom"></div>
        </div>
    </div>
</template>

<script>
    import Message from '../../plugin/js/open_message.js'
    export default {
        name: 'OpenScroll',
        props: {
            //是否开启下拉刷新
            isDownRefresh: {
                type: Boolean,
                default: true
            },
            //是否开启上拉加载
            isUpLoad: {
                type: Boolean,
                default: true
            },
        },
        data () {
            return {
                start: 0,
                end: 0,
                move: 0,
                listEl: '',
                headerEl: '',
                show: false,
            }
        },
        mounted () {
            //获取scroll元素对象
            this.listEl = this.$refs.openscroll;
            //获取scroll元素对象的header子节点对象
            this.headerEl = this.$refs.openscrollheader;
        },
        methods: {
            //滑动监听是否到底部，到底部则触发加载事件
            onScroll(){
                let el = this.listEl.getBoundingClientRect();
                let bottom = el.bottom;
                let top = el.top;
                // 如果距离底部10px以内并开启加载则调用加载事件
                if(bottom < window.innerHeight + 10 && this.isUpLoad){
                    this.onLoad();
                }

            },
            // 滑动开始
            onTouchStart(e){
                if(this.isTouch()){
                    // 获取滑动开始的坐标
                    this.start = e.targetTouches[0].pageY;
                }
            },
            //滑动中，并根据滑动距离动态设置scroll容器子元素header的高度
            onTouchMove(e){
                if(this.isTouch()){
                    // 获取移动的坐标
                    this.end = e.targetTouches[0].pageY;
                    this.move = Math.ceil(this.end - this.start);
                    this.move = this.move > 360 ? 360 / 3 : this.move / 3;
                    this.headerEl.style.height = this.move + 'px';
                }
            },
            //滑动结束
            onTouchEnd(){
                //如果当前滑动位置是在页面顶部
                if(this.isTouch()){
                    //滑动离开后，动态设置恢复scroll容器子元素header的高度
                    this.slideUp();
                    //如果滑动距离大于100px，则触发加载事件，以及显示loading条，3秒后关闭加载条
                    if(this.move > 100){
                        this.onRefresh();
                        this.show = true;
                        setTimeout(()=>{
                            this.show = false;
                        },3000)
                    }
                }
            },
            //判断下拉刷新是否开启，滑动时页面是否在顶部
            isTouch(){
               return this.listEl.getBoundingClientRect().top == 0 && !this.show && this.isDownRefresh;
            },
            // 向上收起
            slideUp () {
                let el = this.headerEl;
                let height = el.offsetHeight;
                if(this.move < 100){
                    this.upElement(el,height)
                }else{
                    this.upElement(el,height,60)
                    setTimeout(()=>{
                        height = 60;
                        this.upElement(el,height)
                    },3000)
                }
            },
            //动态减少元素高度
            upElement(el,height,h = 0){
                let time = setInterval(()=>{
                    height -= 6;
                    if(height < h){
                        el.style.height = h +'px';
                        clearInterval(time);
                        return false;
                    }
                    el.style.height = height + 'px';
                },15)
            },
            // 下拉刷新触发
            onRefresh(){
                this.$emit('onRefresh');
            },
            // 上拉加载触发
            onLoad(){
                this.$emit('onLoad')
            },
            /**
             * 跳转到顶部或者底部
             * @param direction:[top:跳转到顶部,bottom:跳转到底部]
            */
            scrollTo(direction){
                document.querySelector(`#${direction}`).scrollIntoView()
            }
        }
    }
</script>

<style scoped>
    .open-scroll{
        background: #f4f4f4;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        overflow-y: auto;
    }
    .open-scroll-warpper{
        position: relative;
        width: 100%;
    }
    .open-scroll-refresh{
        width: 100%;
        /*background: #eee;*/
    }
</style>