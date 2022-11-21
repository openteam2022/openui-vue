<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Table 表格</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用columns、data定义头部标题和表格数据</OpenText>
            </template>
            <template #demo>
                <OpenTable :columns="columns" :data="data"></OpenTable>
            </template>
        </OpenExample>
        <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenH3 style="padding-left: 15px;">属性</OpenH3>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="cs1" :data="da1"></OpenTable>
        </div>
        <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH3 style="padding-left: 15px;">方法</OpenH3>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="cs2" :data="da2"></OpenTable>
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
        title: '姓名',
        key: 'name'
    },
     {
        title: '年龄',
        key: 'age'
    },
     {
        title: '性别',
        key: 'sex'
    },
];

const data = [
    {
        name: '小红',
        age: '10',
        sex: '女',
    },
    {
        name: '小红',
        age: '10',
        sex: '女',
    },
    {
        name: '小红',
        age: '10',
        sex: '女',
    }
    
]

const cs1 = [
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

const da1 = [
    {
        name: 'columns',
        info: '头部标题定义',
        type: 'array',
        default: '—',
    },
    {
        name: 'data',
        info: 'data数据',
        type: 'array',
        default: '—',
    },
    {
        name: 'isZebra',
        info: '是否显示斑马线风格',
        type: 'boolean',
        default: 'true',
    },
    {
        name: 'isRightfrozen',
        info: '冻结右侧操作栏，默认不冻结',
        type: 'boolean',
        default: 'false',
    },    
    
]


const cs2 = [
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

const da2 = [
    {
        name: 'onEdit',
        info: '点击编辑按钮时触发，返回id',
        call: '(val:id)',
    },
    {
        name: 'onRemove',
        info: '点击删除按钮时触发，返回id',
        call: '(val:id)',
    },
    {
        name: 'onChange',
        info: '点击列表checkbox多选框触发，返回选中id数组',
        call: '(val:[id,...])',
    },
    
]

const codeOne = `<template>
    <div class="layout">
       <OpenTable :columns="columns" :data="data"></OpenTable>
    </div>
</template>

<script setup>

    // columns.key值定义了data表格数据对应的key属性值
    const columns = [
        {
            title: '姓名',
            key: 'name'
        },
         {
            title: '年龄',
            key: 'age'
        },
         {
            title: '性别',
            key: 'sex'
        },
    ];

    const data = [
        {
            name: '小红',
            age: '10',
            sex: '女',
        },
        {
            name: '小红',
            age: '10',
            sex: '女',
        },
        {
            name: '小红',
            age: '10',
            sex: '女',
        }
        
    ]
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