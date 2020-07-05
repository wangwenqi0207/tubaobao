<template>
    <div class="about-container">
        <h2>兔宝宝：中国环保家居行业领军之骏</h2>
        <p>
            德华兔宝宝装饰新材股份有限公司创始于1993年，
            公司于2005年5月10日在深圳证券交易所上市交易（股票简称：兔宝宝，股票代码：002043）。<br />
            德华兔宝宝衣柜公司自成立以来，始终坚持“环保好衣柜，健康生活+”的品牌理念。
            产品在环保、质量、公艺等方面走在家具行业前列，多项技术获国内专利，从“E级”到“E0级”再到“无醛级”，
            兔宝宝衣柜在推进行业绿色进程这条道路上越走越远。兔宝宝衣柜在浙江、江西、江苏等地拥有23万亩速生林基地，
            以高品质、高环保原材料为载体，真正做到经济效益、社会效益、环保效益相结合；同时，在非洲建立35万亩的原木林基地，提供持续的优质保障。
        </p>
        <img
            src="https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/about/guanyuwomen.png"
            alt=""
        />
    </div>
</template>

<script>
export default {
    name: 'about',
    components: {},
    data() {
        return {}
    },
}
</script>

<style scoped lang="less">
.about-container {
    width: 100%;
    padding: 0 18.75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 92px;
    margin-bottom: 133px;
    h2 {
        font-family: SourceHanSansSC-Bold, SourceHanSansSC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 45px;
        letter-spacing: 1px;
        margin-bottom: 39px;
        text-align: center;
    }
    p {
        font-size: 14px;
        font-family: SourceHanSansSC-Regular, SourceHanSansSC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
    }
    img {
        margin-top: 50px;
    }
}
</style>
