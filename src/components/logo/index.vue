<template>
    <div class="logo-container">
        <img :src="logo" alt="兔宝宝" />
        <p class="logo-addr">{{ address }}</p>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        logo: {
            type: String,
            default:
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/logo.png',
        },
        address: {
            type: String,
            default: '贵州贵阳',
        },
    },
}
</script>

<style scoped lang="less">
.logo-container {
    height: 71px;
    display: flex;
    align-items: center;
    > img {
        margin-right: 13px;
    }

    .logo-addr {
        flex-shrink: 0;
        font-size: 18px;
        font-family: SourceHanSansSC-Medium, SourceHanSansSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 27px;
        padding-left: 13px;
        border-left: 1px dashed #ccc;
    }
}
</style>
