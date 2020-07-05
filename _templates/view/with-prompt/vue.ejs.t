---
    to: src/views/<%= name %>/index.vue
---

<template>
    <div class="<%= name %>-container">

    </div>
</template>

<script>
export default {
    name: '<%= Name %>',
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    mounted() {
    },
}
</script>

<style scoped lang="less">
.<%= name %>-container {

}
</style>