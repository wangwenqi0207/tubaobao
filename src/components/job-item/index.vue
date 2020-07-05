<template>
    <div>
        <div class="job-container" v-for="item of jobItem" :key="item.name">
            <div class="job-introduce">
                <h3>
                    {{ item.name }}
                </h3>
                <p>{{ item.introduce1 }}</p>
                <p>{{ item.introduce2 }}</p>
            </div>
            <p class="job-money">{{ item.money }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Job-item',
    props: {
        jobItem: {
            type: Array,
            default: () => [
                {
                    name: '设计师',
                    introduce1:
                        '测量，三维家设计，沟通方案，下单，售后指导安装，下补单；',
                    introduce2: '要求和客户沟通粘性强，工作态度认真负责，细心',
                    money: '薪资面议',
                },
                {
                    name: '导购员',
                    introduce1:
                        '接待和引导客户入店，做好客户服务；以专业的态度、亲情服务赢得客户的信任，',
                    introduce2:
                        '以期获得量尺机会；作好客户的中期跟进，维护好品牌形象',
                    money: '薪资面议',
                },
                {
                    name: '业务员',
                    introduce1:
                        '完成门店的销售任务，接待顾客咨询，促进订单成交;',
                    introduce2: '跟进订单回款',
                    money: '薪资面议',
                },
                {
                    name: '营销主管',
                    introduce1:
                        '年龄25～45周岁，条件合适可适当放宽条件，了解销售业务流程或有销售工作经验的优先，',
                    introduce2:
                        '根据业务需求制定营销策划方案。主动性强，具有敬业精神和责任心、上进心',
                    money: '薪资面议',
                },
            ],
        },
    },
}
</script>

<style scoped lang="less">
@jobfont: 'SourceHanSansSC-Medium,SourceHanSansSC';
@weight: 500;
.job-container {
    width: 100%;
    height: 130px;
    background: rgba(247, 247, 247, 1);
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 46px;
    .job-introduce h3 {
        font-size: 24px;
        font-family: @jobfont;
        font-weight: @weight;
        color: rgba(98, 197, 0, 1);
        line-height: 36px;
        margin-bottom: 7px;
    }
    .job-introduce p {
        font-size: 14px;
        font-family: @jobfont;
        font-weight: @weight;
        color: rgba(102, 102, 102, 1);
        line-height: 25px;
    }
    .job-money {
        font-size: 14px;
        font-family: @jobfont;
        font-weight: @weight;
        color: rgba(153, 153, 153, 1);
        line-height: 25px;
        display: flex;
        align-items: flex-end;
    }
}
</style>
