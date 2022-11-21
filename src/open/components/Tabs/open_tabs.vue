<template>
    <div class="open-tabs">
        <ul class="open-tabs-list open-tabs-default" v-if=" type == 'default'">
            <li v-for="(item,index) in tabs" :class="[options == index ? 'default-active' : ''  ]" @click="onTabs(item,index)">{{item}}</li>
        </ul>
        <ul class="open-tabs-list open-tabs-card" v-if="type == 'card'">
            <li v-for="(item,index) in tabs" 
            :class="[options == index ? 'card-active' : '', 
            index == 0 ? 'first':'',index == tabs.length-1 ? 'last':''  ]" 
            @click="onTabs(item,index)">
                <span>{{item}}</span>
                <i v-if="options == index" class="bi bi-x-lg"></i>
            </li>
        </ul>
        <div class="open-tabs-content" ref="opentabs">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    // 循环节点的函数
    import {eachNodesClass} from '../../utils/node.js'
    export default{
        name: 'OpenTabs',
        props:{
            type: {
                type: String,
                default: 'default'
            }
        },
        data(){
            return{
                tabs: [],//标签名对象
                options: 0,//选中标签
                cel: ''
            }
        },
        mounted () {
            // 获取当前元素对象
            let el = this.$refs.opentabs;
            //获取子节点集合
            this.cel = el.childNodes;
            // tabs标签集合临时数组
            let arr = [];
            //标识
            let mark = false;
            eachNodesClass(this.cel,(className,node)=>{
                //检查子组件calss名是否有约定的class名
                if(className.includes('open-tabs-item')){
                    //获取label值
                    let label = node.getAttribute('label');
                    //设置data-值
                    node.setAttribute('data-tabs-item',label);
                    //添加到标签集合临时数组
                    arr.push(label);
                    //默认显示第一个
                    if(!mark){
                        node.style.display = "block";
                        // 显示完第一个就设置为ture
                        mark = true;
                    }else{
                        //其他子节点就隐藏
                        node.style.display = "none";
                    }
                }else{
                    //如果没有约定的calss，则默认不显示组件内容
                    node.style.display = "none"
                }
            })
            //最后tabs标签临时数组赋值给tabs
            this.tabs = arr;
        },
        methods:{
            onTabs(label,index){
                this.options = index;
                eachNodesClass(this.cel,(className,node)=>{
                    if(className.includes('open-tabs-item')){
                        let dataset = node.dataset.tabsItem;
                        if(label == dataset){
                            node.style.display = "block";
                        }else{
                            node.style.display = "none";
                        }
                    }else{
                         node.style.display = "none"
                    }
                })
            }
        }

    }
</script>

<style scoped>
    .open-tabs{
        width: 100% ;
        color: #333333;
        font-size: 14px;
    }
    .open-tabs-list{
        display: flex;
    }
    .open-tabs-list li{
        padding: 8px 8px;
        margin: 0 10px; 
        cursor: pointer;
    }
    .open-tabs-list li:hover{
        color: #1890ff;
    }
    /*默认风格*/
    .default-active{
        color: #1890ff;
        border-bottom: 2px #1890ff solid;
    }

    /*卡片风格*/
    .open-tabs-card{
        border-bottom: 1px #e4e7ed solid;
    }
    .first{
        border-top-left-radius: 5px;
        border-left: 1px #e4e7ed solid;
    }
    .last{
        border-top-right-radius: 5px;
    }
    .open-tabs-card li{
        border-right: 1px #e4e7ed solid ;
        border-top: 1px #e4e7ed solid ;
    }
    .open-tabs-card li i{
        font-size: 10px;
        margin-left: 6px;
    }
    .open-tabs-card li i:hover{
        color: red;
    }
    .card-active{
        color: #1890ff;
    }
    .open-tabs-content{
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
    }
</style>