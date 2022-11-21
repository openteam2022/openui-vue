<template>
    <div class="open-upload">
        <div class="open-upload-list" v-for="(item,index) in fileList">
            <img class="open-upload-btn-img" :src="item" alt="">
            <!-- <div class="open-upload-list-cover">  
                <span>  
                    <svg t="1667965804412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4835" width="20" height="20"><path d="M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z" fill="#fff" p-id="4836"></path></svg>
                    <svg t="1667966117806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7815" width="20" height="20"><path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z" p-id="7816" fill="#ffffff"></path><path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z" p-id="7817" fill="#ffffff"></path><path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z" p-id="7818" fill="#ffffff"></path><path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z" p-id="7819" fill="#ffffff"></path></svg>
                </span> 
            </div>  -->
        </div>
        <div class="open-upload-btn" v-if="showUpload" :style="{'width':width+'px','height':height+'px'}">
            <input type="file" class="open-upload-btn-input" :multiple="multiple" @change="changeImg">
            <span class="open-upload-btn-add" v-if="!file">
                <svg t="1667965900943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5748" width="30" height="30"><path d="M533.333333 490.666667V128h-42.666666v362.666667H128v42.666666h362.666667v362.666667h42.666666V533.333333h362.666667v-42.666666z" fill="#9097a0" p-id="5749"></path></svg>
            </span>
            <img class="open-upload-btn-img" :src="file" alt="" v-if="file" v-show="!multiple">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OpenUpload',
        props: {
            multiple: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
                default: 6
            },
            size: {
                type: String,
                default: '100px'
            }
        },
        emits: ['changeImage'],
        data() {
            return {
                file:'',
                fileList:[],
                showUpload: true
            }
        },
        methods: {
            changeImg(e){
                const _this = this;
                let data = new FormData();
                let reader = new FileReader();
                let files = e.target.files[0];
                if(!files.type.includes('image')){
                    alert("图片格式不正确")
                    return false;
                }
                // 图片上传后检测事件
                if(_this.beforeFileUpload(files) === false)return false;
                // 读取图片本地预览
                reader.readAsDataURL(files);
                reader.onload = function(e){
                    if(!_this.multiple){
                        _this.file = this.result;
                        _this.$emit('changeImage',_this.file)

                    }else{
                        _this.fileList.push(this.result);
                        // 多图片上传时判断是否超过限制图片
                        if(_this.fileList.length >= _this.limit){
                            _this.showUpload = false;
                        }
                        _this.$emit('changeImage',_this.fileList)

                    }

                }

            },
            // 上传之前检测
            beforeFileUpload(files){
                this.$emit('beforeFileUpload',files)   
            }
        }
    }
</script>

<style scoped>
    .open-upload{
        display: flex;
        flex-wrap: wrap;
    }
    .open-upload-btn,.open-upload-list{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px #cecece dashed;
        border-radius: 5px;
        position: relative;
        margin-right: 10px;
        position: relative;
         width: v-bind(size);
        height: v-bind(size);
    }
    .open-upload-list{
        border-radius: 5px;
        border: 1px #cecece solid;
    }
    .open-upload-list:hover .open-upload-list-cover{
        display: block;
    }
    .open-upload-list-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        border-radius: inherit;
        display: none;
        text-align: center;
    }
    .open-upload-list-cover span{
        display: inline-block;
        margin-top: 50%;
        position: relative;
        top: -10px;
        font-size: 16px;
    }
    .open-upload-list-cover .icon{
        padding: 0 5px;
        color: #ffffff;
        cursor: pointer;
    }
    .open-upload-btn-input{
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        opacity: 0;
        cursor: pointer;
    }
    .open-upload-btn-add i{
        color: #9097a0;
        font-size: 30px;
    }
    .open-upload-btn-img{
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
</style>