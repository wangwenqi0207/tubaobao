<template>
    <div class="tel-container">
        <img :src="icon" alt="" class="icon" />
        <ul class="tel-list">
            <li v-for="item in telList" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tel',
    props: {
        icon: {
            type: String,
            default:
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/dianhua.png',
        },
        telList: {
            type: Array,
            default: () => ['0851-84414177', '13595175658'],
        },
    },
}
</script>

<style scoped lang="less">
.tel-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: 20px;
    font-family: SourceHanSansSC-Bold, SourceHanSansSC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 29px;
    .icon {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    .tel-list {
        display: flex;
        & > li {
            margin-right: 20px;
        }
        & > li:last-child {
            margin-right: 0;
        }
    }
}
</style>
