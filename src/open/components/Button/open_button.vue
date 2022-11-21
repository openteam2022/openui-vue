<template>
    <div class="open-btn" >
        <button :class="type" v-if="!plain" @click="onClick"><slot>button</slot> </button>
        <button :class="type" v-if="plain" @click="onClick"><slot>button</slot></button> 
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue'

    const props = defineProps({
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        fontSize: {
            type: String,
            default: '14px'
        },
        padd: {
            type: String,
            default: '7px 15px'
        }
    })

    const { type,plain,fontSize,padd} = reactive(props);

    // 默认按钮样式
    const defaultBtn = [
        // 默认按钮颜色
        {
            borderColor: '#dcdfe6',
            btnText: '#333333',
            btnTextHover: '#1890ff',
            backColor: '#ededed',
        },
        // primary按钮颜色
        {
            borderColor: '#1890ff',
            btnText: '#ffffff',
            btnTextHover: '#ffffff',
            backColor: '#79bbff',
        },
        // danger按钮颜色
        {
            borderColor: '#f56c6c',
            btnText: '#ffffff',
            btnTextHover: '#ffffff',
            backColor: '#fab6b6',
        },
    ];
    // plain按钮样式
    const plainBtn = [
         // 默认按钮颜色
        {
            borderColor: '#dcdfe6',
            btnText: '#333333',
            btnTextHover: '#1890ff',
            backColor: '#fff',
        },
        // primary按钮颜色
        {
            borderColor: '#ecf5ff',
            btnText: '#1890ff',
            btnTextHover: '#ffffff',
            backColor: '#1890ff',
        },
        // danger按钮颜色
        {
            borderColor: '#fef0f0',
            btnText: '#f56c6c',
            btnTextHover: '#ffffff',
            backColor: '#f56c6c',
        },
    ];
    const btnText = ref('#333333');
    const btnTextHover = ref('#1890ff');
    const borderColor = ref('#dcdfe6');
    const backColor = ref('#1890ff');

    // 设置样式
    const setBtnCss = (data)=>{
        btnText.value = data.btnText;
        btnTextHover.value = data.btnTextHover;
        borderColor.value = data.borderColor;
        backColor.value = data.backColor;
    };

    const setCss = ()=>{
        if(plain){
            if(type == 'default'){
                setBtnCss(plainBtn[0])
            }else if(type == 'primary'){
                setBtnCss(plainBtn[1])
            }else if(type == 'danger'){
                setBtnCss(plainBtn[2])
            }
        }else{
            if(type == 'default'){
                setBtnCss(defaultBtn[0])
            }else if(type == 'primary'){
                setBtnCss(defaultBtn[1])
            }else if(type == 'danger'){
                setBtnCss(defaultBtn[2])
            }
        }
    };
    const emit = defineEmits(['click'])
    const onClick = ()=>{
        emit('click')
    }
    onMounted(()=>{
        setCss();
    })
</script>

<style scoped>
    .open-btn{
        display: inline-block;
    }
    .open-btn button{
        border-radius: 5px;
        padding: v-bind(padd);
        font-size: v-bind(fontSize);
        cursor: pointer;
    }
    
    .default{
        border: 1px solid v-bind(borderColor);
        color: v-bind(btnText);
    }
    .default:hover{
        color:  v-bind(btnTextHover);
        border: 1px solid v-bind(btnTextHover);
    }
    .default:focus{
        color:  v-bind(btnTextHover);
        border: 1px solid v-bind(btnTextHover);
    }
    .primary{
        border: 1px v-bind(btnText) solid;
        color: v-bind(btnText);
        background: v-bind(borderColor);
    }
    .primary:hover{
        border: 1px v-bind(backColor) solid;
        color:  v-bind(btnTextHover);
        background: v-bind(backColor);
    }
    .primary:focus{
        border: 1px v-bind(backColor) solid;
        color:  v-bind(btnTextHover);
        background: v-bind(backColor);
    }
    .danger{
        border: 1px solid v-bind(btnText); 
        color: v-bind(btnText);
        background: v-bind(borderColor);
    }
    .danger:hover{
        border: 1px v-bind(backColor) solid;
        color:  v-bind(btnTextHover);
        background: v-bind(backColor);
    }
    .danger:focus{
        border: 1px solid v-bind(backColor);
        color:  v-bind(btnTextHover);
        background: v-bind(backColor);
    }
</style>