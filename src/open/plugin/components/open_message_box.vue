<template>
    <Teleport to="body">
        <Transition name="message">
            <div class="open-message-box" ref="openmessage" v-show="isShow">
                <div class="open-message-box-main">
                    <div class="ombm-title">
                        <span>{{title}}</span>
                        <span @click="close">关闭</span>
                    </div>
                    <div class="ombm-message">{{message}}</div>
                    <div class="ombm-btn">
                        <span class="ombm-btn-confirm" @click="confirm">{{confirmBtnText}}</span>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
    export default {
        name: 'OpenMessage',
        props: {
            message: {
                type: String,
                default: '这是一条信息'
            },
            title: {
                type: String,
                default: '标题'
            },
            confirmBtnText: {
                type: String,
                default: '确认'
            },
            onOk: {
                type: Function,
                default: function(value){}
            },
            onClose: {
                type: Function,
                default: function(value){}
            }
        },
        data() {
            return {
                isShow: true,
            }
        },
        methods: {
            close(){
                this.isShow = false;
                this.onClose('close');
            },
            confirm(){
                this.isShow = false;
                this.onOk('confirm');
            }
        }

    }
</script>

<style scoped>
    .open-message-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .5);
        z-index: 99999;
    }
    .open-message-box-main{
        width: 420px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, .1);
        background: #ffffff;
        border-radius: 5px;
        padding-bottom: 10px;
    }
    .ombm-title{
        padding: 15px 15px 10px 15px;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        color: #333333;
    }
    .ombm-title i{
        cursor: pointer;
    }
    .ombm-message{
        padding: 10px 15px;
        font-size: 14px;
        color: #666666;
    }
    .ombm-btn{
        padding: 5px 15px 0px 15px;
        text-align: right;
        cursor: pointer;
    }
    .ombm-btn-confirm{
        display: inline-block;
        padding: 8px 15px;
        font-size: 13px;
        background: #1890ff;
        border-radius: 4px;
        color: #fff;
    }
    .message-enter-active,
    .message-leave-active {
        transition: opacity .4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .message-enter-from,
    .message-leave-to {
        opacity: 0;
    }
</style>