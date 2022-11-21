<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Upload 图片上传</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用size定义上传框的尺寸，默认100</OpenText>
                <OpenText>changeImage方法返回选中的图片</OpenText>
            </template>
            <template #demo>
                <OpenUpload @changeImage="changeImage"></OpenUpload>
            </template>
        </OpenExample>
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH3>多图上传</OpenH3>
                <OpenTip>
                    <template #title>
                        提示
                    </template>
                    <template #content>
                        多图模式下 changeImage 方法返回选中的 图片数组,单图模式下返回的是当前选中的 图片字符串路径
                    </template>
                </OpenTip>  
                <OpenText>使用multiple定义是否开启多图模式，默认false,单图模式</OpenText>
                <OpenText>使用limit定义最多上传多少张图片</OpenText>
                
            </template>
            <template #demo>
                <OpenUpload :multiple="true" @changeImage="changeImage"></OpenUpload>
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
    import {ref} from 'vue'

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
        name: 'multiple',
        info: '是否开启多图模式,默认单图模式',
        type: 'boolean',
        default: 'false',
    },
    {
        name: 'limit',
        info: '多图模式下上传图片的最大值',
        type: 'number',
        default: 6,
    },
    {
        name: 'size',
        info: '修改元素尺寸',
        type: 'string',
        default: '100px',
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
        name: 'changeImage',
        info: '图片上传后触发，返回选中的图片或图片数组',
        call: '(val:[img,...])或(val:img)',
    },
    
]

const changeImage = (imgArr) =>{
    console.log(imgArr)
}

const codeOne = `<template>
    <div class="layout">
         <OpenUpload></OpenUpload>
    </div>
</template>
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