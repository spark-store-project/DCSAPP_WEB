<template>
    <!--  单个应用模块  -->
    <div class="item" :key="item.tip" @click="$emit('click')" @mouseenter="cardMouseenter" @mouseleave="cardMouseleave">
        <div :src="imgSrc" class="card-bg" :style="cardBgStyle"/>
        <span class="show">
            <!--  应用icon  -->
            <img :src="imgSrc" alt="icon" class="icon-m"/>
            <span class="app-title">
                <!--  应用名  -->
                <h3 class="app-name" :title="`${item.Name}`">{{ item.Name }}</h3>
                <h4 class="app-more" :title="`${item.More}`">{{ item.More }}</h4>
            </span>
        </span>
    </div>
</template>

<script>
import {directionalAnimator, easeInOutSineStep as easeInOutSine} from "../utils/animate-util.js";

export default {
    name: 'PkgItem',
    props: {
        item: Object,
        imgSrc: String,
    },
    data() {
        return {
            cardBgStep: 0,// 范围： 0 ~ 100
        };
    },
    computed: {
        cardBgStyle() {
            const step = this.cardBgStep;
            return {
                backgroundImage: `url("${this.imgSrc}")`,
                // 透明度从0到0.4
                opacity: easeInOutSine(0, 0.4, step),
                // 背景大小从50到280
                backgroundSize: `${easeInOutSine(0, 280, step)}px ${easeInOutSine(0, 280, step)}px`,
                // 宽度从50到300
                width: `${easeInOutSine(50, 280, step)}px`,
                // 高度从50到100
                height: `${easeInOutSine(50, 100, step)}px`,
                // 顶部从25到0
                top: `${easeInOutSine(25, 0, step)}px`,
                // 左边从125到0
                left: `${easeInOutSine(125, 10, step)}px`,
            };
        },
    },
    created() {
        const animator = directionalAnimator({
            duration: 375,
            onStep: step => this.cardBgStep = step
        })
        this.cardMouseenter = animator.positive
        this.cardMouseleave = animator.negative
    },
    methods: {
        cardMouseenter: () => {},
        cardMouseleave: () => {},
    },
};
</script>

<style scoped>
.item {
    position: relative;
}

.card-bg {
    position: absolute;
    z-index: -1;
    border-radius: 18px;

    background-position: center center;
    background-repeat: no-repeat;

    filter: blur(50px);
    pointer-events: none;
}
</style>
