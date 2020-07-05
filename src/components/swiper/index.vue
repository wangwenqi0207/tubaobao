<template>
    <div class="c-swiper-container">
        <Swiper
            :options="swiperOption"
            :class="['swiper-wrap', `mode-${mode}`]"
        >
            <SwiperSlide
                v-for="(img, index) in imgList"
                :key="index"
                class="swiper-item"
            >
                <div class="swiper-item-content">
                    <img :src="img" alt="" />
                </div>
            </SwiperSlide>

            <div
                v-if="showPagination"
                class="swiper-pagination"
                slot="pagination"
            ></div>

            <!-- Arrows -->
            <template v-if="showNavigation || mode === 1">
                <div
                    class="swiper-button-custom swiper-button-prev"
                    slot="button-prev"
                    :style="{ background: `url(${navigation.prev}) no-repeat` }"
                ></div>
                <div
                    class="swiper-button-custom swiper-button-next"
                    slot="button-next"
                    :style="{ background: `url(${navigation.next}) no-repeat` }"
                ></div>
            </template>
        </Swiper>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
    name: 'c-swiper-vertical',
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    props: {
        mode: {
            type: Number,
            // default: 1, // 0-豆豆切换 1-左右
        },
        imgList: {
            type: Array,
            default: () => [
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/banner1.png',
                'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/banner2.png',
            ],
        },
        showPagination: {
            type: Boolean,
            default: true,
        },
        showNavigation: {
            type: Boolean,
            default: false,
        },
        navigation: {
            type: Object,
            default: () => ({
                prev:
                    'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/left.png',
                next:
                    'https://rabbit-imgs-1301978122.cos.ap-shanghai.myqcloud.com/swiper/right.png',
            }),
        },
    },
    data() {
        return {
            swiperOption: {
                // load do something
                // notNextTick: true,
                // direction: 'vertical',
                observer: true,
                // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                observeParents: true,
                // slider num
                slidesPerView: 1,
                // slider space
                spaceBetween: this.mode === 0 ? 0 : 111,
                // 禁止滑动
                noSwiping: false,
                noSwipingClass: 'swiper-wrap', // 指定不允许滑动的slider
                loop: true,
                loopAdditionalSlides: 1,
                loopedSlides: this.imgList.length,
                // autoplay: false,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletElement: 'div',
                    // user-defined
                    bulletClass: 'bullet-class',
                    bulletActiveClass: 'bullet-active-class',
                },
                navigation: {
                    disabledClass:
                        this.mode === 1 ? 'swiper-button-custom' : null,
                    nextEl: this.mode === 1 ? '.swiper-button-next' : null,
                    prevEl: this.mode === 1 ? '.swiper-button-prev' : null,
                },
            },
        }
    },
}
</script>

<style lang="less" scoped>
.c-swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrap {
        width: 100%;
        // height: 100%;
        .swiper-item-content {
            width: 100%;
            > img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>

<style lang="less">
.c-swiper-container {
    .swiper-wrapper .swiper-slide {
        display: flex;
        align-items: center;
    }
    .mode-0 {
        .swiper-pagination {
            display: flex;
            justify-content: center;
            bottom: 50px;
            .bullet-class {
                cursor: pointer;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255, 255, 240, 0.2);
                margin-right: 18px;
                &:last-child {
                    margin-right: 0;
                }
            }
            .bullet-active-class {
                background: rgba(255, 255, 240, 0.7);
            }
        }
    }
    .mode-1 {
        padding: 0 110px; // prev next
        .swiper-button-custom {
            width: 60px;
            height: 60px;
            background-size: cover;
            &.swiper-button-next {
                right: 0;
            }
            &.swiper-button-prev {
                left: 0;
            }
            &:after,
            &:before {
                content: '';
                font-family: initial;
            }
        }
    }
}
</style>
