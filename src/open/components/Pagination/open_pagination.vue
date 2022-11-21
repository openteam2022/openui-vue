<template>
    <div class="open-pagination" v-if="page > 1">
             <button :class="['open-pagination-icon',current == 1 ? 'not-change':'']"  @click="changePrev">
                <svg t="1667827971707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1381" width="10" height="10"><path d="M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z" p-id="1382" fill="#333333"></path></svg>
            </button>
            <button v-if="current > 2" @click="changePage(1)">1</button>  
            <button class="open-pagination-ellipsis" v-if="current > 3">
                <svg t="1667828276921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3097" width="18" height="18"><path d="M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z" p-id="3098" fill="#2c2c2c"></path></svg>
            </button>
        <!-- <button v-for="(item,index) in page" :class="[current == item ? 'current-page':'']" @click="changePage(item)">{{item}}</button> -->
            <button @click="changePage(current - 2)" v-if="current == page">{{current - 2}}</button>
            <button @click="changePage(current - 1)" v-if="current > 1">{{current - 1}}</button> 
            <button class="current-page" >{{current}}</button>
            <button @click="changePage(current + 1)" v-if="current < page - 1">{{current + 1}}</button>
            <button @click="changePage(current + 2)" v-if="current == 1">{{current + 2}}</button>
            <button  class="open-pagination-ellipsis" v-if=" current < page - 2">
                <svg t="1667828276921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3097" width="18" height="18"><path d="M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z" p-id="3098" fill="#2c2c2c"></path></svg>
            </button>
            <button v-if="current < page" @click="changePage(page)">{{page}}</button>
            <button :class="['open-pagination-icon',current == page ? 'not-change':'']"  @click="changeNext">
                <svg t="1667828008698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2493" width="10" height="10"><path d="M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z" p-id="2494" fill="#333333"></path></svg>
            </button>
        <span>{{page}}页 / {{totalData}}条数据</span>
    </div>
</template>

<script setup>
    import {ref,reactive} from 'vue'
    const props = defineProps({
        totalData: {
            type: Number,
            default: 0
        },
        currentPage: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        }
    })

    const { totalData,currentPage,pageSize} = reactive(props)
    const page = Math.ceil(totalData / pageSize);
    const current = ref(currentPage) 
    const currentEnd = ref(current.value + 2)

    const emit = defineEmits(['changePage'])

    const changePage = (item)=>{
        current.value = item;
        emit('changePage',current.value)
    }

    const changePrev = ()=>{
        if(current.value == 1) return false;
        current.value = current.value - 1;
        emit('changePage',current.value)
    }

    const changeNext = ()=>{
        if(current.value == page) return false;
        current.value = current.value + 1;
        emit('changePage',current.value)
    }
</script>

<style scoped>
    .open-pagination{
        width: 100%;
        text-align: center;
        font-size: 13px;
        color: #555;
    }
   button{
        display: inline-block;
        background: #f4f4f4;
        border: none;
        display: inline-block;
        height: 28px;
        width: 30px;
        padding: 7px 0px 5px 0px;
        border-radius: 3px;
        margin: 10px 5px;
        cursor: pointer;
   }
   button:hover{
        color: #1890ff;
   }
   .open-pagination-icon{
        position: relative;
        top: 1px;
        transition: all 0.2s;
   }
   .open-pagination-icon:hover{
        color: #555;
        background: #f4f4f4;
   }
   span{
        margin-left: 5px;
        font-size: 13px;
   }
   .open-pagination-ellipsis{
        border: none;
        margin: 10px 0;
        padding: 7px 3px 5px 3px;
        cursor: default;
        background: #fff;
   }
   .open-pagination-ellipsis:hover{
        background: #fff;
        color: #555;
        border: none;
   }
   .open-pagination-ellipsis .icon{
        position: relative;
        top: 4px;
   }
   .current-page{
        color: #fff!important;
        background: #1890ff;
   }
   .not-change{
        cursor: not-allowed;
   }
</style>
