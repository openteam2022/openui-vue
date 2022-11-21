<template>
    <div class="open-radio" ref="openradio">
        <label class="open-radio-main">
            <span class="open-radio-main-radio">
                <input class="ocmc-input"  type="radio" :name="name" :value="label" :checked="modelValue"
                @click="change($event)">
                <span class="ocmc-cover" v-if="!modelValue">
                </span>
                <span class="ocmc-checked" v-if="modelValue">
                    <svg t="1667962141719" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2896" width="20" height="20"><path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m230.4 324.266667l-256 256c-12.8 12.8-34.133333 12.8-46.933333 0h4.266666c-4.266667 0-12.8-4.266667-17.066666-8.533333l-140.8-140.8c-12.8-12.8-12.8-34.133333 0-51.2 12.8-12.8 34.133333-12.8 51.2 0l128 128 234.666666-234.666667c12.8-12.8 34.133333-12.8 46.933334 0l4.266666 4.266667c4.266667 12.8 4.266667 34.133333-8.533333 46.933333z" p-id="2897" fill="#1890ff"></path></svg>
                </span>
            </span>
            <span :class="['open-radio-main-label',isCheck]"><slot>{{label}}</slot></span>
        </label>
    </div>
</template>

<script>
    import Open from '../../utils/open_comm.js'
    export default {
        name: 'OpenRadio',
        props: {
            name: {
                type: String,
                default: '' 
            },
            label: {
                type: String,
                default: 'radio'
            },
            checked: {
                type: Boolean,
                default: false,
            }
        },
        emits: ['update:modelValue','change'],
        data() {
            return {
                modelValue: this.checked,
                isCheck: 'default',
                isRadioGroup: false,
                item: 0,
            }
        },
        mounted(){
            const _this = this;
            let el = _this.$refs.openradio;
            let pel = el.parentNode;
            let className = pel.getAttribute('class');
            if(className == 'open-radio-group'){
                _this.isRadioGroup = true;
            }
            setTimeout(()=>{
                _this.item = el.dataset.radioItem;
                if(_this.item == 1){
                    this.modelValue = true;
                    this.isCheck = "select"
                    this.$emit('update:modelValue', this.label);
                    this.$emit('change', this.label);
                    if(this.isRadioGroup){
                        Open.emit('radioChange',{name: this.item,value: this.label});
                    }
                }
            },200)
            Open.on('radioValue',res=>{
                if(this.item != res){
                    this.modelValue = false;
                    this.isCheck = 'default';
                }
            })
        },
        methods: {
            change(e){
                this.modelValue ? this.modelValue = false : this.modelValue = true;
                if(this.modelValue){
                    this.$emit('update:modelValue', e.target.value);
                    this.$emit('change', e.target.value);
                }else{
                    this.$emit('update:modelValue', '');
                    this.$emit('change', '');
                }
                this.modelValue ? this.isCheck = "select" : this.isCheck = 'default';
                if(this.isRadioGroup){
                    if(this.modelValue){
                        Open.emit('radioChange',{name: this.item,value: e.target.value});
                    }else{
                        Open.emit('radioChange',{name: this.item,value: ''});
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .open-radio{
        display: inline-block;
        user-select: none;
        margin-right: 20px;
    }
    .open-radio-main{
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }
    .open-radio-main-radio{
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
        border-radius: 50%;
        width: 13px;
        height: 13px;
        border: 1px #999999 solid;
        z-index: 2;
        cursor: pointer;
    }
    .open-radio-main-radio:hover .ocmc-cover{
        border: 1px #1890ff solid!important;
    }
    .ocmc-checked{
        position: absolute;
        top: -3px;
        left: -2px;
        width: 15px!important;
        height: 15px!important;
        border-radius: 50%;
        color: #1890ff;
        vertical-align: top;
    }
    .ocmc-cover i{
        display: inline-block;
        width: 12px!important;
        height: 12px!important;
    }
    .open-radio-main-label{
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