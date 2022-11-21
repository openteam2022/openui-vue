<template>
    <Transition name="top">
        <div class="top" @click="top" v-if="show">
           <svg t="1667097576829" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5776" width="40" height="40"><path d="M575.8 496.3v216.5c0 12-9.8 21.8-21.8 40.8h-87.2c-12 0-21.8-9.8-21.8-21.8V496.3h-96.2c-12 0-21.8-9.7-21.8-21.8 0-5.8 2.3-11.4 6.4-15.5l163.3-163.2c8.5-8.5 22.3-8.5 30.8 0l163.2 163.3c8.5 8.5 8.5 22.3 0 30.8-4.1 4.1-9.7 6.4-15.5 6.4h-99.4z" fill="#ffffff" p-id="5777"></path></svg>
        </div>
    </Transition>
</template>

<script setup>
    import { ref,onMounted } from 'vue'

    const show = ref(false)

    onMounted(()=>{
        // 监听浏览器滑动距离
        window.addEventListener('scroll',()=>{
            let top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
            if(top > 100){
                show.value = true;
            }
            if(top < 100){
                show.value = false;
            }
        })
    })

    // 返回到顶部事件
    const top = () => {
        window.scrollTo(0,0);
    }
</script>

<style scoped>
    .top{
        position: fixed;
        bottom: 30px;
        right: 20px;
        z-index: 999;
        width: 40px;
        height: 40px;
        background: #f4d03f;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 2px 15px #ccc;
    }
    .top-enter-active,
    .top-leave-active {
      transition: opacity 0.5s ease;
    }

    .top-enter-from,
    .top-leave-to {
      opacity: 0;
    }
</style>