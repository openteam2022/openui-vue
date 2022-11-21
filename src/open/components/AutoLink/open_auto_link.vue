<template>
    <div class="auto-link">
        <a :href="item.link">{{item.text}}</a>
    </div>
</template>

<script setup>

    import { reactive } from 'vue'

    /**
     * props:
     * @param itme: {
     *           link: 路由路径   
     *           text: 标签文本   
     *        }
    */
    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })

    const { item } = reactive(props)

</script>

<style scoped>
    .auto-link{
        height: 80%;
        display: flex;
        align-items: center;
    }
    .auto-link a{
        font-size: 0.9rem;
        color: var(--app-text);
        font-weight: 500;
    }
    .auto-link a:hover{
        color: var(--app-color);
    }
</style>