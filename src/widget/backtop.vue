<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>BackTop</OpenH1>

            </template>
            <template #demo>
                <OpenContainer style="height: 100px;">
                   <OpenHeader style="background: #f4f4f4;">
                       <OpenNavbar :data="data">
                       </OpenNavbar>
                   </OpenHeader>
                </OpenContainer>
            </template>
        </OpenExample>
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
    OpenText
    
} from '../open/index.js'

const data = {
    logo: '',
    name: 'OpenMore',
    nav: [
        {
            text: '首页',
            link: '/'
        },
        {
            text: '分类',
            children: [
                {
                    text: 'one',
                    link: '/'
                },
                {
                    text: 'two',
                    link: '/'
                }
            ]
        },
        {
            text: '产品',
            children: [
                {
                    text: '数码',
                    link: '/'
                },
                {
                    text: '家具',
                    link: '/'
                },
                {
                    text: '生鲜',
                    link: '/'
                }
            ]
        },
        
    ]
}

const codeOne = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenHeader style="background: #f4f4f4;">
               <OpenNavbar :data="data"></OpenNavbar>
           </OpenHeader>
        </OpenContainer>
    </div>
</template>

<script setup>
    const data = {
        logo: '',
        name: 'OpenMore',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '分类',
                children: [
                    {
                        text: 'one',
                        link: '/'
                    },
                    {
                        text: 'two',
                        link: '/'
                    }
                ]
            },
            {
                text: '产品',
                children: [
                    {
                        text: '数码',
                        link: '/'
                    },
                    {
                        text: '家具',
                        link: '/'
                    },
                    {
                        text: '生鲜',
                        link: '/'
                    }
                ]
            },
            
        ]
    }
<script>`;

const codeTwo = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenMenu>
                <open-menu-item>
                    <span>首页</span>
                </open-menu-item>
                <open-sub-menu>
                    <template #title>
                        <span>分类</span>
                    </template>
                    <open-menu-item>one</open-menu-item>
                    <open-sub-menu >
                        <template #title><span>two</span></template>
                        <open-menu-item>two-one</open-menu-item>
                    </open-sub-menu>
                </open-sub-menu>
                <open-sub-menu>
                    <template #title>
                        <span>产品</span>
                    </template>
                    <open-menu-item>数码</open-menu-item>
                    <open-sub-menu >
                        <template #title>
                            <span>生鲜</span>
                        </template>
                        <open-menu-item>苹果</open-menu-item>
                    </open-sub-menu>
                </open-sub-menu>
           </OpenMenu>
        </OpenContainer>
    </div>
</template>`;
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