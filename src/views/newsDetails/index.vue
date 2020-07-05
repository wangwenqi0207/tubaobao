<template>
    <div class="news-container">
        <div>
            <img
                src="https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/news.png"
                alt=""
            />
        </div>
        <div v-for="item of detailsArr" :key="item.id">
            <div class="news-content">
                <h2>
                    {{ item.title }}
                </h2>
                <p class="news-title">
                    <span>来源：兔宝宝官网网站</span>
                    <span class="news-time">2020年05月18日</span>
                </p>
                <p class="news-article">
                    {{ item.article1 }}
                </p>
                <img :src="item.img1" alt="" />
                <p class="news-article">
                    {{ item.article2 }}
                </p>
                <img :src="item.img2" alt="" />
                <p class="news-article">
                    {{ item.article3 }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsDetails',
    data() {
        return {
            detailsArr: [],
            newsDetails: [
                {
                    id: '1',
                    title: '兔宝宝板材是中国生态板十大品牌吗？',
                    article1: `生态板相当于三聚氰胺贴面板，环保性能基本都达到E0级，
                    是一种新型产品，基材通常是胶合板、细木工板、顺芯板等等。想买好的生态板，一定要了解生态板品牌的实力、
                    口碑，以及产品丰富程度。到底该如何才能选到优质的生态板品牌呢？`,
                    article2: `作为中国生态板十大品牌之一兔宝宝，是中国板材十大品牌，环保板材十大品牌，
                而且还是家装板材十大品牌。小编家中定制家居用的就是中国生态板十大品牌——兔宝宝生态板，
                板材环保等级高达E0级别，健康又环保，连制作家具的木工师傅都夸选得好。
                <br />那么生态板材有什么优点呢？
                <br />生态板材原材料选自甲醛含量接近于零的原生态木材。
                整张板饰面采用无缝三聚氰胺纸贴面，且附有防潮膜阻隔水分，能有效的防水防潮。
                另外生态板花色繁多，可以用于多种风格的家具制作。表面不需要喷漆就可以直接使用，
                而且表面纹理清晰自然、花色不易褪色。`,
                    article3: `上面介绍了生态板材的优点，那么它应用的领域都有哪些呢？生态板材具有轻巧便捷、
                易于加工等优质特性，应用的范围非常广泛，例如家庭中各类柜体，榻榻米等家具，
                还可以用于手工艺品，楼梯侧板，踏步板，墙壁装饰板等等都可以使用这种板材。
                兔宝宝生态板，绿色环保新材，关爱您的健康。`,
                    img1:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/xinwenzhongxin3.png',
                    img2:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/xinwenzhongxin4.png',
                },
                {
                    id: '2',
                    title: '如何选择高质量整体衣柜品牌？',
                    article1: `衣柜是家庭日常生活中必不可少的家居产品之一，由于使用的频率高和强大的收纳能力，
                    已成为我们日常生活中不可分割的一部分，所以在选择适合的整体衣柜品牌时一定要全方位考虑。
                    衣柜的材料尽量选择环保类材质，闻气味是检查衣柜是否环保方法之一，在购买的时候可以拉开柜门闻闻，
                    有异味或者味道很大的衣柜就说明甲醛含量超标，不能购买。`,
                    article2: `选择正规厂家。一分价钱一分货，一定不要贪图便宜，一定要选择正规有实力有保障的厂家、品牌。
                    自己也可以上网查询了解一下。正规厂家的质检合格证明一般都比较齐全，只有经过国家相关权威部门认可的品牌，才能保证品质和售后。
                    兔宝宝公司以推进行业绿色进程为己任，积极整合生态资源，为消费者提供全家居装饰综合服务。
                    公司通过ISO9001、ISO14001国际质量、环境管理体系认证、中国环境标志产品认证、FSC森林认证、美国CARB II认证、日本大臣认证等多项认证。`,
                    article3:
                        '通过介绍，相信大家对于如何选择高质量整体衣柜品牌已经有了初步的认识，近年来，兔宝宝公司凭借着过硬的产品品质和完善的服务体系，赢得了众多消费者的喜爱，有需要整的朋友可以去实体店进行更深一步的了解~~',
                    img1:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/xinwenzhongxin1.png',
                    img2:
                        'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/news/xinwenzhongxin2.png',
                },
            ],
        }
    },
    created() {
        this.newsDetails.forEach((item) => {
            if (item.id === this.$route.params.id) {
                this.detailsArr.push(item)
            }
        })
    },
}
</script>

<style scoped lang="less">
.news-container {
    .news-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        margin-top: 59px;
        h2 {
            font-size: 30px;
            font-family: SourceHanSansSC-Medium, SourceHanSansSC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 45px;
        }
        .news-title {
            font-size: 14px;
            font-family: SourceHanSansSC-Regular, SourceHanSansSC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 20px;
            margin-bottom: 34px;
            margin-top: 18px;
            .news-time {
                margin-left: 17px;
            }
        }
        img {
            margin-bottom: 50px;
            margin-top: 50px;
        }
        .news-article {
            width: 900px;
            font-size: 14px;
            font-family: SourceHanSansSC-Medium, SourceHanSansSC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 32px;
        }
    }
}
</style>
