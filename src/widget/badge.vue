<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>徽章</OpenH1>
                <OpenH3>基础用法：</OpenH3>
                <OpenText>通过设置 value 值调整展示的字数</OpenText>
            </template>
            <template #demo>
               <div>
                    <OpenBadge style="margin-right: 20px;" value="55">
                        <OpenButton type="primary">按钮</OpenButton>
                    </OpenBadge>
                    <OpenBadge value="20">
                        <OpenButton type="primary">按钮</OpenButton>
                    </OpenBadge>
               </div>
            </template>
        </OpenExample>

        <OpenExample :code="codeTwo">
            <template #info>
                <OpenH3>最大值</OpenH3>
                <OpenText>通过设置 max 值限制最大显示数字</OpenText>
            </template>
            <template #demo>
               <div>
                    <OpenBadge style="margin-right: 20px;" value="55" max="50" >
                        <OpenButton type="primary">按钮</OpenButton>
                    </OpenBadge>
                    <OpenBadge value="20" max="10">
                        <OpenButton type="primary">按钮</OpenButton>
                    </OpenBadge>
               </div>
            </template>
        </OpenExample>
         <OpenExample :code="codeThree">
            <template #info>
                <OpenH3>小红点</OpenH3>
                <OpenText>通过设置属性 :dot="true" 显示小红点</OpenText>
                <OpenTip>
                    <template #title>提示</template>
                    <template #content>使用小红点时，：vlue值大于0时显示</template>
                </OpenTip>
            </template>
            <template #demo>
               <div>
                    <OpenBadge style="margin-right: 20px;" value="10" :dot="true">
                        <OpenButton type="primary">按钮</OpenButton>
                    </OpenBadge>
               </div>
            </template>
        </OpenExample>
        <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="columns" :data="data"></OpenTable>
        </div>
    </div>
</template>

<script setup>
     import {
    OpenBadge,
    OpenButton,
    OpenExample,
    OpenTip,
    OpenH1,
    OpenH3,
    OpenText,
    OpenTable
    
} from '../open/index.js'

const columns = [
    {
        title: '属性名',
        width: '',
        key: 'name'
    },
     {
        title: '说明',
        width: '',
        key: 'info'
    },
     {
        title: '类型',
        width: '',
        key: 'type'
    },
    {
        title: '默认值',
        width: '',
        key: 'default'
    },
];

const data = [
    {
        name: 'value',
        info: '显示值',
        type: 'number',
        default: 0,
    },
    {
        name: 'max',
        info: '最大值，超过最大值显示{max}+',
        type: 'number',
        default: 99,
    },
    {
        name: 'dot',
        info: '是否显示小红点',
        type: 'boolean',
        default: false,
    }
    
]

const codeOne = `<template>
    <div class="layout">
       <OpenBadge value="55">
            <OpenButton type="primary">按钮</OpenButton>
        </OpenBadge>
        <OpenBadge value="20">
            <OpenButton type="primary">按钮</OpenButton>
        </OpenBadge>
    </div>
</template>
`;

const codeTwo = `<template>
    <div class="layout">
        <OpenBadge max="50" value="55">
            <OpenButton type="primary">按钮</OpenButton>
        </OpenBadge>
        <OpenBadge value="20" max="10">
            <OpenButton type="primary">按钮</OpenButton>
        </OpenBadge>
    </div>
</template>
`;

const codeThree = `<template>
    <div class="layout">
        <OpenBadge :value="10" :dot="true">
            <OpenButton type="primary">按钮</OpenButton>
        </OpenBadge>
    </div>
</template>
`;
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