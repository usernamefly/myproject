<template>
    <div v-if="claInfo">
        <cla-head></cla-head>
        <cla-head-bot></cla-head-bot>
        <cla-foot :data="claInfo"></cla-foot>
    </div>
</template>

<script>
    import claApi from '../apis/classificationApi'
    import head from '../components/classification/cla-head'
    import headb from '../components/commons/cla-head-bot'
    import footb from '../components/classification/cla-foot'
    export default {
        name: "classification",
        components:{
            "cla-head":head,
            "cla-head-bot":headb,
            "cla-foot":footb
        },
        data () {
            return {
                flag: true,
                claInfo: []// 页面的数据模型
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            _initPageData() {
                claApi.getclaInfoByUserId(data => {
                    // eslint-disable-next-line no-console
                    this.claInfo = data;
                })
            },
        },
        beforeMount () {
            this._initPageData()
        },
    }
</script>

<style scoped>
    @import "../assets/css/cla.css";
</style>
