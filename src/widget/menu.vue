<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>Menu菜单</OpenH1>
                <OpenH3>顶栏</OpenH3>
                <OpenText>分为左右两侧，左侧放logo和title，右侧放置菜单</OpenText>
                <OpenText>参数值:data对象格式，具体格式点击下面查看代码</OpenText>
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

        <OpenExample :code="codeTwo">
            <template #info>
                <OpenH3>侧栏</OpenH3>
                <OpenText>采用组件形式，可内嵌子菜单</OpenText>
            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenAside style="background: #eee;">
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
                   </OpenAside>
                </OpenContainer>
            </template>
        </OpenExample>

         <div style="width:790px;box-sizing: border-box;margin: 0 auto;padding: 0 15px;">
            <OpenH1 style="padding-left: 15px;">API</OpenH1>
            <OpenTable :isCheckbox="false" :isZebra="false" :isSet="false" :columns="columns" :data="datas"></OpenTable>
        </div>
    </div>
</template>

<script setup>
    import {
    OpenAside,
    OpenContainer, 
    OpenHeader,
    OpenMenu,
    OpenMenuItem, 
    OpenSubMenu, 
    OpenNavbar,
    OpenNavbarBrand,
    OpenNavbarColor,
    OpenNavbarDropdown,
    OpenNavbarItem,
    OpenNavbarItems,
    OpenExample,
    OpenTip,
    OpenPagination,
    OpenDocMenu,
    OpenH1,
    OpenH3,
    OpenText,
    OpenTable
    
} from '../open/index.js'

const columns = [
    {
        title: '属性名',
        width: '',
        key: 'name'
    },
     {
        title: '说明',
        width: '',
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

const datas = [
    {
        name: 'data',
        info: '顶栏菜单参数值',
        type: 'object',
        default: '{ }',
    }
]
const data = {
    logo: '../assets/logo.png',
    title: 'OpenMore',
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
            <OpenHeader >
               <OpenNavbar :data="data"></OpenNavbar>
           </OpenHeader>
        </OpenContainer>
    </div>
</template>

<script setup>
    const data = {
        logo: '../assets/logo.png',
        title: 'OpenMore',
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
        padding: 80px 0;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>