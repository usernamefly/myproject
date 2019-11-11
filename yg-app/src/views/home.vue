<template>
    <div v-if="homeInfo">
        <home-header class="home-head"></home-header>
        <transition mode="out-in" name="v">
            <div :is="flag1">
                <home-top class="home-top" @click="flag='home-top'"></home-top>
            </div>
        </transition>

        <home-middle class="home-middle" :data="homeInfo.heads"></home-middle>
        <div class="home-middle-bot" v-if="homeInfo.middle">
            <home-middle-bot :data="homeInfo.middle"></home-middle-bot>
        </div>
        <div v-if="homeInfo.middle_bot">
            <home-middle-bots class="home-middle-bots" :data="homeInfo.middle_bot"></home-middle-bots>
        </div>
        <div class="home-middle-botss" v-if="homeInfo">
            <span>{{homeInfo.rename}}</span>
            <home-middle-botss :data="homeInfo.reimg"></home-middle-botss>
        </div>
    </div>
</template>

<script>
    import header from "../components/home/home-header"
    import top from "../components/home/home-top"
    import middle from "../components/home/home-middle"
    import mbot from "../components/home/home-middle-bot"
    import mbots from "../components/home/home-middle-bots"
    import mbotss from "../components/home/home-middle-botss"

    import homeApi from '../apis/homeApi'
    export default {
        name: "home",
        components:{
            "home-header":header,
            "home-top":top,
            "home-middle":middle,
            "home-middle-bot":mbot,
            "home-middle-bots":mbots,
            "home-middle-botss":mbotss
        },
        data () {
            return {
                flag: true,
                homeInfo: [], // 页面的数据模型,
                flag1:"home-top"
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
