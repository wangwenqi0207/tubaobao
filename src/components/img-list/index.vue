<template>
    <div class="img-list-container">
        <div
            v-for="src in imgList"
            :key="src"
            :class="['img-list', `mode-${mode}`]"
        >
            <el-image
                class="el-image-reset"
                :preview-src-list="showPreview ? imgList : []"
                :src="src"
                fit="fill"
            />
            <div v-if="showMask" class="mask">
                <p><router-link to="product">查看更多</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Img-list',
    props: {
        mode: {
            type: Number,
            default: 0,
        },
        // showPreview showMask 不要同时使用
        showPreview: {
            type: Boolean,
            default: false,
        },
        showMask: {
            type: Boolean,
            default: true,
        },
        imgList: {
            type: Array,
            default: () => [
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p1.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p2.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p3.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p4.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p5.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/p6.png',
            ],
        },
    },
}
</script>

<style lang="less" scoped>
.img-list-container {
    width: 100%;
    display: flex;
    /*justify-content: space-between;*/
    flex-wrap: wrap;
    .img-list {
        width: 31%;
        margin-right: 3%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        overflow: hidden;
        background: #f5f7fa;

        .el-image-reset {
            width: 100%;
            height: 100%;
        }

        &:nth-child(3n) {
            margin-right: 0;
        }
        &:nth-last-of-type(3),
        &:nth-last-of-type(2),
        &:nth-last-of-type(1) {
            margin-bottom: 0;
        }
        &:hover {
            .mask {
                top: 0;
            }
        }
        .mask {
            position: absolute;
            top: -100%;
            transition: all 0.5s;
            background: rgba(0, 0, 0, 0.4);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            > p {
                padding: 6px 16px;
                border: 1px dashed #fff;
                border-radius: 4px;
            }
        }
    }
    .mode-0 {
        margin-bottom: 52px;
    }
    .mode-1 {
        margin-bottom: 48px;
        height: 240px;
    }
}
</style>
