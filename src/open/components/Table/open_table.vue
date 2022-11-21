<template>  
    <div class="open-table">
        <div class="open-table-main">
           <table class="open-table-box" ref="opentablebox">
                <tr>
                    <th v-if="isCheckbox">
                        <div class="open-table-check-all" >
                            <input class="check-box" type="checkbox" :checked="selectAlls" @click="checkAll($event)">
                        </div>
                    </th>
                    <th v-for="item in columns" :class="[item.width>0 ? ' ':'otbi-item-width']">
                        <div class="otbi-item"  :style="{'width':`${item.width}px`}">
                            {{item.title}}
                        </div>
                    </th>
                    <th v-if="isSet">
                        <div class="otbi-tool">操作</div>
                    </th>
                </tr>
                <tr v-for= "(item,index) in data" :class="['open-table-box-item',index % 2 == 0&&isZebra ? 'open-table-item-zebra' : '']" >
                    <!-- 选择框 -->
                    <td v-if="isCheckbox">
                       <div class="open-table-check-item">
                            <input class="check-box" type="checkbox" :checked="selectItems" @click="checkItem(item.id,$event)">
                       </div>
                    </td>
                    <!-- 循环输出表头key值对应的table数据 -->
                    <td v-for="items in columns" :class="[!items.width?'otbi-item-width':'']">
                        <div class="otbi-item"  :style="{'width':`${items.width}px`}">
                            {{item[items.key]}}
                        </div>
                    </td>
                    <td v-if="isSet">
                        <div class="otbi-tool" >
                            <span class="otbi-tool-edit" @click="onEdit(item.id)">编辑</span>
                            <span class="otbi-tool-remove" @click="onRemove(item.id)">删除</span>
                        </div>
                    </td>
                </tr>
           </table>
       </div>
       <!-- 冻结的操作列 -->
       <div class="otbi-tool-frozen" v-if="isRightfrozen">
            <div class="otbi-tool-header">操作</div>
            <div v-for= "(item,index) in data" :class="['open-table-line open-table-box-item',index % 2 == 0&&isZebra ? 'open-table-item-zebra' : '']" >
                <div>
                    <div :class="['otbi-tool',index % 2 == 0&&isZebra ? 'open-table-item-zebra' : '']" >
                        <span class="otbi-tool-edit" @click="onEdit(item.id)">编辑</span>
                        <span class="otbi-tool-remove" @click="onRemove(item.id)">删除</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template> 

<script> 
    export default {
        name: 'OpenTable',
        props: {
            //斑马线，默认true
            isZebra: {
                type: Boolean,
                default: true
            },
            //冻结右侧操作列，默认不冻结
            isRightfrozen: {
                type: Boolean,
                default: false
            },
            isCheckbox: {
                type: Boolean,
                default: true
            },
            isSet: {
                type: Boolean,
                default: true
            },
            columns: {
                type: Array
            },
            data: {
                type: Array,
            },
        },
        data () {
            return {
              selectAlls: false,//全选框绑定的chacked
              selectItems: false,//单选框绑定的chacked
              selectList: [],//选中的id数组
            }
        },
        methods: {
            //点击单选框
            checkItem(id,e){
                if(e.target.checked){
                    this.selectList.push(id);
                    if(this.selectList.length == this.data.length){
                        this.selectAlls = true;
                    }
                }else{
                    this.selectAlls = false;
                    let index = this.selectList.indexOf(id);
                    this.selectList.splice(index,1)
                }
                // 提交选中集合到父组件
                this.onChange();
            },
            //点击全选框
            checkAll(e){
                if(e.target.checked){
                    this.selectAlls = true;
                    this.selectItems = true;
                    this.selectList = [];
                    this.data.forEach((item)=>{
                        this.selectList.push(item.id)
                    })
                    
                }else{
                    this.selectAlls = false;
                    this.selectList = [];
                    this.selectItems = false
                }
                // 提交选中集合到父组件
                this.onChange();
            },
            //编辑按钮事件
            onEdit(id){
                this.$emit('onEdit',id)
            },
            //删除按钮事件
            onRemove(id){
                this.$emit('onRemove',id)
            },
            //点击选框时把选中的id数组提交给父组件
            onChange(){
                this.$emit('onChange',this.selectList)
            }
        }
    }
</script>

<style>
    .open-table{
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        position: relative;
    }
    .open-table-main{
        width: inherit;
        position: relative;
        overflow: auto;
    }
    .open-table-box{
        width: inherit;
    }
    .open-table-check-all{
        padding: 8px 0;
    }
    .open-table-check-all,.open-table-check-item{
        display: flex;
        align-items: center;
        width: 40px;
        text-align: left;
    }
    .check-box[type=checkbox]{
            width: 17px;
            height: 17px;
            border: 1px #dcdfe6 solid!important;
            border-radius: 2px;
        }
    .check-box[type=checkbox]:checked::before {
            content: "✓";
            color: #fff;
            font-size: 8px;
            font-weight: bold;
            padding: 2px 4px;
            border-radius: 3px;
            background: #f56c6c;
        }

    tr{
        width: 100%;
        border-bottom: 1px #ebeef5 solid;
        box-sizing: border-box;
        display: flex;
        padding: 0 10px;
    }
    .open-table-line{
        border-bottom: 1px #ebeef5 solid;
    }
    tr th{
        box-sizing: border-box;
        text-align: left;
        padding: 8px 0;
        font-size: var(--font-size-base);
        color: #999;
    }
    tr td{
        display: flex;
        flex-wrap: nowrap;
        overflow-y: auto;
        align-items: center;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 14px;
        color: #666;
    }
    .otbi-item-width{
        flex: 1;
    }
    .otbi-tool{
        min-width: 110px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
    }
    .otbi-tool span{
        display: inline-block;
        font-size: 14px;
        padding: 5px 11px;
        border-radius: 4px;
        cursor: pointer;
    }
    .otbi-tool-edit{
        color: #666;
        border: 1px #dcdfe6 solid;
    }
    .otbi-tool-edit:hover{
        background: #ecf5ff;
        color: #1890ff;
        border: 1px #1890ff solid;
    }
    .otbi-tool-remove{
        color: #ffffff;
        background: #f56c6c;
        border: 1px #f56c6c solid;
    }
    .otbi-tool-remove:hover{
        background: rgba(245, 108, 108, 0.7);
        border: 1px rgba(245, 108, 108, 0.7) solid;
    }
    .otbi-item{
        min-width: 100px;
        width: 100%;
        padding: 8px;
        display: flex;
        box-sizing: border-box;
    }
    .open-table-box-item:hover{
        background: #f5f7fa;
    }
    .otbi-tool-header{
        box-sizing: border-box;
        text-align: left;
        padding: 16px 8px 19px 8px;
        font-size: var(--font-size-base);
        color: #999;
    }
    .otbi-tool-frozen{
        background: #fff;
        position:absolute;
        top: 16px;
        right: 15px;
        padding-right: 10px;
        z-index: 999;
        box-shadow: -1px 2px 7px 0px #eee;
    }
    .otbi-tool-header-frozen{
        background: #fff;
        position:;
        top: 15px;
        right: 15px;
        padding-right: 10px;
        margin-right: 7px;
        z-index: 999;
        border-left: 1px #eee solid;
        box-shadow: -3px 0px 10px 0px #eee;
    }

     /*斑马线*/
    .open-table-item-zebra{
        background: #fafafa;
    }
</style>