<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Loading</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>loading组件是函数式调用，放到事件里调用</OpenText>
            </template>
            <template #demo>
                <OpenButton @click="onLoading" type="primary">loading</OpenButton>
            </template>
        </OpenExample>
    </div>
</template>

<script setup>
    import {ref,onMounted} from 'vue'

    import loading from '../open/plugin/js/open_loading.js'

    import { OpenButton,OpenExample,OpenH1,OpenH3,OpenText } from '../open/index.js'

    const onLoading = ()=>{
        // 默认显示3000毫秒
        loading()

        // 自定义显示时间为5000
        // loading({
        //     duration: 5000
        // })

        // 手动停止
        // loading('clear')

    }

    const codeOne = `<template>
    <div class="layout">
          <OpenButton @onbutton="onLoading"type="primary">loading</OpenButton>
    </div>
</template>

<script setup>
    import loading from '../open/plugin/js/open_loading.js'
    const onLoading = ()=>{
         // 默认显示3秒
        loading()

        // 设置显示时间为5000
        // loading({
        //     duration: 5000
        // })

        // 手动停止
        // loading('clear')
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