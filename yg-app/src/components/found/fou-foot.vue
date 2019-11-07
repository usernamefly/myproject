<template>
    <div class="fou-foot">
        <div class="fou-foot-bot">
            <p>11.11提前购 抢370元券</p>
            <img src="../../assets/images/found/1572501430941.jpg">
            <p>鞋类:无限制30、358-60、598-130优惠券 运动:299-20、499-50、799-80优惠券</p>
        </div>
        <div class="fou-foot-bot">
            <p>秋冬穿搭法则再差的身材一双靴子就能拯救</p>
            <img src="../../assets/images/found/1543375837774.jpg">
            <p>2018.11.28</p>
        </div>
        <div class="fou-foot-bot">
            <p>【更新】年末轰趴吸睛穿搭|8套礼盒一键搞定！</p>
            <img src="../../assets/images/found/1545794198391.gif">
            <p>2018.12.26</p>
        </div>
        <div class="fou-foot-bot">
            <p>刘雯、鹿晗、王嘉尔、青春同款原来都在这里</p>
            <img src="../../assets/images/found/1541495279892.jpg">
            <p>2018.11.8</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fou-foot"
    }
</script>

<style scoped>
.fou-foot{
    width: 100%;
    background-color: rgb(238,238,238);
}
.fou-foot-bot{
    background-color:white;
    width: 100%;
    height: 2.7rem;
    padding: 0 0.2rem 0.1rem;
    font-size: 0.15rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
}
.fou-foot-bot>img{
    width: 100%;
}
.fou-foot-bot>p:nth-child(1){
    color: dimgray;
    height: 0.45rem;
    line-height: 0.5rem;
}
.fou-foot-bot>p:nth-child(3){
    color: dimgray;
    font-size: 0.14rem;
    height: 0.5rem;
    padding:0.05rem 0;
    color: rgb(150,150,150);
 }

</style>
