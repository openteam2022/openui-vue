<template>
    <div class="open-doc-menu">
        <ul class="open-doc-menu-list">
            <li class="odml-item" v-for="item in menu">
                <p class="odml-item-title">{{item.title}}</p>
                <ul class="odml-item-list">
                    <li class="odml-item-list-item" v-for="items in item.child">
                        <router-link :to="{path: items.link}">
                            <p class="oili-link" :style="{color: current == items.id ? '#1890ff':'' }" @click="changeMenu(items.id)">{{items.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref,onMounted } from 'vue'
    import {useRoute} from 'vue-router'

    const current = ref(1);

    const router = useRoute();
    

    const changeMenu = (id) =>{
        current.value = id
    }

    onMounted(()=>{
        // 遍历一下当前路由，放置刷新后，current菜单选中值初始化为1
        menu.forEach(item=>{
            item.child.forEach(items=>{
                if(items.link == router.path){
                    current.value = items.id
                }
            })
        })
    })

    const menu = [
        {
            title: '基础组件',
            child: [
                {
                    id: 1,
                    title: 'container 布局',
                    link: '/widget/layout'
                },
                {
                    id: 2,
                    title: 'menu 菜单',
                    link: '/widget/menu'
                },
                {
                    id: 3,
                    title: 'badge 徽章',
                    link: '/widget/badge'
                },
                {
                    id: 4,
                    title: 'button 按钮',
                    link: '/widget/button'
                },
                {
                    id: 5,
                    title: 'pick-date 日期选择',
                    link: '/widget/calendar'
                },
                {
                    id: 6,
                    title: 'card 卡片',
                    link: '/widget/card'
                },
                {
                    id: 7,
                    title: 'dialog 弹出框容器',
                    link: '/widget/dialog'
                },
                {
                    id: 8,
                    title: 'Empty 空状态',
                    link: '/widget/empty'
                },
                 {
                    id: 9,
                    title: 'goods 商品详情',
                    link: '/widget/goods'
                },
                {
                    id: 10,
                    title: 'image 图片',
                    link: '/widget/image'
                },
                 {
                    id: 11,
                    title: 'pagination 分页器',
                    link: '/widget/pagination'
                },
                 {
                    id: 12,
                    title: 'table 表格',
                    link: '/widget/table'
                },
                  {
                    id: 13,
                    title: 'tabs 选项卡',
                    link: '/widget/tabs'
                },
                  {
                    id: 14,
                    title: 'tip 提示',
                    link: '/widget/tip'
                },
                   {
                    id: 15,
                    title: 'title 标题',
                    link: '/widget/title'
                },
                   {
                    id: 16,
                    title: 'upload 上传',
                    link: '/widget/upload'
                },

            ]
        },
        {
            title: '表单',
            child: [
                {
                    id: 17,
                    title: 'from 表单',
                    link: '/widget/form'
                },
                {
                    id: 18,
                    title: 'input 输入框',
                    link: '/widget/input'
                },
                {
                    id: 19,
                    title: 'radio 单选框',
                    link: '/widget/radio'
                },
                 {
                    id: 20,
                    title: 'checkbox 复选框',
                    link: '/widget/checkbox'
                },
                {
                    id: 21,
                    title: 'select 下拉框',
                    link: '/widget/select'
                },
                {
                    id: 22,
                    title: 'switch 开关',
                    link: '/widget/switch'
                },
            ]
        },
         {
            title: '反馈',
            child: [
                {
                    id: 23,
                    title: 'loading 加载',
                    link: '/widget/loading'
                },
                {
                    id: 24,
                    title: 'message 消息提示',
                    link: '/widget/message'
                },
                {
                    id: 25,
                    title: 'messagebox 消息弹出框',
                    link: '/widget/messagebox'
                },
            ]
        },
      

    ]
</script>

<style scoped>
    .open-doc-menu{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 30px;
    }
    .open-doc-menu-list{
        padding: 10px 0 30px 0;
        margin: 0;
        list-style: none;
    }
    .odml-item{
        padding-top: 20px;
    }
    .odml-item-title{
        font-size: 15px;
        font-weight: bold;
        color: #333;
        margin-bottom: 8px;
    }
    .odml-item-list-item{
        padding: 6px 0px;
    }
    .oili-link{
        font-size: 14px;
        color: #777;
    }
    .oili-link:hover{
        color: #333;
    }
    .oili-link:hover{
        color: #444;
    }
</style>