<template>
    <li class="open-sub-menu" ref="opensubmenu">
        <div class="open-sub-menu-title" @click="toggleMenu">
            <div><slot name="title"></slot></div>
            <span class="osmt-icon" ref="openmenuicon">
                <svg t="1667889149849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2694" width="12" height="12"><path d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" p-id="2695"></path></svg>
            </span>
        </div>
        <ul class="open-sub-menu-list" ref="opensubmenulist">
            <slot>
            </slot>
        </ul>
    </li>
</template>

<script>
    import Open from '../../utils/open_comm.js'
    export default {
        name: 'OpenSubMenu',
        props: {
            // title: {
            //     type: String,
            //     default: '菜单'
            // }
        },
        data() {
            return {
                height: 0,
                isShow: false,
                element: '',
                paddingLeft: '20px'
            }
        },
        mounted() {
            this.element = this.$refs.opensubmenulist;
            this.height = this.element.scrollHeight;
            this.element.style.height = '0px';
            let el = this.$refs.opensubmenu;
            let pel = el.parentNode;
            if(pel.getAttribute('class') == 'open-sub-menu-list'){
                this.paddingLeft = '40px'
            }
        },
        methods: {
            toggleMenu(){
                this.isShow ? this.isShow = false : this.isShow = true;
                if(this.isShow){
                    this.iconRotateUp(this)
                    this.heightUp();
                }else{
                    this.iconRotateDown(this);
                    this.heightDown();
                }
            },
            iconRotateUp(self){
                let el = self.$refs.openmenuicon;
                let deg = 0;
                let time;
                time = setInterval(()=>{
                    deg += 5;
                    if(deg >= 90){
                        clearInterval(time)
                    }
                    let d = deg + 'deg';
                    el.style.transform = 'rotate(-'+ d +')';
                },8)
                
            },
            iconRotateDown(self){
                let el = self.$refs.openmenuicon;
                let deg = 90;
                let time;
                time = setInterval(()=>{
                    deg -= 5;
                    if(deg <= 0){
                        clearInterval(time)
                    }
                    let d = deg + 'deg';
                    el.style.transform = 'rotate(-'+ d +')';
                },8)
            },
            // 打开菜单
            heightUp(){
                let height = this.height;
                let h = 0;
                let time;
                time = setInterval(()=>{
                    h += 5;
                    if(h >= height){
                        clearInterval(time);
                        this.element.style.height = '';
                    }else{
                        this.element.style.height = h + 'px';
                    }
                },5)
            },
            // 收起菜单
            heightDown(){
                let height = this.height;
                let time;
                time = setInterval(()=>{
                    height -= 5;
                    if(height <= 0){
                        clearInterval(time);
                    }else{
                        this.element.style.height = height + 'px';
                    }
                },5)
            }
        }
    }
</script>

<style scoped>
    .open-sub-menu{
        width: inherit;
    }
    .open-sub-menu-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        box-sizing: border-box;
        padding: 0 20px 0 v-bind(paddingLeft);
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }
    .open-sub-menu-title:hover{
        background: #dddddd;
        color: #1890ff;
    }
    .open-sub-menu-list{
        max-height: auto;
        overflow: hidden;
    }
    .osmt-icon{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        width: 20px;
        text-align: center;
        font-size: 12px;
    }
</style>