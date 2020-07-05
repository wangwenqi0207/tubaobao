<template>
    <div class="layout-container">
        <header class="hd">
            <div class="left">
                <Logo />
            </div>
            <div class="right">
                <Tel class="tel-reset" :telList="telList" />
                <el-tabs
                    class="el-tabs-reset"
                    v-model="activeName"
                    @tab-click="handleClick"
                >
                    <el-tab-pane
                        v-for="page in tabList"
                        :label="page.label"
                        :name="page.name"
                        :key="page.name"
                    ></el-tab-pane>
                </el-tabs>
            </div>
        </header>
        <Swiper
            class="index-swiper"
            :mode="0"
            v-if="
                !['recruitment', 'news', 'newsdetails'].includes(
                    this.$route.name.toLowerCase()
                )
            "
        />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Tel from '@components/tel/index.vue'
import Logo from '@components/logo/index.vue'
import Swiper from '@components/swiper/index.vue'
import Footer from '@components/footer/index.vue'

export default {
    name: 'Layout',
    components: {
        Tel,
        Logo,
        Swiper,
        Footer,
    },
    data() {
        return {
            telList: ['0851-84414177'],
            activeName: this.$route.name.toLowerCase() || 'index',
            tabList: [
                {
                    label: '首页',
                    name: 'index',
                },
                {
                    label: '产品中心',
                    name: 'product',
                },
                {
                    label: '关于我们',
                    name: 'about',
                },
                {
                    label: '新闻中心',
                    name: 'news',
                },
                {
                    label: '人才招聘',
                    name: 'recruitment',
                },
                {
                    label: '联系我们',
                    name: 'contact',
                },
            ],
        }
    },
    watch: {
        $route(val) {
            const path = val.name.toLowerCase()
            const tabList = this.tabList.map((item) => item.name)
            // console.log('path :>> ', val, tabList);
            if (tabList.includes(path)) {
                this.activeName = path
            } else if (['recruitment', 'newsdetails'].includes(path)) {
                this.activeName = 'news'
            }
        },
    },
    methods: {
        handleClick(tab, event) {
            this.$router
                .push(`/${tab.name}`)
                .then((res) => {
                    // console.log(res, 'res router')
                    this.activeName = res.name.toLowerCase()
                })
                .catch((err) => {
                    // console.log(err, 'err router')
                })
        },
    },
}
</script>

<style scoped lang="less">
.layout-container {
    .hd {
        padding: 18px 86px 0px 18.75%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        background: #fff;
    }
    .tel-reset {
        justify-content: flex-end;
    }
    .index-swiper {
        margin-top: 104px;
    }
}
</style>

<style lang="less">
.layout-container {
    .hd {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        background: #fff;
        .el-tabs-reset {
            margin-top: 14px;
            .el-tabs__header {
                padding: 0;
                position: relative;
                margin: 0 0 4px;
            }
            .el-tabs__item {
                font-size: 16px;
                font-family: SourceHanSansSC-Medium, SourceHanSansSC;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                padding: 0 24px;
            }
            .is-active {
                color: #62c500;
            }
            .el-tabs__active-bar {
                background-color: #62c500;
            }
            .el-tabs__nav-wrap::after {
                background-color: initial;
            }
        }
    }
}
</style>
