<template>
    <div v-if="homeInfo">
        <home-header class="home-head" :data="homeInfo"></home-header>
        <home-top class="home-top"></home-top>
        <home-middle class="home-middle" :data="homeInfo.heads"></home-middle>
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
            _initPageData() {
                homeApi.getHomeInfoByUserId(data => {
                    // eslint-disable-next-line no-console
                    this.homeInfo = data;
                    // eslint-disable-next-line no-console
                    console.log(this.homeInfo.heads);
                })
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
