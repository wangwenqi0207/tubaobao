<template>
    <div class="recruitment-container">
        <div class="recruitment-img">
            <img
                src="https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/recruitment/pin.png"
                alt=""
            />
        </div>
        <div class="recruitment-jobitem">
            <JobItem />
            <p class="recruitment-phone">详情电联：0851-84414177</p>
        </div>
    </div>
</template>

<script>
import JobItem from '@components/job-item/index.vue'

export default {
    name: 'Recruitment',
    components: {
        JobItem,
    },
}
</script>

<style scoped lang="less">
.recruitment-container {
    .recruitment-img {
        img {
            width: 100%;
            margin-top: 104px;
        }
    }
    .recruitment-jobitem {
        padding: 0 18.75%;
        margin: 0 auto;
        margin-top: 85px;
        margin-bottom: 160px;
        .recruitment-phone {
            font-size: 20px;
            font-family: SourceHanSansSC-Bold, SourceHanSansSC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 29px;
        }
    }
}
</style>
