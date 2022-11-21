<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Tabs 选项卡</OpenH1>
                <OpenH3>基础用法</OpenH3>
                <OpenText>标签插槽内放置一个div元素用来布局内容</OpenText>
                <OpenText>div添加class="open-tabs-item"用来识别为子组件，再添加label="选项一",定义对应的标题名</OpenText>
                 <OpenText>同级可以放置多个同上的div来对应不同的选项</OpenText>
            </template>
            <template #demo>
                <OpenTabs>
                    <div class="open-tabs-item" label="选项一">
                        哈哈
                    </div>
                    <div class="open-tabs-item" label="选项二">
                        呵呵
                    </div>
                    <div class="open-tabs-item" label="选项三">
                        嘿嘿
                    </div>
                </OpenTabs>
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
        <OpenTabs>
            <div class="open-tabs-item" label="选项一">
                哈哈
            </div>
            <div class="open-tabs-item" label="选项二">
                呵呵
            </div>
            <div class="open-tabs-item" label="选项三">
                嘿嘿
            </div>
        </OpenTabs>
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