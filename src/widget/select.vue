<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>分页</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>OpenSelect和OpenOption嵌套使用</OpenText>
                <OpenText>使用value定义选中值</OpenText>
                <OpenText>使用disabled=true定义禁止选项</OpenText>
            </template>
            <template #demo>
                <div >
                    <OpenSelect v-model="select" @change="change">
                        <OpenOption value="A"></OpenOption>
                        <OpenOption value="B"></OpenOption>
                        <OpenOption value="C" disabled></OpenOption>
                    </OpenSelect>
                </div>
            </template>
        </OpenExample>
         <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenH3 style="padding-left: 15px;">属性</OpenH3>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="columns" :data="data"></OpenTable>
        </div>
        <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH3 style="padding-left: 15px;">方法</OpenH3>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="cs" :data="da"></OpenTable>
        </div>
    </div>
</template>

<script setup>

    import {
    OpenBackTop,
    OpenBadge,
    OpenButton,
    OpenCalendar,
    OpenCard,
    OpenCarousel,
    OpenCarousel_Item,
    OpenCheckbox,
    OpenCheckboxGroup,
    OpenDatePicker,
    OpenDialog,
    OpenEmpty,
    OpenFooterInfo,
    OpenFooterList,
    OpenForm,
    OpenFormItem,
    OpenIcon,
    OpenImage, 
    OpenInput,
    OpenAside,
    OpenCol,
    OpenContainer, 
    OpenFooter,
    OpenHeader,
    OpenMain,
    OpenRow,
    OpenSection, 
    OpenMenu,
    OpenMenuItem, 
    OpenMenuNew, 
    OpenSubMenu, 
    OpenNavbar,
    OpenNavbarBrand,
    OpenNavbarColor,
    OpenNavbarDropdown,
    OpenNavbarItem,
    OpenNavbarItems,
    OpenRadio, 
    OpenRadioGroup,
    OpenScroll,
    OpenSelect, 
    OpenOption, 
    OpenSwitch,
    OpenTable, 
    OpenTabs,
    OpenTitle,
    OpenUpload,
    OpenGoodsDetails,
    OpenExample,
    OpenTip,
    OpenPagination,
    OpenDocMenu,
    OpenH1,
    OpenH3,
    OpenText
    
} from '../open/index.js'

import {ref} from 'vue'
const select = ref('')

const change = (checked)=>{
    console.log(checked)
    console.log(select.value)
}

const columns = [
    {
        title: '属性名',
        width: '',
        key: 'name'
    },
     {
        title: '说明',
        width: '300',
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
        name: 'v-model',
        info: 'OpenSelect属性：select选中的值',
        type: 'array',
        default: '—',
    },
    {
        name: 'value',
        info: 'OpenOption属性，选中返回值以及options名字',
        type: 'string',
        default: 'option',
    },
    {
        name: 'disabled',
        info: 'OpenOption属性，是否禁止选中，默认不禁止',
        type: 'boolean',
        default: 'false',
    },
    
]

const cs = [
    {
        title: '方法名',
        width: '',
        key: 'name'
    },
     {
        title: '说明',
        width: '450',
        key: 'info'
    },
     {
        title: '回调参数',
        width: '',
        key: 'call'
    },
];

const da = [
    {
        name: 'change',
        info: 'OpenSelect事件：点击选项时触发，返回选中的option值',
        call: '(val:value)',
    },
    
]




const codeOne = `<template>
    <div class="layout">
        <OpenSelect v-model="select" @change="change">
            <OpenOption value="A"></OpenOption>
            <OpenOption value="B"></OpenOption>
            <OpenOption value="C" disabled></OpenOption>
        </OpenSelect>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const select = ref('')

    const change = (checked)=>{
        console.log(checked)
        console.log(select.value)
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