<template>
    <div class="news-item-container">
        <div class="news-item" v-for="item of newsItem" :key="item.title">
            <img :src="item.img" alt="" class="news-item-img" />
            <div class="news-item-card">
                <h3 class="news-item-title">
                    {{ item.title }}
                </h3>
                <p class="news-item-content">{{ item.content }}</p>
                <div class="news-item-details">
                    <router-link :to="{ path: '/newsdetails/' + item.id }">
                        <p class="news-into-details">详情>></p>
                    </router-link>
                    <p>2020年05月18日</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News-item',
    props: {
        newsItem: {
            type: Array,
            default: () => [
                {
                    id: '1',
                    img:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/news2.png',
                    title: '兔宝宝板材是中国生态板十大品牌吗？',
                    content:
                        ' 生态板相当于三聚氰胺贴面板，环保性能基本都达到E0级，是一种新型产品，基材通常是胶合板、细木工板、顺芯板等等。想买好的生态板，一定要了解生态板品牌的实力、口碑，以及产品丰富程度。到底该如何才能选到优质的生态板品牌呢？作为中国生态板十大品牌之一兔宝宝，是中国板材十大品牌，环保板材十大品牌，而且还是家装板材十大品牌。小编家中定制家居用的就是中国生态板十大品牌——兔宝宝生态板，板材环',
                },
                {
                    id: '2',
                    img:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/news3.png',
                    title: '如何选择高质量整体衣柜品牌？',
                    content:
                        ' 衣柜是家庭日常生活中必不可少的家居产品之一，由于使用的频率高和强大的收纳能力，已成为我们日常生活中不可分割的一部分，所以在选择适合的整体衣柜品牌时一定要全方位考虑。衣柜的材料尽量选择环保类材质，闻气味是检查衣柜是否环保方法之一，在购买的时候可以拉开柜门闻闻，有异味或者味道很大的衣柜就说明甲醛含量超标，不能购买',
                },
            ],
        },
    },
}
</script>

<style scoped lang="less">
.news-item-container {
    .news-item {
        height: 200px;
        margin-bottom: 81px;
        display: flex;
        align-items: center;
        .news-item-img {
            margin-right: 32px;
        }
        .news-item-title {
            font-size: 30px;
            font-family: 'SourceHanSansSC-Medium,SourceHanSansSC';
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 45px;
        }
        .news-item-content {
            font-size: 14px;
            font-family: 'SourceHanSansSC-Medium,SourceHanSansSC';
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
        }
        .news-item-details {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            p {
                font-size: 16px;
                font-family: 'SourceHanSansSC-Medium,SourceHanSansSC';
                font-weight: 500;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
            }
            .news-into-details {
                cursor: pointer;
            }
        }
    }
}
</style>
