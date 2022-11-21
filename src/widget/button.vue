<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>按钮</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用type 、 plain 定义按钮样式</OpenText>
            </template>
            <template #demo>
               <div style="margin-bottom: 20px;">
                    <OpenButton style="margin-right: 10px;">default</OpenButton>
                    <OpenButton style="margin-right: 10px;" type="primary" >primary</OpenButton>
                    <OpenButton style="margin-right: 10px;" type="danger">danger</OpenButton>
               </div>
               <div style="margin-right: 30px;">
                    <OpenButton style="margin-right: 10px;" plain>default</OpenButton>
                    <OpenButton style="margin-right: 10px;" type="primary" plain>primary</OpenButton>
                    <OpenButton style="margin-right: 10px;" type="danger" plain>danger</OpenButton>
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
        title: '可选值',
        width: '',
        key: 'change'
    },
    {
        title: '默认值',
        width: '',
        key: 'default'
    },
];

const data = [
    {
        name: 'type',
        info: '类型',
        type: 'string',
        change: 'primary/danger',
        default: 'defualt',
    },
    {
        name: 'plain',
        info: '是否为简约按钮',
        type: 'boolean',
        change: '—',
        default: false,
    },
    {
        name: 'padd',
        info: '修改padding尺寸',
        type: 'string',
        change: '—',
        default: '8px 15px',
    },
    {
        name: 'fontSize',
        info: '修改字体大小',
        type: 'string',
        change: '—',
        default: '14px',
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
        width: '',
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
        name: 'click',
        info: '点击按钮时触发',
        call: '—',
    },
    
]
const codeOne = `<template>
    <div class="layout">
       <div>
            <OpenButton>default</OpenButton>
            <OpenButton type="primary" >primary</OpenButton>
            <OpenButton type="danger">danger</OpenButton>
       </div>
       <div>
            <OpenButton plain>default</OpenButton>
            <OpenButton type="primary" plain>primary</OpenButton>
            <OpenButton type="danger" plain>danger</OpenButton>
       </div>
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