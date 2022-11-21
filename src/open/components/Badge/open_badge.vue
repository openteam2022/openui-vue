<template>
    <div class="open-badge">
        <span class="open-badge-mark text" ref="openbadgetext" v-if ="!dot" v-show="val">{{val}}</span>
        <span class="open-badge-mark dot" ref="openbadgedot" v-else v-show="val"></span>
        <div class="open-badge-box" >
            <slot>  </slot>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted} from 'vue'

    /**
     * props:
     * @param value:number 显示的数值
     * @param max:number 限制最大的显示的数值
     * @param dot:boolean 是否显示小红点
    */
    const props = defineProps({
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 99
        },
        dot: {
            type: Boolean,
            default: false
        }
    })

    const { value,max,dot } = reactive(props);

    const val = ref('')

    // 初始化值
    const init = ( ) =>{
        if(value > max){
            val.value = max + '+';
        }else{
            if(value < 0){
                val.value = 0;
                return false;
            }
            val.value = value
        }
    }

    onMounted(()=>{
        init();
    })
    
</script>

<style scoped>
    .open-badge{
        display: inline-block;
        position: relative;
    }
    .open-badge-box{
        display: inline-block!important;
        z-index: 99;
    }
    .open-badge-mark{
        display: inline-block;
        position: absolute;
        right: 0;
        top: -9px;
        transform: translateX(50%);
        background: #f56c6c;
        z-index: 99;
    }
    .text{
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        border-radius: 9px;
        color: #ffffff;
        font-size: 10px;
    }
    .dot{
        top: -5px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }
</style>