<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Image 图片</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用load、error定义图片默认占位图和图片加载错误时的补位图</OpenText>
            </template>
            <template #demo>
                <div style="height:200px">
                    <OpenImage  ></OpenImage>
                </div>
            </template>
        </OpenExample>
        <OpenExample :code="codeTwo">
            <template #info>
                <OpenH3>图片尺寸</OpenH3>
                <OpenText>使用size定义图片尺寸</OpenText>
                <OpenText>下图设置size = "300px"，图片宽高将会设置成300px</OpenText>
            </template>
            <template #demo>
                <div style="height:300px">
                    <OpenImage size="300px" ></OpenImage>
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

const name = ref('')
const password = ref('')

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
        name: 'src',
        info: '图片路径',
        type: 'string',
        default: '—',
    },
    {
        name: 'load',
        info: '默认图片占位图',
        type: 'string',
        default: '—',
    },
    {
        name: 'error',
        info: '图片加载错误时补位图',
        type: 'string',
        default: '—',
    },
    {
        name: 'alt',
        info: '图片描述',
        type: 'string',
        default: '图片',
    },    
    {
        name: 'size',
        info: '图片尺寸',
        type: 'string',
        default: '100px',
    },    
    
]


const codeOne = `<template>
    <div class="layout">
       <OpenImage 
       src="../assets/default.png" 
       load="../assets/load.png" 
       error="../assets/error.png">
       </OpenImage>
    </div>
</template>
`

const codeTwo = `<template>
    <div class="layout">
       <OpenImage 
       size="300px"
       src="../assets/default.png" 
       load="../assets/load.png" 
       error="../assets/error.png">
       </OpenImage>
    </div>
</template>
`
</script>

<style scoped>
    .layout{
        box-sizing: border-box;

    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>