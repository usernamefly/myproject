<template>
<div class="details">
    <det-head></det-head>
    <det-sli></det-sli>
    <det-mao></det-mao>
    <det-bot></det-bot>
    <det-sel></det-sel>
    <det-mid></det-mid>
    <det-pro></det-pro>
    <det-link></det-link>
    <det-foot></det-foot>
</div>
</template>

<script>
    import head from "../components/detail/det-head"
    import foot from "../components/detail/det-foot"
    import slid from "../components/detail/det-lun"
    import mao from "../components/detail/det-miao"
    import sel from "../components/detail/det-sele"
    import miaob from "../components/detail/det-miao-bot"
    import middle from "../components/detail/det-middle"
    import pro from "../components/detail/det-pro"
    import link from "../components/detail/det-link"
    export default {
        name: "detail",
        components:{
            "det-head":head,
            "det-foot":foot,
            "det-sli":slid,
            "det-mao":mao,
            "det-bot":miaob,
            "det-sel":sel,
            "det-mid":middle,
            "det-pro":pro,
            "det-link":link
        }
    }
</script>

<style scoped>
.details{
    background-color:rgb(244,244,244);
}
</style>
