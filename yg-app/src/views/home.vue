<template>
    <div>
        <home-header class="home-head"></home-header>
        <home-top class="home-top"></home-top>
        <home-middle class="home-middle"></home-middle>
    </div>
</template>

<script>
    import header from "../components/home/home-header"
    import top from "../components/home/home-top"
    import middle from "../components/home/home-middle"
    import homeApi from '../apis/homeApi'
    export default {
        name: "home",
        components:{
            "home-header":header,
            "home-top":top,
            "home-middle":middle
        },
        data () {
            return {
                flag: true,
                homeInfo: [] // 页面的数据模型
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                let data = await homeApi.getHomeInfoByUserId()
                this.homeInfo = data
            },
        },
        beforeMount () {
            this._initPageData()
        },

    }
</script>

<style scoped>
    @import "../assets/css/home.css";
</style>
