const getImgType = (baseUrl, num, ext = '.jpg') => {
    const arr = []
    for (let i = 1; i <= num; i += 1) {
        const img = `${baseUrl}(${i})${ext}`
        arr.push(img)
    }
    return arr
}

const baseUrlList = [
    {
        id: 1,
        name: '入户玄关柜',
        num: 20,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/01%E5%85%A5%E6%88%B7%E7%8E%84%E5%85%B3%E6%9F%9C/xuanguan%20',
    },
    {
        id: 2,
        name: '酒柜',
        num: 30,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/02%E9%85%92%E6%9F%9C/jiugui%20',
    },
    {
        id: 3,
        name: '间厅柜',
        num: 40,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/03%E9%97%B4%E5%8E%85%E6%9F%9C/jiantinggui%20',
    },
    {
        id: 4,
        name: '衣帽间',
        num: 22,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/04%E8%A1%A3%E5%B8%BD%E9%97%B4/yimaojian%20',
    },
    {
        id: 5,
        name: '鞋柜',
        num: 23,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/05%E9%9E%8B%E6%9F%9C/xiegui%20',
    },
    {
        id: 6,
        name: '餐边柜饰柜',
        num: 34,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/06%E9%A4%90%E8%BE%B9%E6%9F%9C%E9%A5%B0%E6%9F%9C/canbiangui%20',
    },
    {
        id: 7,
        name: '阳台柜',
        num: 21,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/07%E9%98%B3%E5%8F%B0%E6%9F%9C/yangtaigui%20',
    },
    {
        id: 8,
        name: '书柜',
        num: 50,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/08%E4%B9%A6%E6%9F%9C/shugui%20',
    },
    {
        id: 9,
        name: '榻榻米',
        num: 12,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/09%E6%A6%BB%E6%A6%BB%E7%B1%B3/tatami%20',
    },
    {
        id: 10,
        name: '电视柜',
        num: 5,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/10%E7%94%B5%E8%A7%86%E6%9F%9C/dianshigui%20',
    },
    {
        id: 11,
        name: '衣柜',
        num: 182,
        baseUrl:
            'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/11%E8%A1%A3%E6%9F%9C/yigui%20',
    },
]

export default function getProductList(page = 1, pageSize = 9) {
    return baseUrlList.map((item) => {
        const {
            id, name, num, baseUrl, 
        } = item
        const total = Math.ceil(num / pageSize)
        const allImgs = getImgType(baseUrl, num)
        const list = allImgs >= 9
            ? allImgs
            : allImgs.slice(
                (page - 1) * pageSize,
                (page - 1) * pageSize + pageSize,
            )
        return {
            id,
            name,
            num,
            total,
            list,
        }
    })
}
