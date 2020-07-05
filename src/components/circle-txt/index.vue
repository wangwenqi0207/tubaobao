<template>
    <div class="circle-txt-container">
        <div class="circle-txt-container">
            <h3
                class="circle-txt-title"
                :class="fill === '1' ? 'circle-txt1' : 'circle-txt2'"
            >
                {{ title }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Circle-txt',
    props: {
        title: {
            type: String,
            default: '产品中心',
        },
        fill: {
            type: String,
            default: '1',
        },
    },
}
</script>

<style scoped lang="less">
.circle-txt-container {
    position: relative;
    border: 1px solid #979797;
    width: 151px;
    height: 38px;
    .circle-txt-title {
        font-size: 24px;
        font-family: 'SourceHanSansSC-Medium,SourceHanSansSC';
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 36px;
        position: absolute;
        top: 13px;
        left: 25px;
    }
    .circle-txt1 {
        background: #fff;
    }
    .circle-txt2 {
        background: #f2f2f2;
    }
}
</style>
