<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>输入框</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用type定义输入框类型</OpenText>
            </template>
            <template #demo>
                <div style="height:200px">
                    <OpenForm :labelWidth="100">
                        <OpenFormItem label="姓名">
                            <OpenInput v-model="name"></OpenInput>
                        </OpenFormItem>
                        <OpenFormItem label="密码">
                            <OpenInput type="password" v-model="password"></OpenInput>
                        </OpenFormItem>
                        <OpenFormItem label="异常">
                            <OpenInput type="text" v-model="name" :error="true"></OpenInput>
                        </OpenFormItem>
                    </OpenForm>
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
        info: '获取输入框实时输入值',
        type: 'string',
        default: '—',
    },
    {
        name: 'error',
        info: '定义边框颜色：true时为红色',
        type: 'boolean',
        default: false,
    },
    {
        name: 'type',
        info: '定义输入框类型',
        type: 'string',
        default: 'text',
    },
   
]

const codeOne = `<template>
    <div class="layout">
        <OpenForm :labelWidth="100">
            <OpenFormItem label="姓名">
                <OpenInput v-model="name"></OpenInput>
            </OpenFormItem>
            <OpenFormItem label="密码">
                <OpenInput type="password" v-model="password"></OpenInput>
            </OpenFormItem>
            <OpenFormItem label="异常">
                <OpenInput type="text" v-model="name" :error="true"></OpenInput>
            </OpenFormItem>
        </OpenForm>  
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