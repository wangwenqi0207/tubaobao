<template>
    <div class="contactus-contact-us">
        <div class="index-contact-card">
            <h3>联系我们</h3>
            <div class="index-contact-text">
                <p class="index-contact-text-child1">
                    贵州贵阳兔宝宝全屋定制
                </p>
                <p class="index-contact-text-child2">
                    地址：贵州省贵阳市白云区云峰大道西南家居城（泉湖公园对面）定制馆一楼中庭45号
                </p>
                <Tel></Tel>
            </div>
        </div>
    </div>
</template>

<script>
import Tel from '@/components/tel/index.vue'

export default {
    name: 'Contactus',
    components: {
        Tel,
    },
}
</script>

<style scoped lang="less">
.contactus-contact-us {
    height: 500px;
    padding: 0 18.75%;
    display: flex;
    align-items: center;
    .index-contact-card {
        width: 100%;
        height: 222px;
        border: 1px dashed #979797;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            font-size: 24px;
            font-family: SourceHanSansSC-Medium, SourceHanSansSC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 36px;
            position: absolute;
            top: -17px;
            left: 72px;
            background: #fff;
        }
        .index-contact-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .index-contact-text-child1 {
                font-size: 20px;
                font-family: SourceHanSansSC-Medium, SourceHanSansSC;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 29px;
            }
            .index-contact-text-child2 {
                font-size: 14px;
                font-family: SourceHanSansSC-Medium, SourceHanSansSC;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
