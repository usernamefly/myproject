<template>
    <div v-if="baiInfo">
        <bai-head></bai-head>
        <bai-splid></bai-splid>
        <bai-dos></bai-dos>
        <bai-containear :data="baiInfo"></bai-containear>
        <bai-foot></bai-foot>
    </div>
</template>

<script>
    import containear from "../components/baili/bai-containear"
    import splid from "../components/baili/bai-splid"
    import head from "../components/classification/cla-head";
    import foot from "../components/baili/bai-foot"
    import dos from "../components/baili/bai-dos"
    import bailiApi from "../apis/bailiApi";
    export default {
        name: "baili",
        components:{
          "bai-head":head,
          "bai-splid":splid,
          "bai-dos":dos,
            "bai-containear":containear,
            "bai-foot":foot
        },
        data(){
            return {
                baiInfo:[]
            }
        },
        methods:{
            async _initBaiInfo(){
                let data= await bailiApi.getBaiInfoByUserId();
                this.baiInfo=data;
            }
        },
        beforeMount() {
            this._initBaiInfo();
        }
    }
</script>

<style scoped>

</style>
