<template>
    <div class="user-btn-container" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'User-btn',
    props: {
        size: {
            type: String,
            default: 'large',
        },
        bg: {
            type: String,
            default: '#363D4D', // #363D4D-黑色  #62C500-绿色
        },
    },
    components: {},
    data() {
        return {
            style: {
                padding: '',
                backgroundColor: this.bg,
            },
        }
    },
    computed: {},
    watch: {},
    methods: {
        initStyle() {
            switch (this.size) {
            case 'large':
                this.style.padding = '12px 32px'
                break
            case 'medium':
                this.style.padding = '8px 14px'
                break
            default:
            }
        },
    },
    created() {},
    mounted() {
        this.initStyle()
    },
}
</script>

<style scoped lang="less">
.user-btn-container {
    display: inline-block;
    color: #fff;
    cursor: pointer;
}
</style>
