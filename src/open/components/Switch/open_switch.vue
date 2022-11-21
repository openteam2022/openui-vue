<template>
    <div class="open-switch" ref="openswitch" @click.stop="onSwitch">
        <div :class="['open-switch-top',dot]" ref="openswitchtop"></div>
        <div :class="['open-switch-text',font]" ref="openswitchtext">{{text}}</div>
    </div>
</template>

<script setup>
    import {ref,reactive,onMounted} from 'vue'

    const props = defineProps({
        value: {
            type: Boolean,
            default: false
        }
    })

    const { value } = reactive(props)
    const val = ref(value)
    const text = ref('否')
    const backColor = ref('#ccc')
    const dot = ref('left')
    const font = ref('right')

    const emit = defineEmits(['change'])

    onMounted(()=>{
        if(val.value){
            {
                val.value = true
                dot.value = 'right';
                font.value= 'left'
                backColor.value = '#1890ff';
                text.value= '是';
                emit('change',val.value)
            }
        }
    })

    const onSwitch = ()=>{
        if(val.value){
            val.value = false
            dot.value = 'left';
            font.value = 'right'
            backColor.value = '#cccccc';
            text.value= '否';
            emit('change',val.value)
        }else{
            val.value = true
            dot.value = 'right';
            font.value= 'left'
            backColor.value = '#1890ff';
            text.value= '是';
            emit('change',val.value)
        }
        
       
    }

</script>

<style>
    .open-switch{
        display: inline-block;
        width: 45px;
        height: 20px;
        background: v-bind(backColor);
        border-radius: 15px;
        box-sizing: border-box;
        padding: 5px;
        position: relative;
        cursor: pointer;
    }
    .open-switch-top{
        height: 16px;
        width: 16px;
        border-radius: 8px;
        background: #ffffff;
        position: absolute;
        top: 2px;
        left: 0px;
        z-index: 99;
        transition: all 0.5s;
    }
    .open-switch-text{
        height: 16px;
        border-radius: 8px;
        position: absolute;
        top: 2px;
        left: 0px;
        z-index: 9;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        transition: all 0.5s;
    }
    .right{
        left:  27px;
    }
    .left{
        left: 4px;
    }
</style>