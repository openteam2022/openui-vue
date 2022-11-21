<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Radio 单选框</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>OpenRadio和OpenRadioGroup嵌套使用</OpenText>
                <OpenText>OpenRadio插槽定义选项名，默认选项名是label值</OpenText>
            </template>
            <template #demo>
                <div >
                    <OpenRadioGroup v-model="radio" @change="change">
                        <OpenRadio label="1">选项一</OpenRadio>
                        <OpenRadio label="2">选项二</OpenRadio>
                        <OpenRadio label="3" >选项三</OpenRadio>
                    </OpenRadioGroup>
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

const radio = ref('')

const change = (checked)=>{
    console.log(checked)
    console.log(radio.value)
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
        info: 'OpenRadioGroup属性：radio选中的值',
        type: 'string',
        default: '—',
    },
    {
        name: 'label',
        info: 'OpenRadio属性，选中需要返回的值',
        type: 'string',
        default: 'radio',
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
        name: 'change',
        info: 'OpenRadioGroup事件：点击选项时触发，返回选中的label值',
        call: '(val:label)',
    },
    
]

const codeOne = `<template>
    <div class="layout">
        <OpenRadioGroup v-model="radio" @change="change">
            <OpenRadio label="1">选项一</OpenRadio>
            <OpenRadio label="2">选项二</OpenRadio>
            <OpenRadio label="3" >选项三</OpenRadio>
        </OpenRadioGroup>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const radio = ref('')

    const change = (checked)=>{
        console.log(checked)
        console.log(radio.value)
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