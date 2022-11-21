<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>日期选择</OpenH1>
                <OpenH3>选择某一天</OpenH3>
            </template>
            <template #demo>
               <div>
                   <OpenDatePicker @change="date"></OpenDatePicker>
               </div>
            </template>
        </OpenExample>
         <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenH3 style="padding-left: 15px;">方法</OpenH3>
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

const date = (date) =>{
    console.log(date)
}

const columns = [
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

const data = [
    {
        name: 'change',
        info: '选择日期后触发，返回选中的日期',
        call: '(val:date)',
    },
    
]

const codeOne = `<template>
    <div class="layout">
        <OpenDatePicker @change="date"></OpenDatePicker>
    </div>
</template>

<script>
    const date = (date) =>{
        console.log(date)
    }
<script>
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