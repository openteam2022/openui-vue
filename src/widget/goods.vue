<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>商品详情</OpenH1>

            </template>
            <template #demo>
                <div style="height:600px">
                    <OpenGoodsDetails></OpenGoodsDetails>
                </div>
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
    OpenText
    
} from '../open/index.js'

const name = ref('')
const password = ref('')



const codeOne = `<template>
    <div class="layout">
       <OpenGoodsDetails></OpenGoodsDetails>
    </div>
</template>
`
</script>

<style scoped>
    .layout{
        box-sizing: border-box;

    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>