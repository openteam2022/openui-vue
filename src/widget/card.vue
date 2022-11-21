<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Card 卡片</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>
                    使用title 、text定义标题和内容
                </OpenText>
                <OpenText>
                    使用size定义图片的尺寸
                </OpenText>
                 <OpenText>
                    使用src、load、error分别定义图片路径，默认占位图，图片发生错误时占位图
                </OpenText>
            </template>
            <template #demo>
               <div>
                   <OpenCard ></OpenCard>
               </div>
            </template>
        </OpenExample>
        <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenH3 style="padding-left: 15px;">属性</OpenH3>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="columns" :data="data"></OpenTable>
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
        title: '默认值',
        width: '',
        key: 'default'
    },
];

const data = [
    {
        name: 'title',
        info: '内容标题',
        type: 'string',
        default: '标题',
    },
    {
        name: 'text',
        info: '文字内容',
        type: 'string',
        default: '这是文本内容',
    },
    {
        name: 'size',
        info: '图片尺寸',
        type: 'string',
        default: '200px',
    },
    {
        name: 'src',
        info: '图片路径',
        type: 'string',
        default: '—',
    },
    {
        name: 'load',
        info: '图片默认占位图',
        type: 'string',
        default: '—',
    },
    {
        name: 'error',
        info: '图片报错补位图',
        type: 'string',
        default: '—',
    }
    
]


const codeOne = `<template>
    <div class="layout">
        <OpenCard></OpenCard>
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