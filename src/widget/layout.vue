<template>
    <div class="layout">
        <OpenExample :code="codeOne">
            <template #info>
                <OpenH1>布局</OpenH1>

            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenHeader class="center" style="background: #1890ff;">header</OpenHeader>
                    <OpenMain class="center" style="background: #eee;">main</OpenMain>
                </OpenContainer>
            </template>
        </OpenExample>
        <OpenExample :code="codeTwo">
            <template #info>
                <h1>布局</h1>

            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenHeader class="center" style="background: #1890ff;">header</OpenHeader>
                    <OpenMain class="center" style="background: #eee;">main</OpenMain>
                    <OpenFooter class="center" style="background: #ccc;">footer</OpenFooter>
                </OpenContainer>
            </template>
        </OpenExample>
        <OpenExample :code="codeThree">
            <template #info>
                <h1>布局</h1>

            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenHeader class="center" style="background: #1890ff;">header</OpenHeader>
                    <OpenContainer>
                        <OpenAside class="center" style="background: #f4f4f4;">aside</OpenAside>
                        <OpenMain class="center" style="background: #eee;">main</OpenMain>
                    </OpenContainer>
                </OpenContainer>
            </template>
        </OpenExample>
         <OpenExample :code="codeFour">
            <template #info>
                <h1>布局</h1>
            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenHeader class="center" style="background: #1890ff;">header</OpenHeader>
                    <OpenContainer>
                        <OpenAside class="center" style="background: #f4f4f4;">aside</OpenAside>
                        <OpenContainer>
                            <OpenMain class="center" style="background: #eee;">main</OpenMain>
                            <OpenFooter class="center" style="background: #ccc;">footer</OpenFooter>
                        </OpenContainer>
                    </OpenContainer>
                </OpenContainer>
            </template>
        </OpenExample>
        <OpenExample :code="codeFive">
            <template #info>
                <h1>布局</h1>
            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenAside class="center" style="background: #1890ff;">Aside</OpenAside>
                    <OpenMain class="center" style="background: #eee;">main</OpenMain>
                </OpenContainer>
            </template>
        </OpenExample>
        <OpenExample :code="codeSix">
            <template #info>
                <h1>布局</h1>
            </template>
            <template #demo>
                <OpenContainer style="height: 300px;">
                    <OpenAside class="center" style="background: #1890ff;">Aside</OpenAside>
                    <OpenContainer>
                        <OpenHeader class="center" style="background: #f4f4f4;">header</OpenHeader>
                        <OpenMain class="center" style="background: #eee;">main</OpenMain>
                        <OpenFooter class="center" style="background: #ccc;">footer</OpenFooter>
                    </OpenContainer>
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


const codeOne = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenHeader>header</OpenHeader>
            <OpenMain>main</OpenMain>
        </OpenContainer>
    </div>
</template>`;

const codeTwo = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenHeader>header</OpenHeader>
            <OpenMain>main</OpenMain>
            <OpenFooter>footer</OpenFooter>
        </OpenContainer>
    </div>
</template>`;

const codeThree = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenHeader>header</OpenHeader>
            <OpenContainer>
                <OpenAside>aside</OpenAside>
                <OpenMain>main</OpenMain>
            </OpenContainer>
        </OpenContainer>
    </div>
</template>`

const codeFour = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenHeader >header</OpenHeader>
            <OpenContainer>
                <OpenAside >aside</OpenAside>
                <OpenContainer>
                    <OpenMain >main</OpenMain>
                    <OpenFooter >footer</OpenFooter>
                </OpenContainer>
            </OpenContainer>
        </OpenContainer>
    </div>
</template>`

const codeFive = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenAside>Aside</OpenAside>
            <OpenMain>main</OpenMain>
        </OpenContainer>
    </div>
</template>`

const codeSix = `<template>
    <div class="layout">
        <OpenContainer>
            <OpenAside>Aside</OpenAside>
            <OpenContainer>
                <OpenHeader>header</OpenHeader>
                <OpenMain>main</OpenMain>
                <OpenFooter>footer</OpenFooter>
            </OpenContainer>
        </OpenContainer>
    </div>
</template>`
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