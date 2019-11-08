<template>
    <div class="fou" v-if="fouInfo">
        <fou-head></fou-head>
        <fou-headb></fou-headb>
        <fou-head-s></fou-head-s>
        <fou-footer :data="fouInfo"></fou-footer>
    </div>
</template>

<script>
    import foundApi from "../apis/foundApi"
    import head from '../components/found/fou-head'
    import headb from '../components/commons/cla-head-bot'
    import headshi from '../components/found/fou-hbot'
    import footer from '../components/found/fou-foot'
    export default {
        name: "found",
        components:{
            "fou-head":head,
            "fou-headb":headb,
            "fou-head-s":headshi,
            "fou-footer":footer
        },
        data () {
            return {
                flag: true,
                fouInfo: [] // 页面的数据模型
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            _initPageData() {
                foundApi.getFouInfoByUserId(data => {
                    // eslint-disable-next-line no-console
                    this.fouInfo = data;
                })
            },
        },
        beforeMount () {
            this._initPageData()
        },
    }
</script>

<style scoped>
    @import "../assets/css/fou.css";
</style>
