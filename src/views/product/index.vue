<template>
    <div class="product-container">
        <div class="filter-wrap">
            <UserBtn class="user-btn-reset" style="font-size: 24px;"
                >全屋定制</UserBtn
            >
            <el-radio-group
                v-if="imgList && imgList.list"
                v-model="activeName"
                @change="handleChange"
                class="el-radio-button-reset"
            >
                <el-radio-button
                    v-for="item in allImgList"
                    :label="item.name"
                    :key="item.id"
                ></el-radio-button>
            </el-radio-group>
        </div>

        <ImgList
            :imgList="imgList.list"
            showPreview
            :showMask="false"
            :mode="1"
        />

        <el-pagination
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            class="el-pagination-reset"
            background
            layout="prev, pager, next"
            :total="imgList.num"
        >
        </el-pagination>
    </div>
</template>

<script>
import ImgList from '@components/img-list/index.vue'
import UserBtn from '@components/user-btn/index.vue'
import getProductList from './data'

export default {
    name: 'Product',
    components: {
        ImgList,
        UserBtn,
    },
    data() {
        return {
            activeName: this.$route.query.type || '入户玄关柜',
            allImgList: getProductList(this.currentPage),
            imgList: null,
            pageSize: 9,
            currentPage: parseInt(this.$route.query.curPage, 10) || 1,
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCurrentChange(val) {
            this.allImgList = getProductList(val)
            this.initImgList(this.activeName)
            this.saveParamsByRouter(this.activeName, val)
            console.log(this.allImgList, 'this.allImgList')
        },
        saveParamsByRouter(type, curPage) {
            this.$router
                .push({
                    path: '',
                    query: {
                        type,
                        curPage,
                    },
                })
                .then((res) => {})
                .catch((err) => {})
        },
        initImgList(name) {
            const imgList = this.allImgList.filter((item) => item.name === name)
            console.log(imgList, 'imgList')
            if (imgList.length === 1) {
                const [data] = imgList
                this.imgList = data
            }
        },
        handleChange(name) {
            this.allImgList = getProductList(1)
            this.initImgList(name)
            this.saveParamsByRouter(name, 1)
        },
    },
    created() {
        const { curPage } = this.$route.query
        this.handleCurrentChange(curPage || 1)
    },
    mounted() {},
}
</script>

<style scoped lang="less">
.product-container {
    padding: 0 18.75%;
    .filter-wrap {
        padding: 90px 0 56px;
        display: flex;
        .user-btn-reset {
            margin-right: 12px;
            flex-shrink: 0;
            height: 100%;
        }
    }
}
</style>
<style lang="less">
.product-container {
    .filter-wrap {
        .el-radio-button-reset {
            border: 1px solid rgba(230, 230, 216, 1);
            .el-radio-button__inner {
                // padding: 12px 20px;
                height: 100%;
                font-size: 14px;
                font-weight: 400;
                color: #333;
                line-height: 24px;
            }
            .is-active {
                font-weight: 500;
                background-color: #62c500;
            }
            .el-radio-button {
                .el-radio-button__inner {
                    border: none;
                    border-radius: initial;
                    box-shadow: none !important;
                }
            }
            .el-radio-button__orig-radio:checked + .el-radio-button__inner {
                color: #fff;
                background-color: #62c500;
                border-color: #62c500;
                box-shadow: -1px 0 0 0 #62c500;
            }
            .el-radio-button__orig-radio:not(:checked)
                + .el-radio-button__inner:hover {
                color: #62c500;
            }
        }
    }
    .el-pagination-reset {
        margin: 66px 0 90px;
        display: flex;
        justify-content: center;
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: #62c500;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover {
            color: #62c500;
        }
        .el-pager {
            li {
                background-color: #fff;
                border: 1px solid rgba(217, 217, 217, 1);
            }
            li:not(.disabled).active {
                background-color: #62c500;
            }
            li:not(.disabled):not(.active):hover {
                color: #62c500;
            }
        }
        .btn-prev,
        .btn-next {
            background-color: #fff;
            border: 1px solid rgba(217, 217, 217, 1);
        }
    }
}
</style>
