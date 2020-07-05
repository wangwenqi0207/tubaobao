<template>
    <div class="index-container">
        <div class="index-showmore">
            <div class="index-showmore-card">
                <img
                    src="https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/shouye1.png"
                    alt=""
                />
                <div>
                    <h3>兔宝宝：中国环保家居行业领军之骏</h3>
                    <p>
                        德华兔宝宝装饰新材股份有限公司创始于1993年，公司于2005年5月10日在深圳证券交易所上市交易
                    </p>
                    <p>（股票简称：兔宝宝，股票代码：002043）。</p>
                    <router-link to="about">
                        <UserBtn
                            bg="#62C500"
                            size="medium"
                            class="index--showmore-card-button"
                            >查看更多</UserBtn
                        >
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 产品中心 -->
        <div class="product-list-wrap">
            <CircleTxt class="product-list-circle" fill="0" />
            <ImgList />
        </div>
        <div class="swiper-wrap">
            <CircleTxt title="严选板材" fill="1" class="swiper-wrap-circle" />
            <Swiper :mode="1" :imgList="swiperList" class="index-swiper" />
        </div>
        <div class="index-news-center">
            <div class="index-showmore-card">
                <img
                    src="https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/index/sy2.png"
                    alt=""
                />
                <div class="index-news-card">
                    <CircleTxt
                        class="product-list-circle"
                        fill="0"
                        title="新闻中心"
                    />
                    <div v-for="item of newsItem" :key="item.title">
                        <h3 class="index-news-title">{{ item.title }}</h3>
                        <div class="index-news-content">
                            <p>{{ item.content }}</p>
                            <router-link
                                :to="{ path: '/newsdetails/' + item.id }"
                            >
                                详情>>
                            </router-link>
                        </div>
                    </div>
                    <router-link :to="{ path: '/news' }">
                        <UserBtn bg="#62C500" size="medium" class=""
                            >更多新闻</UserBtn
                        >
                    </router-link>
                </div>
            </div>
        </div>
        <Contactus />
    </div>
</template>

<script>
import Swiper from '@components/swiper/index.vue'
import ImgList from '@components/img-list/index.vue'
import UserBtn from '@components/user-btn/index.vue'
import CircleTxt from '@/components/circle-txt/index.vue'
import Contactus from '@/components/contactus/index.vue'

export default {
    name: 'Index',
    components: {
        Swiper,
        ImgList,
        UserBtn,
        CircleTxt,
        Contactus,
    },
    data: () => ({
        swiperList: [
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/bancai1.png',
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/bancai2.png',
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/bancai3.png',
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/bancai4.png',
        ],
        newsItem: [
            {
                id: 1,
                title: '兔宝宝板材是中国生态板十大品牌吗？',
                content:
                    '生态板相当于三聚氰胺贴面板，环保性能基本都达到E0级，是一种新型···',
            },
            {
                id: 2,
                title: '如何选择高质量整体衣柜品牌？',
                content:
                    '衣柜是家庭日常生活中必不可少的家居产品之一，由于使用的频率高和···',
            },
        ],
    }),
}
</script>

<style lang="less" scoped>
.index-container {
    .ml40 {
        margin-left: 40px;
    }
    .product-list-wrap {
        padding: 36px 18.75% 143px;
        background: #f2f2f2;
        .product-list-circle {
            margin: 0 auto;
            margin-bottom: 75px;
        }
    }
    .swiper-wrap {
        padding: 0 18.75% 105px;
        width: 100%;
        margin: 0 auto;
        .swiper-wrap-circle {
            margin: 0 auto;
            margin-top: 84px;
            margin-bottom: 90px;
        }
    }
    .index-showmore {
        padding: 120px 18.75%;
        background: #fff;
        display: flex;
    }
    .index-news-center {
        padding: 120px 18.75%;
        background: rgba(242, 242, 242, 1);
        display: flex;
    }
    .index-showmore-card {
        display: flex;
        align-items: center;
        width: 100%;
        img {
            width: 410px;
            height: 324px;
            margin-right: 80px;
        }
        h3 {
            font-size: 30px;
            font-family: 'SourceHanSansSC-Bold,SourceHanSansSC';
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 45px;
            letter-spacing: 1px;
            margin-bottom: 9px;
        }
        p {
            font-size: 14px;
            font-family: 'SourceHanSansSC-Regular,SourceHanSansSC';
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
        }
        .index--showmore-card-button {
            margin-top: 50px;
        }
    }
    .index-news-card {
        width: 100%;
        .product-list-circle {
            margin-bottom: 33px;
        }
        .index-news-title {
            font-size: 16px;
            font-family: SourceHanSansSC-Medium, SourceHanSansSC;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
        }
        .index-news-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #cccccc;
            padding-bottom: 21px;
            margin-bottom: 26px;
            p {
                font-size: 16px;
                font-family: SourceHanSansSC-Medium, SourceHanSansSC;
                color: rgba(51, 51, 51, 1);
                line-height: 24px;
            }
            a {
                font-size: 16px;
                font-family: SourceHanSansSC-Medium, SourceHanSansSC;
                font-weight: 500;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
                cursor: pointer;
                flex-shrink: 0;
                margin-left: 10px;
            }
        }
    }
}
</style>
