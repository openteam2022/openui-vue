<template>
    <div class="open-checkbox" ref="opencheckbox">
        <label class="open-checkbox-main">
            <span class="open-checkbox-main-checkbox">
                <input class="ocmc-input"  type="checkbox" :name="name" :value="label" :checked="modelValue"
                @change="change($event)">
                <span class="ocmc-cover" v-if="!modelValue">
                </span>
                <span v-if="modelValue" class="ocmc-checked">
                    <svg t="1667957331750" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2693" width="20" height="20"><path d="M832 96.00086l-640 0c-52.9288 0-96.00086 43.07206-96.00086 96.00086l0 640c0 52.92708 43.07206 95.99914 96.00086 95.99914l640 0c52.92708 0 95.99914-43.07206 95.99914-95.99914l0-640C928.00086 139.0712 884.9288 96.00086 832 96.00086zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.808305c12.416396-12.576374 32.704421-12.672705 45.248112-0.25631C739.520387 405.631501 739.647682 425.888563 727.231286 438.432254z" p-id="2694" fill="#1890ff"></path></svg>
                </span>
            </span>
            <span :class="['open-checkbox-main-label',isCheck]"><slot>{{label}}</slot></span>
        </label>
    </div>
</template>

<script setup>
    import Open from '../../utils/open_comm.js'
    import { reactive,ref,onMounted } from 'vue'

    const props = defineProps({
        name: {
            type: String,
            default: '' 
        },
        label: {
            type: String,
            default: 'checkbox'
        },
        checked: {
            type: Boolean,
            default: false,
        }
    })
    const { name,label,checked } = reactive(props);

    const emit = defineEmits(['update:modelValue']);
    
    const modelValue = ref(checked);
    const isCheck = ref('default');
    const isCheckboxGroup = ref(false);
    const item = ref(0);

    const opencheckbox = ref(null);

    onMounted(()=>{
        let pel = opencheckbox.value.parentNode;
        let className = pel.getAttribute('class');
        if(className == 'open-checkbox-group'){
            isCheckboxGroup.value = true;
        }

        setTimeout(()=>{
            item.value = opencheckbox.value.dataset.item;
        },1000)
    })

    const change = (e)=>{
        modelValue.value = e.target.checked;
        if(modelValue.value){
            emit('update:modelValue', e.target.value);
        }else{
            emit('update:modelValue', '');
        }
        modelValue.value ? isCheck.value = "select" : isCheck.value = 'default';
        if(isCheckboxGroup.value){
             if(modelValue.value){
                Open.emit('checkboxChange',{name: item.value, value: e.target.value});
            }else{
                Open.emit('checkboxChange',{name: item.value, value: ''});
            }
        }
    }
    
</script>

<style scoped>
    .open-checkbox{
        display: inline-block;
        user-select: none;
        margin-right: 20px;
    }
    .open-checkbox-main{
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }
    .open-checkbox-main-checkbox{
        position: relative;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        box-sizing: border-box;
    }
    .ocmc-input{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 15px;
        height: 15px;
        opacity: 0;
        margin: 0!important;
        cursor: pointer;
    }
    .ocmc-cover{
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        border-radius: 2px;
        width: 13px;
        height: 13px;
        border: 1px #999999 solid;
        z-index: 2;
        cursor: pointer;
    }
    .open-checkbox-main-checkbox:hover .ocmc-cover{
        border: 1px #1890ff solid!important;
    }
    .ocmc-checked{
        position: absolute;
        top: -3px;
        left: -2px;
        width: 15px!important;
        height: 15px!important;
        color: #1890ff;
        vertical-align: top;
    }
    .ocmc-cover i{
        display: inline-block;
        width: 12px!important;
        height: 12px!important;
    }
    .open-checkbox-main-label{
        font-size: 14px;
        color: #555555;
    }
    .default{
        color: #333333;
    }
    .select{
        color: #1890ff;
        font-size: 14px;
    }
</style>