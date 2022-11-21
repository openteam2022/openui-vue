<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Message 消息提示</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>message组件是函数式调用，放到事件里调用</OpenText>
            </template>
            <template #demo>
                <OpenButton @click="onMessage" type="primary">message</OpenButton>
            </template>
        </OpenExample>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import message from '../open/plugin/js/open_message.js'
    import { OpenButton,OpenExample,OpenH1,OpenH3,OpenText } from '../open/index.js'

    const onMessage = ()=>{
        // 默认消息
        message({
            message:' 消息提示了',
        })

        // 成功消息
        //  message({
        //     type: 'success',
        //     message:' 消息提示了',
        // })

        // 自定义显示时间
        // message({
        //     message:' 消息提示了',
        //     duration: 5000
        // })


    }
const codeOne = `<template>
    <div class="layout">
          <OpenButton @click="onMessage" type="primary">message</OpenButton>
    </div>
</template>
<script setup>
    import message from '../open/plugin/js/open_message.js'
    const onMessage = ()=>{
        // 默认消息
        message({
            message:' 消息提示了',
        })

        // 成功消息
        //  message({
        //     type: 'success',
        //     message:' 消息提示了',
        // })

        // 自定义显示时间
        // message({
        //     message:' 消息提示了',
        //     duration: 5000
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