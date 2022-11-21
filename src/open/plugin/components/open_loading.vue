<template>
    <Transition name="fade">
        <div v-if="isShow">
            <div class="loading" v-if="isDot">
                <ul class="loading-list">
                    <li >
                        <p class="loading-list-one"></p>
                    </li>
                    <li >
                        <p class="loading-list-two"></p>
                    </li>
                    <li>
                        <p class="loading-list-three"></p>
                    </li>
                </ul>
            </div>
            <div class="open-loading" v-else>
                <div >
                    <div class="open-loading-style">
                        <div class="olms-items">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    import { ref,reactive,onMounted,onUnmounted } from 'vue'

    const props = defineProps({
        isDot: {
            type: Boolean,
            default: false
        }
    })
    const { isDot } = reactive(props)

    const isShow = ref(false)

    onMounted(()=>{
        isShow.value = true
    })
    onUnmounted(()=>{
        isShow.value = false
    })
</script>
<style>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .1);
    }
    .loading-list{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
    }
    .loading-list li{
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        margin: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loading-list li p{
        width: 15px;
        height: 15px;
        background: #1890ff;
        border-radius: 50%;
    }
    .loading-list-one{
        animation: one 1s linear 0s infinite;
    }
    .loading-list-two{
        animation: two 1s linear 0s infinite;
    }
    .loading-list-three{
        animation: three 1s linear 0s infinite;
    }
    @keyframes one{
        0%{
            width: 15px;
            height: 15px; 
        }
        20%{
            width: 20px;
            height: 20px;
        }
        35%,100%{
            width: 15px;
            height: 15px;
        }
    }
    @keyframes two{
        0%,35%{
            width: 15px;
            height: 15px;
        }
        50%{
            width: 20px;
            height: 20px;
        }
        70%,100%{
            width: 15px;
            height: 15px;
        }
    }
    @keyframes three{
        0%,65%{
            width: 15px;
            height: 15px;
        }
        85%{
            width: 20px;
            height: 20px;
        }
        100%{
            width: 15px;
            height: 15px;
        }
    }

    .open-loading{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(200,200,200,0.3);
        color: #333333;
    }
    .open-loading-style{
        text-align: center;
    }
    .open-loading-text{
        color: #999999;
    }
    .olms-items{
        margin: 0 auto;
        height: 40px;
        width: 40px;
        border: 5px #dddddd solid;
        border-bottom: 5px #ccc solid;
        border-radius: 50%;
        animation: load 1s linear infinite;
        margin-bottom: 10px;
    }
    @keyframes load {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }


     .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s inline;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
