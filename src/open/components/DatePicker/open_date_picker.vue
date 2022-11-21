<template>
    <div class="open-date-picker">
         <div :class="['open-date-picker-main',isClick]" @click.stop="onClick">
            <span class="open-date-picker-main-icon">
                <svg t="1667894838206" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3665" width="20" height="20"><path d="M844.8 409.6h-665.6v100.7616a25.6 25.6 0 0 1-51.2 0V256A76.8 76.8 0 0 1 204.8 179.2h51.2v51.2H204.8a25.6 25.6 0 0 0-25.6 25.6v102.4h665.6V256a25.6 25.6 0 0 0-25.6-25.6h-51.2v-51.2h51.2A76.8 76.8 0 0 1 896 256v563.2a76.8 76.8 0 0 1-76.8 76.8H204.8A76.8 76.8 0 0 1 128 819.2v-181.6576a25.6 25.6 0 0 1 51.2 0V819.2a25.6 25.6 0 0 0 25.6 25.6h614.4a25.6 25.6 0 0 0 25.6-25.6V409.6zM614.4 179.2v51.2H409.6v-51.2h204.8zM332.8 512h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m307.2 0h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m-153.6 0h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m-153.6 153.6h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m307.2 0h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m-153.6 0h51.2a25.6 25.6 0 0 1 0 51.2h-51.2a25.6 25.6 0 0 1 0-51.2z m-153.6-563.2a25.6 25.6 0 0 1 25.6 25.6v153.6a25.6 25.6 0 0 1-51.2 0v-153.6a25.6 25.6 0 0 1 25.6-25.6z m358.4 0a25.6 25.6 0 0 1 25.6 25.6v153.6a25.6 25.6 0 0 1-51.2 0v-153.6a25.6 25.6 0 0 1 25.6-25.6z" fill="#666" p-id="3666"></path></svg>
            </span>
            <input type="text" :value="modelValue" placeholder="Picker a day" class="open-date-picker-main-input">
         </div>
         <div class="open-date-picker-list" ref="openselectlist">
             <open-calendar @change="selectDate"></open-calendar>
         </div>
    </div>
</template>

<script>
    import Open from '../../utils/open_comm.js'
    import {OpenCalendar} from '../../index.js'
    export default {
        name: 'OpenDatePicker',
        components: {
            OpenCalendar,
        },
        data() {
            return {
                modelValue: 'Pick a day',
                isClick: '',
                listHeight: 0
            }
        },
        emits:['update:modelValue','change'],
        mounted(){
            const _this = this;
            // 获取select列表dom对象
            let el = _this.$refs.openselectlist;
            _this.initSelect(_this,el);
            // 监听页面点击事件，如果select列表展开则关闭
            window.addEventListener('click',function(){
                _this.hideSelect();
            });
        },
        methods:{
            selectDate(day){
                this.modelValue = day;
                this.$emit('update:modelValue',this.modelValue);
                this.$emit('change',this.modelValue)

            },
            onClick(){
                if(this.isClick == ''){
                    this.isClick = 'isClickStyle';
                    this.heightDown(this);
                }
            },
             // 初始化select列表
            initSelect(_this,el){
                _this.listHeight = el.offsetHeight;
                el.style.height = '0px';
                el.style.display = 'none';
            },
            // 隐藏下拉列表
            hideList(_this){
                _this.isClick = '';
                _this.heightUp(_this);
            },
            heightUp(_this){
                let el = _this.$refs.openselectlist;
                let height = _this.listHeight;
                let time;
                time = setInterval(()=>{
                    height -= 10;
                    if(height <= 10){
                        el.style.display = 'none';
                        clearInterval(time);
                        return false;
                    }
                    el.style.height = height + 'px';
                },10)
            },
            heightDown(_this){
                let el = _this.$refs.openselectlist;
                let height = _this.listHeight;
                let h = 0;
                let time;
                el.style.display = 'block';
                time = setInterval(()=>{
                    h += 10;
                    if(h >= height){
                        clearInterval(time);
                        return false;
                    }
                    el.style.height = h + 'px';
                },10)
            },
            // 全局点击事件隐藏选择列表
            hideSelect(){
                if(this.isClick == 'isClickStyle'){
                    this.hideList(this);
                }
            }
        }

    }
</script>

<style scoped>
    .open-date-picker{
        width: 220px;
        user-select: none;
        position: relative;
        cursor: pointer;
    }
    .open-date-picker-main{
        display: flex;
        align-items: center;
        padding: 0 15px;
        border: 1px #dcdfe6 solid;
        border-radius: 4px;
        font-size: 14px;
        color: #999999;
        background: #ffffff;
    }
    .open-date-picker-main:hover{
        border: 1px #cccccc solid;
    }
    .open-date-picker-main-input{
        outline: none;
        border: none;
        background: none;
        display: inline-block;
        height: 35px;
        line-height: 35px;
        width: 100%;
        color: #333333;
    }
    .open-date-picker-main-input::placeholder{
        color: #dcdcdc;
    }
    .open-date-picker-main-icon{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        width: 25px;
        text-align: left;
        font-size: 12px;
        margin-right: 5px;
    }
    .isClickStyle{
        border: 1px #1890ff solid!important;
        box-shadow: 0px 1px 10px #dcdfe6;
    }
    .open-date-picker-list{
        position: absolute;
        top: 45px;
        left: 0;
        padding: 5px 0;
        width: 270px;
        height: 279px;
        box-sizing: border-box;
        z-index: 99;
        box-shadow: 0px 1px 7px #cdcdcd;
        border-radius: 4px;
        background: #ffffff;
    }
</style>