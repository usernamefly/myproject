<template>
    <div class="bot-yin" :style="display="+sa+">
        <div class="cla-head-bot">
            <a href="#/main">首页</a>
            <a href="#/cla">分类</a>
            <a href="#/cart">购物车</a>
            <a href="#/personal">我的优购</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cla-head-bot",
        data(){
            sa:"none"
        }
    }
</script>

<style scoped>
    .bot-yin{
        display: none;
    }
.cla-head-bot{
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #666666;
}
.cla-head-bot>a{
    height: 0.5rem;
    box-sizing: border-box;
    color: #fff;
    padding-top: 0.3rem;
    font-size: 0.15rem;
    background-repeat: no-repeat;
    text-decoration: none;
}
.cla-head-bot>a:nth-child(1){
    background-image: url("../../assets/images/calssasion/homec.png");
    background-size: 70%;
    background-position: 0.04rem 0.08rem;
}
.cla-head-bot>a:nth-child(2){
    background-image: url("../../assets/images/calssasion/class.png");
    background-size: 60%;
    background-position: 0.05rem 0.081rem;
}
.cla-head-bot>a:nth-child(3){
    background-image: url("../../assets/images/calssasion/ico-shopcartc.png");
    background-size: 45%;
    background-position: 0.06rem 0.07rem;
}
.cla-head-bot>a:nth-child(4){
    background-image: url("../../assets/images/calssasion/ico-personc.png");
    background-size: 40%;
    background-position: 0.17rem 0.05rem;
}
</style>
