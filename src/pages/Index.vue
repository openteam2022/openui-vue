<template>
    <div>
        <div class="haha">haha</div>
        <OpenButton @click="change">切换主题</OpenButton>

       
        <video width="500" height="300" controls>
          <source src="../../public/one.mp4" type="video/mp4">
        您的浏览器不支持Video标签。
        </video>
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
    OpenPagination
    
} from '../open/index.js'

import ChangeTheme from '@/open/theme/changeTheme.js'

const change = ()=>{
    ChangeTheme(2);
}

import {ref} from 'vue'
const show = ref(false)
const showCover = ()=>{
    show.value = !show.value
}
const close = (res)=>{
    show.value = res
}

const code = `<OpenButton @click="showCover">显示dialog</OpenButton>
<OpenBadge>
    <OpenButton/>
</OpenBadge>
<div>
    <OpenCheckboxGroup>
         <OpenCheckbox name="选中"/>
    </OpenCheckboxGroup> 
</div>
<OpenDialog :modelValue="show" @close="close" >
    <div>哈哈</div>
</OpenDialog>
<open-example :code="">
    <template #demo>
    </template>
    <template #source>
           <OpenDialog :modelValue="show" @close="close" >
    <div>哈哈</div>
</OpenDialog>
    </template>
</open-example>
`
</script>

<style>
    .item{
        padding: 10px 0;
    }
    .haha{
        color: var(--app-color);
    }
</style>