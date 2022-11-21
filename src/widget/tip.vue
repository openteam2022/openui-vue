<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Tip 提示</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>使用title、content插槽定义标题和内容</OpenText>         
            </template>
            <template #demo>
                <OpenTip>
                    <template #title>温馨提示</template>
                    <template #content>这是一条提示信息</template>
                </OpenTip>
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
        <OpenTip>
            <template #title>温馨提示</template>
            <template #content>这是一条提示信息</template>
        </OpenTip>
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