<template>
    <div>
        <router-view></router-view>
        <yg-footer></yg-footer>
    </div>
</template>

<script>
    import footer from "../components/commons/yg-foot"
    export default {
        name: "vmain",
        components:{
            "yg-footer":footer,
        }
    }
</script>

<style scoped>

</style>
