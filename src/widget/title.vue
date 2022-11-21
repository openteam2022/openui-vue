<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Title 标题</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用title、content插槽定义标题和内容</OpenText>         
            </template>
            <template #demo>
                <OpenTitle>
                    <template #title>标题</template>
                    <template #content>这是一副标题</template>
                </OpenTitle>
            </template>
        </OpenExample>
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


const codeOne = `<template>
    <div class="layout">
         <OpenTitle>
            <template #title>标题</template>
            <template #content>这是一副标题</template>
        </OpenTitle>
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