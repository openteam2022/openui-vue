<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Chenckbox 复选框</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>OpenCheckbox和OpenCheckboxGroup嵌套使用</OpenText>
                <OpenText>OpenCheckbox插槽定义选项名，默认选项名是label值</OpenText>
                <OpenText>使用checked=true自定义默认选中值</OpenText>
            </template>
            <template #demo>
                <OpenContainer style="height: 100px;">
                   <OpenHeader >
                       <OpenCheckboxGroup v-model="checkbox" @change="change"> 
                            <OpenCheckbox label="1">one</OpenCheckbox>
                            <OpenCheckbox label="2">two</OpenCheckbox>
                            <OpenCheckbox :checked="true" label="3">three</OpenCheckbox>
                       </OpenCheckboxGroup>            
                   </OpenHeader>
                </OpenContainer>
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
const checkbox = ref('')

const change = (checked)=>{
    console.log(checked)
    console.log(checkbox.value)
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
        info: 'OpenCheckboxGroup属性：checkbox选中的值',
        type: 'array',
        default: '—',
    },
    {
        name: 'label',
        info: 'OpenCheckbox属性，选中需要返回的值',
        type: 'string',
        default: 'checkbox',
    },
    {
        name: 'checked',
        info: 'OpenCheckbox属性，默认选中',
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
        info: 'OpenCheckGroup事件：点击选项时触发，返回选中的label数组',
        call: '(val:[ label ])',
    },
    
]


const codeOne = `<template>
    <div class="layout">
            <OpenCheckboxGroup v-model="checkbox" @change="change"> 
                <OpenCheckbox label="1">one</OpenCheckbox>
                <OpenCheckbox label="2">two</OpenCheckbox>
                <OpenCheckbox label="3">three</OpenCheckbox>
            </OpenCheckboxGroup>          
    </div>
</template>
<script setup>
    import {ref} from 'vue'

    const checkbox = ref('')

    const change = (checked)=>{
        console.log(checked)
        console.log(checkbox.value)
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