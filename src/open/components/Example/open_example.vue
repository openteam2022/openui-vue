<template>
    <div class="open-example" >
        <div class="open-example-info">
            <slot name="info"></slot>
        </div>
        <div class="open-example-source">
            <div class="open-example-demo">
                <slot name="demo"></slot>
            </div>
            <div class="open-example-btn">
                <span @click="copy">复制代码</span><span @click="changeShow">查看源代码</span>
            </div>
            <div class="open-example-code" >
                <pre class="line-numbers language-js" ref="openpre" >
                    <span class="open-example-language">{{type}}</span>
                    <code class="prism-code language-html">{{code}}</code>
                </pre>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,reactive,onMounted } from 'vue'
    import {useRoute} from 'vue-router'
    import { OpenTip } from '../../index.js'
    import Copy from '../../utils/copy.js'
    import message from '../../plugin/js/open_message.js'
    import Prism from "prismjs";
    import 'prismjs/themes/prism-okaidia.min.css'
    
    const router = useRoute()

    const props = defineProps({
        code: {
            type: String,
            default:''
        },
        type: {
            type: String,
            default:'vue'
        }
    })
    const changeCode = ref('hide');
    const hideCode = ref('hideCode');
    const { code,type } = reactive(props)
    const height = ref('0px')
    const changeHeight = ref('0px')
    const show = ref(false)
    const openpre = ref(null)
    onMounted(()=>{
        Prism.highlightAll()
        height.value = openpre.value.offsetHeight + 'px'
    })

    const changeShow = ()=>{
        show.value = !show.value
        if(show.value){
            changeHeight.value = height.value
        }else{
            changeHeight.value = '0px'
        }
    }

    const copy = ()=>{
        let text = `${code}
注意：代码中如果有<script>标签，标签结尾没有加闭合斜杠，需加上
作者：opennote
链接：http://www.opennote.site${router.path}
来源：opennote开发笔记网
著作权归作者左右，商业转载请联系作者获得授权，非商业转载请注明出处。`
        Copy(text);
        message({
            type:'success',
            message: '复制成功'
        })
    }
</script>

<style scoped>
    .open-example{
        width: 790px;
        margin: 0px auto;
        box-sizing: border-box;
        padding: 0 30px;
    }
    .open-example-source{
        width: 100%;
        box-sizing: border-box;
        margin: 16px 0;
        font-size: 15px;
        position: relative;
        border: 1px #ddd solid;
        border-radius: 4px;
    }
    .open-example-demo{
        box-sizing: border-box;
        padding: 20px;
       /* display: flex;
        justify-content: center;
        align-items: center;*/
    }
    .open-example-btn{
        padding: 12px 20px;
        font-size: 13px;
        color: #888;
        text-align: right;
        border-top: 1px #ddd solid;
    }
    .open-example-btn span{
        margin-left: 30px;
        cursor: pointer;
    }
    .open-example-btn span:hover{
        color: #333;
    }
    .open-example-source pre{
        border: none!important;
        margin: 0!important;
        padding: 30px!important;
        box-sizing: border-box;
        display: flex;
        background: #282c34!important;
        padding-left: 55px!important;
        border-radius: 0!important;
        box-shadow: none;
    }
    .open-example-source code{
        display: inline-block;
    }
    .open-example-language{
        position: absolute;
        right: 15px;
        top: 10px;
        color: #888;
        font-size: 14px;
    }
    .open-example-code{
        height: v-bind(changeHeight);
        overflow: hidden!important;
        transition: all 0.1s linear 0s;
    }
    
</style>