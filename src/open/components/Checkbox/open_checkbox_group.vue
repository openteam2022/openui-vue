<template>
    <div class="open-checkbox-group" ref="opencheckboxgroup" >
        <slot>
            <!-- <open-checkbox label="白色"></open-checkbox>
            <open-checkbox label="黑色"></open-checkbox>
            <open-checkbox label="红色"></open-checkbox> -->
        </slot>
    </div>
</template>

<script setup>
    import { eachNodesClass } from '../../utils/node.js'
    import Open from '../../utils/open_comm.js'
    import { ref,reactive,onMounted } from 'vue'

    const checkbox = reactive([]);
    const modelValue = reactive([]);

    const opencheckboxgroup = ref(null);

    onMounted(()=>{
        
        let cel = opencheckboxgroup.value.childNodes;
        eachNodesClass(cel,(className,node,index) => {
            if(className != 'open-checkbox'){
                throw 'Error: childNodes is not checkbox;报错：子组件不是checkbox;';
                return false;
            }else{
                node.setAttribute('data-item',index)
            }
        })

        // 监听子组件change事件触发
        onHandle();
    })

    const emit = defineEmits(['update:modelValue','change']);

    const handleChange = () => {
        emit('update:modelValue',modelValue);
        emit('change',modelValue);
    }

    const onHandle = ()=>{
        Open.on('checkboxChange', res =>{
            let name = res.name;
            let value = res.value;
            checkbox[name] = value;
            let arr = [];
            for(let i = 0;i < checkbox.length;i ++){
                if(checkbox[i]){
                    arr.push(checkbox[i])
                }
            }
            modelValue.value = arr;
            handleChange();
        })
    }
</script>

<style scoped>
    
</style>