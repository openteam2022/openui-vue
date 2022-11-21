<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Messagebox 消息提示框</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>messagebox组件是函数式调用，放到事件里调用</OpenText>
            </template>
            <template #demo>
                <OpenButton @click="onMessagebox" type="primary">messagebox</OpenButton>
            </template>
        </OpenExample>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import messagebox from '../open/plugin/js/open_message_box.js'
    import { OpenButton,OpenExample,OpenH1,OpenH3,OpenText } from '../open/index.js'

    const onMessagebox = ()=>{

        // 默认调用
        messagebox({
            message:'是否显示成功？',
            title: '我是标题',
            confirmBtnText:'按钮名字',
        })

        // 回调函数
        // 确认按钮返回confirm
        // 关闭按钮返回close
        // messagebox({},res=>{
        //     console.log(res)
        // })

        // 或使用promise获取点击反馈
        // 确认按钮返回confirm
        // 关闭按钮返回close
        // messagebox().then(res=>{
        //     console.log(res)
        // })
    }
const codeOne = `<template>
    <div class="layout">
         <OpenTitle title="这是一个标题" content="这是主标题的副标题"></OpenTitle>
    </div>
</template>
<script setup>
    import messagebox from '../open/plugin/js/open_message_box.js'
     const onMessagebox = ()=>{

        // 默认调用
        messagebox({
            message:'是否显示成功？',
            title: '我是标题',
            confirmBtnText:'按钮名字',
        })

        // 回调函数
        // 确认按钮返回confirm
        // 关闭按钮返回close
        // messagebox({},res=>{
        //     console.log(res)
        // })

        // 或使用promise获取点击反馈
        // 确认按钮返回confirm
        // 关闭按钮返回close
        // messagebox().then(res=>{
        //     console.log(res)
        // })
    }
<script>
`
</script>

<style scoped>
    .layout{
        box-sizing: border-box;
        padding: 80px 0;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>