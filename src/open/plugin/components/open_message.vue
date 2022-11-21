<template>
    <Transition name="message">
        <div class="open-message" ref="openmessage" v-show="isShow">
            <span v-if="type == 'success'">
                <svg t="1667967082910" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2601" width="20" height="20"><path d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z m204.8 224l51.2 50.304L460.8 704 256 502.848l51.2-50.304L460.8 603.52l256-251.456z" p-id="2602" fill="#67C23A"></path></svg>
            </span>
            <span v-else>
                <svg t="1667967139021" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3672" width="20" height="20"><path d="M512 92.56959999999992c-226.35926383881477 0-410.5535657908148 184.19430316562963-410.5535657908148 410.5535657908148 0 77.6722962962963 22.19208430933333 155.3445925925926 64.35704498251852 221.92084673422224 6.657625050074073 11.096042154666666 19.97287636385185 13.315251313777777 31.06891851851852 6.657625050074073 11.096042154666666-6.657625050074073 13.315251313777777-19.97287636385185 6.657625050074073-31.06891851851852-37.72654356859259-57.69941993244444-57.69941993244444-126.49488201955555-57.69941993244444-197.50955326577775 0-201.94797037037037 164.2214268017778-366.16939717214814 366.16939717214814-366.1693959585185s366.16939717214814 164.2214268017778 366.16939717214814 366.1693959585185S713.9479703703704 869.292562962963 512 869.292562962963c-95.42596350103702 0-184.19430316562963-35.50733562311111-252.9897652527407-102.08358976474075-8.876834209185184-8.876834209185184-22.19208430933333-8.876834209185184-31.06891851851852 0-8.876834209185184 8.876834209185184-8.876834209185184 22.19208430933333 0 31.06891851851852 77.6722962962963 73.2338791917037 177.53667690192594 115.39883986488888 284.0586837712592 115.3988410785185 226.35926383881477 0 410.5535657908148-184.19430316562963 410.5535657908148-410.5535670044444S738.3592638388147 92.56959999999992 512 92.56959999999992z" fill="#8a8a8a" p-id="3673"></path><path d="M489.8079156906667 696.1943031656298c0 13.315251313777777 8.876834209185184 22.19208430933333 22.19208430933333 22.19208430933333s22.19208430933333-8.876834209185184 22.19208430933333-22.19208430933333V401.0395772397037c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208552296296s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208552296296v295.1547259259259zM512 347.77857319822226c13.315251313777777 0 22.19208430933333-8.876834209185184 22.19208430933333-22.19208430933333v-15.53445925925926c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v15.53445925925926c0 13.315251313777777 11.096042154666666 22.19208430933333 22.19208430933333 22.19208430933333z" fill="#8a8a8a" p-id="3674"></path></svg>
            </span>
            <span>{{message}}</span>
        </div>
    </Transition>
</template>

<script>
    export default {
        name: 'OpenMessage',
        props: {
            message: {
                type: String,
                default: '这是一条信息'
            },
            type: {
                type: String,
                default: 'base'
            },
            duration: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
                isShow: true,
                styles: [
                    {
                        color: '#333333',
                        backColor: '#eeeeee',
                        borColor: '#dddddd'
                    },
                    {
                        color: '#67C23A',
                        backColor: '#d1edc4',
                        borColor: '#b3e19d'
                    },
                    {
                        color: '#F56C6C',
                        backColor: '#fef0f0',
                        borColor: '#fde2e2'
                    },
                ],
                currentStyle: {},
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                if(this.type == 'base'){
                    this.currentStyle = this.styles[0];
                }
                if(this.type == 'success'){
                    this.currentStyle = this.styles[1]
                }
                 if(this.type == 'danger'){
                    this.currentStyle = this.styles[2]
                }
                setTimeout(()=>{
                    this.isShow = false;
                },this.duration)
            }
        }

    }
</script>

<style scoped>
    .open-message{
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 20px;
        background: v-bind(currentStyle.backColor);
        color: v-bind(currentStyle.color);
        border: 1px v-bind(currentStyle.borColor) solid;
        border-radius: 5px;
        font-size: 14px;
        z-index: 99999;
        max-width: 200px;
        box-sizing: border-box;
    }
    .open-message .icon{
        position: relative;
        top: 4px;
        left: 0;
        margin-right: 4px;
    }
    .message-enter-active,
    .message-leave-active {
        transition: opacity 0.5s linear;
    }

    .message-enter-from,
    .message-leave-to {
        opacity: 0;
    }
</style>