import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/",
        component: () => import ('../pages/Index.vue')
    },
    {
        path:"/widget",
        component: () => import ('../widget/index.vue'),
        children: [
            {
                path:"/widget/layout",
                component: () => import ('../widget/layout.vue')
            },
            {
                path:"/widget/menu",
                component: () => import ('../widget/menu.vue')
            },
            {
                path:"/widget/badge",
                component: () => import ('../widget/badge.vue')
            },
            {
                path:"/widget/button",
                component: () => import ('../widget/button.vue')
            },
            {
                path:"/widget/calendar",
                component: () => import ('../widget/calendar.vue')
            },
            {
                path:"/widget/card",
                component: () => import ('../widget/card.vue')
            },
            {
                path:"/widget/checkbox",
                component: () => import ('../widget/checkbox.vue')
            },
            {
                path:"/widget/dialog",
                component: () => import ('../widget/dialog.vue')
            },
            {
                path:"/widget/empty",
                component: () => import ('../widget/empty.vue')
            },
            {
                path:"/widget/form",
                component: () => import ('../widget/form.vue')
            },
            {
                path:"/widget/input",
                component: () => import ('../widget/input.vue')
            },
            {
                path:"/widget/goods",
                component: () => import ('../widget/goods.vue')
            },
            {
                path:"/widget/image",
                component: () => import ('../widget/image.vue')
            },
            {
                path:"/widget/pagination",
                component: () => import ('../widget/pagination.vue')
            },
            {
                path:"/widget/radio",
                component: () => import ('../widget/radio.vue')
            },
            {
                path:"/widget/select",
                component: () => import ('../widget/select.vue')
            },
            {
                path:"/widget/switch",
                component: () => import ('../widget/switch.vue')
            },
            {
                path:"/widget/table",
                component: () => import ('../widget/table.vue')
            },
            {
                path:"/widget/tabs",
                component: () => import ('../widget/tabs.vue')
            },
            {
                path:"/widget/tip",
                component: () => import ('../widget/tip.vue')
            },
            {
                path:"/widget/title",
                component: () => import ('../widget/title.vue')
            },
               {
                path:"/widget/upload",
                component: () => import ('../widget/upload.vue')
            },
            {
                path:"/widget/loading",
                component: () => import ('../widget/loading.vue')
            },
            {
                path:"/widget/message",
                component: () => import ('../widget/message.vue')
            },
            {
                path:"/widget/messagebox",
                component: () => import ('../widget/messagebox.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router;