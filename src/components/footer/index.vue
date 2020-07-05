<template>
    <div class="footer-container">
        <ul class="list-wrap" v-for="(item, index) in footList" :key="index">
            <li
                @click="handleClick(subItem)"
                v-for="subItem in item"
                :key="subItem.name || subItem.url || subItem.props"
            >
                {{ subItem.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components: {},
    data() {
        return {
            footList: [
                [
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
                [
                    {
                        label: '兔宝宝',
                        url: 'https://www.tubaobao.com/',
                    },
                    {
                        label: '黔ICP备20005010号-1',
                        props: 'records',
                    },
                ],
            ],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick(item) {
            const { name = '', url = '', props = '' } = item
            if (name) {
                this.$router.push(`/${name}`)
            } else if (url) {
                window.location.href = url
            }
        },
    },
    created() {},
    mounted() {},
}
</script>

<style scoped lang="less">
.footer-container {
    background: #666;
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 45px 0 45px 30%;
    .list-wrap {
        display: flex;
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
        > li {
            margin: 0 25px;
            cursor: pointer;
        }
    }
}
</style>
