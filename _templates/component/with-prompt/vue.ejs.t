---
    to: src/components/<%= name %>/index.vue
---

<template>
    <div class="<%= name %>-container">
        <%= name %>-placeholder
    </div>
</template>

<script>
export default {
    name: '<%= Name %>',
    props: {},
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