<template>
    <teleport to="body" :disabled="false">
        <transition name="show-modal-content">
            <div v-if="visible" class="modal-container" @click="closeModal">
                <div key="show-modal" class="modal">
                    <div v-if="isHeader" class="modal-header">
                        <h2 class="modal-title">
                            {{ title }}
                        </h2>
                        <button class="modal-close" @click="closeModalHandler">
                            <svg focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true" viewBox="64 64 896 896">
                                <path
                                    d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div ref="modalContent" class="modal-content">
                        <slot />
                        <canvas ref="videoRef" class="video2" />
                        <template v-if="isFooter">
                            <div class="foot-container">
                                <span class="title">矿山内部A-02设备</span>
                                <div class="time">
                                    <span>{{
                                        `${year}.${month}.${day}`
                                    }}</span>
                                    <span>{{ nowTime.split(" ")[1] }}</span>
                                </div>
                            </div>
                            <div class="circle" @click="handlerClike" @mousedown="handlerDown" @mouseup="mouseUp">
                                <div class="top" />
                                <div class="left" />
                                <div class="bottom" />
                                <div class="right" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>
  
<script setup>
import { initVideo } from "@/utils";
import { ElLoading } from 'element-plus'
import { setPTZControl } from "@/api/videoControl"
import useTime from "@/hooks/useTime"
const props = defineProps({
    title: {
        type: String,
        default: 'Modal Title'
    },
    visible: {
        type: Boolean,
        default: false
    },
    isHeader: {
        type: Boolean,
        default: false
    },
    isFooter: {
        type: Boolean,
        default: true
    },
    option: {
        type: Object,
        default: () => { }
    }
});
const modalContent = ref(null)
const openLoading = () => {
    const loading = ElLoading.service({
        target: modalContent.value,
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return loading
}
watch(() => props.visible, () => {

    if (props.visible) {
        nextTick(async () => {
            const loading = openLoading()
            JSMpegInstance = await initVideo(props.option.rtsp, videoRef.value, 1280);
            loading.close()
        })
    }
})
const { year, month, day, week, hour, minute, second, nowTime } = useTime()
const emit = defineEmits(['close', 'open', 'update:visible', "direction"])

const openModal = () => {

};
const handleChange = () => {

}
const videoRef = ref(null);
var JSMpegInstance = null;
const closeModal = (event) => {
    if (event.target.className == "modal-container") {
        closeModalHandler()
    }
};
const closeModalHandler = () => {
    emit('close');
    JSMpegInstance?.destroy();
    JSMpegInstance = null
}
// const handlerClike = (event) => {
//     setPTZControl(props.option, event.target.className)
//     emit("direction", event.target.className)
// }

const handlerDown = (event) => {
    setPTZControl(props.option, event.target.className)
    emit("direction", event.target.className)
}
const mouseUp = (event) => {
    setPTZControl(props.option, event.target.className, true)
    emit("direction", event.target.className)
}
</script>


<style lang="scss" scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    filter: drop-shadow(0 0 4px #007BFF);
    border: 2px solid #007BFF;
    border-radius: 12px;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 10px;
}

.modal-title {
    margin: 0;
}

.modal-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

.modal-content {
    display: flex;
    // margin-bottom: 10px;
    overflow: hidden;
    border-radius: 12px;
    position: relative;
    width: 1280px;
    height: 720px;
    background-color: #000;

    .video2 {
        width: 1280px;
        height: 720px;
        background-color: #000;
    }

    .foot-container {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 72px;
        background: rgba(21, 21, 21, 0.8);
        backdrop-filter: blur(10px);
        box-shadow: inset 0px 4px 3px 0px rgba(176, 225, 255, 0.2);

        .title {
            position: absolute;
            left: 20px;
            top: 20px;
            font-size: 22px;
            font-weight: bold;
            color: #FFFFFF;
        }

        .time {
            position: absolute;
            right: 20px;
            top: 18px;
            font-weight: bold;
            color: #9E9E9E;
            display: flex;
            flex-direction: column;
            width: 100px;
            height: 40px;
            justify-content: space-between;
            font-family: 思源黑体;
            font-size: 12px;
            text-align: right;
        }
    }

    .circle {
        position: absolute;
        bottom: 0;
        box-shadow: inset 0px 4px 3px 0px rgba(176, 225, 255, 0.2);
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        width: 144px;
        height: 144px;
        border-radius: 50%;

        &::after {
            content: "";
            display: inline-block;
            pointer-events: none;
            width: 124px;
            height: 124px;
            position: absolute;
            background: url("../../../public/img/direction.svg") no-repeat;
            background-size: contain;
            top: 50%;
            left: 50%;
            transform: translate(-49%, -50%);
        }

        .top {
            position: absolute;
            cursor: pointer;
            top: 14px;
            left: 40px;
            width: 63px;
            height: 25px;
        }

        .left {
            position: absolute;
            cursor: pointer;
            top: 43px;
            left: 16px;
            width: 27px;
            height: 58px;
        }

        .right {
            position: absolute;
            cursor: pointer;
            top: 43px;
            right: 16px;
            width: 27px;
            height: 58px;
        }

        .bottom {
            position: absolute;
            cursor: pointer;
            bottom: 14px;
            left: 40px;
            width: 63px;
            height: 25px;
        }
    }
}

.show-modal-content-enter-active {

    animation: none 0.3s;

    .modal {
        animation: show-modal 0.3s;
    }
}

.show-modal-content-leave-active {
    animation: none 0.05s;

    .modal {
        animation: close-modal 0.3s linear;
    }

}

@keyframes close-modal {
    0% {
        transform: scale(1);
    }

    // 25% {
    //     transform: scale(.75);
    // }

    // 50% {
    //     transform: scale(.5);
    // }

    75% {
        transform: scale(0);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes show-modal {
    0% {
        transform: scale(.9);
    }

    45% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.03);
    }

    100% {
        transform: scale(1);
    }
}
</style>
  