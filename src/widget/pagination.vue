<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>分页</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用totalData、currentPage、pageSize定义总数据，当前页码，每页显示的数量</OpenText>
                <OpenText>打开控制台，点击切换页码按钮，可观看事件触发返回页码</OpenText>
            </template>
            <template #demo>
                <div style="height: 200px;">
                    <OpenPagination :totalData="2000" @changePage="changePage"></OpenPagination>
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
        name: 'totalData',
        info: '数据总共数量（多少条）',
        type: 'number',
        default: 0,
    },
    {
        name: 'currentPage',
        info: '当前页码',
        type: 'number',
        default: 1,
    },
    {
        name: 'pageSize',
        info: '每页显示的数量',
        type: 'number',
        default: 10,
    }
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
        name: 'changePage',
        info: '点击切换按钮时触发，返回值是切换的页码',
        call: '(val: currentPage)',
    },
    
]

const changePage = (currentPage) =>{
    console.log(currentPage)
}

const codeOne = `<template>
    <div class="layout">
        // currentPage、pageSize有默认值，这里为重复定义
       <OpenPagination 
       :totalData="2000" 
       @changePage="changePage"
       >
       </OpenPagination>
    </div>
</template>

<script setup>
    // 返回当前选择的页码
    const changePage = (currentPage) =>{
        console.log(currentPage)
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