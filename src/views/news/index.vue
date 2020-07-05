<template>
    <div class="news-container">
        <div class="news-img"></div>
        <div class="news-item">
            <NewsItem />
        </div>
    </div>
</template>

<script>
import NewsItem from '@/components/news-item/index.vue'

export default {
    name: 'News',
    components: {
        NewsItem,
    },
}
</script>

<style scoped lang="less">
.news-container {
    .news-img {
        width: 100%;
        height: 150px;
        background-image: url(https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/news.png);
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 104px;
    }
    .news-item {
        padding: 0 18.75%;
        margin-top: 50px;
        margin-bottom: 200px;
    }
}
</style>
