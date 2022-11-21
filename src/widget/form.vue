<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>表单</OpenH1>
                <OpenH3>基础用法</OpenH3>
            </template>
            <template #demo>
                <div style="height:200px">
                    <OpenForm labelWidth="100">
                        <OpenFormItem label="姓名" error="格式错误">
                            <OpenInput></OpenInput>
                        </OpenFormItem>
                        <OpenFormItem label="生日" error="格式错误">
                            <OpenInput></OpenInput>
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

const show = ref(false)
const onClick = () => {
    show.value = !show.value
}

const columns = [
    {
        title: '属性名',
        width: '',
        key: 'name'
    },
     {
        title: '说明',
        width: '400',
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
        name: 'labelWidth',
        info: 'OpenForm属性：控制label宽度',
        type: 'number',
        default: 200,
    },
    {
        name: 'label',
        info: 'OpenFormItem属性：定义label',
        type: 'string',
        default: '—',
    },
    {
        name: 'error',
        info: 'OpenFormItem属性：表单验证输入错误时，定义提醒文本',
        type: 'string',
        default: '—',
    },
    
]


const codeOne = `<template>
    <div class="layout">
        <OpenForm labelWidth="100">
            <OpenFormItem label="姓名" error="格式错误">
                <OpenInput></OpenInput>
            </OpenFormItem>
            <OpenFormItem label="生日" error="格式错误">
                <OpenInput></OpenInput>
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