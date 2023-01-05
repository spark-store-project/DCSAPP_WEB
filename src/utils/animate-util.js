/* js控制动画的工具代码 */
import { EasingFunctions } from './easing-functions';

const _requestAnimaFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    (callback => setTimeout(callback, 1000 / 60));

const _slice = Array.prototype.slice;

export function requestAnimaFrame () {
    return _requestAnimaFrame.apply(window, _slice.apply(arguments));
}

export function wrapEasingStep (easingFunction) {
    return function (start, end, step, count = 100) {
        return start + (end - start) * easingFunction(step / count);
    };
}

export const linearStep = wrapEasingStep(EasingFunctions.linear);

export const easeInQuadStep = wrapEasingStep(EasingFunctions.easeInQuad);
export const easeOutQuadStep = wrapEasingStep(EasingFunctions.easeOutQuad);
export const easeInOutQuadStep = wrapEasingStep(EasingFunctions.easeInOutQuad);

export const easeInCubicStep = wrapEasingStep(EasingFunctions.easeInCubic);
export const easeOutCubicStep = wrapEasingStep(EasingFunctions.easeOutCubic);
export const easeInOutCubicStep = wrapEasingStep(EasingFunctions.easeInOutCubic);

export const easeInQuartStep = wrapEasingStep(EasingFunctions.easeInQuart);
export const easeOutQuartStep = wrapEasingStep(EasingFunctions.easeOutQuart);
export const easeInOutQuartStep = wrapEasingStep(EasingFunctions.easeInOutQuart);

export const easeInQuintStep = wrapEasingStep(EasingFunctions.easeInQuint);
export const easeOutQuintStep = wrapEasingStep(EasingFunctions.easeOutQuint);
export const easeInOutQuintStep = wrapEasingStep(EasingFunctions.easeInOutQuint);

export const easeInSineStep = wrapEasingStep(EasingFunctions.easeInSine);
export const easeOutSineStep = wrapEasingStep(EasingFunctions.easeOutSine);
export const easeInOutSineStep = wrapEasingStep(EasingFunctions.easeInOutSine);

export const easeInExpoStep = wrapEasingStep(EasingFunctions.easeInExpo);
export const easeOutExpoStep = wrapEasingStep(EasingFunctions.easeOutExpo);
export const easeInOutExpoStep = wrapEasingStep(EasingFunctions.easeInOutExpo);

export const easeInCircStep = wrapEasingStep(EasingFunctions.easeInCirc);
export const easeOutCircStep = wrapEasingStep(EasingFunctions.easeOutCirc);
export const easeInOutCircStep = wrapEasingStep(EasingFunctions.easeInOutCirc);

export const easeInBackStep = wrapEasingStep(EasingFunctions.easeInBack);
export const easeOutBackStep = wrapEasingStep(EasingFunctions.easeOutBack);
export const easeInOutBackStep = wrapEasingStep(EasingFunctions.easeInOutBack);

export const easeInElasticStep = wrapEasingStep(EasingFunctions.easeInElastic);
export const easeOutElasticStep = wrapEasingStep(EasingFunctions.easeOutElastic);
export const easeInOutElasticStep = wrapEasingStep(EasingFunctions.easeInOutElastic);

export const easeInBounceStep = wrapEasingStep(EasingFunctions.easeInBounce);
export const easeOutBounceStep = wrapEasingStep(EasingFunctions.easeOutBounce);
export const easeInOutBounceStep = wrapEasingStep(EasingFunctions.easeInOutBounce);

// animator
export function directionalAnimator ({ duration = 1000, onStep = step => void 0 } = {}) {
    const holder = {
        running: false,
        positiveTime: 0,
        negativeTime: 0,
        preTime: 0,
        step: 0, // 范围： 0 ~ 100
    };

    function animatorStepCalc () {
        // 取当前时间
        const now = Date.now();
        // 取出上一帧数据
        const { positiveTime, negativeTime, preTime, step } = holder;

        // 前一帧
        const prev = Math.max(positiveTime, negativeTime, preTime);
        // 变化方向（正数前进，负数后退）
        const direction = positiveTime > negativeTime ? 1 : -1;
        // 帧间隔占动画延时的百分比
        const abs = (now - prev) / duration * 100;

        // 计算下一帧进度
        const next = Math.min(100, Math.max(0, step + (direction * abs)));

        // console.log({ step, abs, next });

        holder.step = next;
        holder.preTime = now;

        onStep && onStep(next);

        if ((next >= 100 && direction > 0) || (next <= 0 && direction < 0)) {
            holder.running = false;
            return;
        }

        // 只有step处于0~100之间时，才继续执行动画
        requestAnimaFrame(animatorStepCalc);
    }

    function runAnimate () {
        if (!holder.running) {
            holder.running = true;
            requestAnimaFrame(animatorStepCalc);
        }
    }

    return {
        // 前进
        positive () {
            holder.positiveTime = Date.now();
            runAnimate();
        },
        // 后退
        negative () {
            holder.negativeTime = Date.now();
            runAnimate();
        },
    };
}
