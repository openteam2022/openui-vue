<template>
    <Teleport to="body">
        <Transition name="dialog">
            <div class="open-dialog" ref="opendialog" v-show="value">
                <div class="open-dialog-box">
                    <div class="open-dialog-box-header">
                        <div><slot name="title">标题</slot></div><span class="icon" @click="close()">关闭</span>
                    </div>
                    <div>
                        <slot></slot>
                    </div>
                    <div>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    import Open from '../../utils/open_comm.js'

    import { ref,reactive,toRefs,onMounted,watch } from 'vue'

    const props = defineProps({
        width: {
            type: String,
            default: '200'
        },
        value: {
            type: Boolean,
            default: false
        }
    })

    const {width} = reactive(props)

    const value = ref(false)


    watch(props,(n,o)=>{
        value.value = n.value;
    })

    const emit = defineEmits(['update:value','close']);

    const dialogWidth = ref('0px');


    const close = ()=>{
        emit('close',false)
    }

    onMounted(()=>{
         if(width.match(/%/)){
            dialogWidth.value = width + 'px';
        }else if(width.match(/px/)){
            dialogWidth.value = width + 'px';
        }else{
            dialogWidth.value = width + 'px';
        }
        emit('update:value',value)
    })

</script>

<style scoped>
    .open-dialog{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .3);
        z-index: 99999;
        overflow: auto;
    }
    .open-dialog-box{
        width: v-bind(dialogWidth);
        min-width: 300px;
        max-width: 800px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, .1);
        background: #ffffff;
        border-radius: 3px;
        padding: 30px 20px;
    }
    .open-dialog-box-header{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        color: #333333;
        padding-bottom: 10px;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .icon{
        position: absolute;
        right: 0;
        font-size: 14px;
        color: #888;
        cursor: pointer;
    }
    .icon:hover{
       color: #1890ff;
    }
    .dialog-enter-active,
    .dialog-leave-active {
        transition: opacity .3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .dialog-enter-from,
    .dialog-leave-to {
        opacity: 0;
    }
</style>