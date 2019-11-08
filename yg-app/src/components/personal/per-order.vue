<template>
    <div class="per-order">
        <p>我的订单 <span>全部订单</span><img src="../../assets/images/my/gray-open.png"></p>
        <div class="per-order-con">
            <p><img src="../../assets/images/my/pay.png"><br/>待付款</p>
            <p><img src="../../assets/images/my/logistics.png"><br/>查看物流</p>
            <p><img src="../../assets/images/my/evaluate.png"><br/>待评价</p>
        </div>
        <p>我的钱包</p>
        <div class="per-order-con">
            <p>0<br/><br/>礼品卡</p>
            <p>0<br/><br/>优惠券</p>
            <p>100<br/><br/>积分</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "per-order"
    }
</script>

<style scoped>
.per-order>p{
    position: relative;
    font-size: 0.15rem;
    height: 0.45rem;
    line-height: 0.45rem;
    padding: 0 0.1rem 0 0.2rem;
    background-color: white;
}
.per-order>p>span{
    margin-left: 2rem;
    font-size: 0.13rem;
    color: gray;
}
.per-order>p>img{
    height: 0.15rem;
    position: absolute;
    right: 0.18rem;
    top: 0.14rem;
}
    .per-order-con{
        display: flex;
        height: 0.8rem;
        background-color: white;
        margin-top: 0.02rem;
        font-size: 0.13rem;
        padding-top: 0.15rem;
        box-sizing: border-box;
        color: gray;
        margin-bottom: 0.08rem;
    }
.per-order-con>p{
    flex: 1;
    text-align: center;
}
.per-order-con img{
    width: 0.28rem;
    margin-bottom: 0.1rem;
}
</style>
