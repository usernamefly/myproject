<template>
    <div class="person">
        <per-head></per-head>
        <per-headb></per-headb>
        <per-show></per-show>
        <per-order></per-order>
        <per-middle></per-middle>
        <per-foot></per-foot>
    </div>
</template>

<script>
    import head from  "../components/personal/person-head"
    import headb from "../components/commons/cla-head-bot"
    import show from "../components/personal/per-show"
    import order from "../components/personal/per-order"
    import mid from "../components/personal/per-midl"
    import foot from "../components/personal/per-foot"
    export default {
        name: "Personal",
        components:{
            "per-head":head,
            "per-headb":headb,
            "per-show":show,
            "per-order":order,
            "per-middle":mid,
            "per-foot":foot
        }
    }
</script>

<style scoped>
.person{
    width: 100%;
    background-color: rgb(230,230,230);
}
</style>
