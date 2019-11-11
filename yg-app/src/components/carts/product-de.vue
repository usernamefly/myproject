<template>
    <div class="cart-pro-right">
        <p>{{val.desc}}</p>
        <div class="cart-img">
            <p><img :src="val.pic"><span v-if="index==3||index==2">秒杀</span></p>
            <div class="cart-desc">
                <p>颜色：{{val.color}} <span>￥{{val.price}}</span></p>
                <p>尺码：{{val.size}}</p>
                <p>发货：{{val.express1}}</p>
                <p><cart-upd></cart-upd><img src="../../assets/images/cart/del.png"></p>
                <p class="cyin" v-if="index==0">仅剩1件<img src="../../assets/images/cart/arrowu.png"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import update from "./cart-update"
    export default {
        name: "product-de",
        props:["val","index"],
        components:{
            "cart-upd":update
        },
    }
</script>

<style scoped>
    .cart-desc>p:nth-child(1){
        width: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .cyin{
        width: 1.13rem;
        height: 0.25rem;
        border-radius: 0.05rem 0.05rem;
        background-color: red;
        color: white;
        text-align: center;
        position: relative;
        margin-top: 0.1rem;
        line-height: 0.25rem;
    }
    .cart-desc>.cyin>img{
        position: absolute;
        top: -0.1rem;
        left: 0.5rem;
    }
    .cart-desc>p>img{
        position: absolute;
        top: 0.75rem;
        left: 1.7rem;
        width: 0.2rem;
    }
    .cart-pro-right>p{
        width: 100%;
        font-size: 0.14rem;
        margin-top: 0.12rem;
        margin-bottom: 0.02rem;
    }
    .cart-img{
        width:100%;
        justify-content: start;
        display: flex;
    }
    .cart-desc>p>span{
        float: right;
        font-size: 0.16rem;
    }
    .cart-img>p{
        position: relative;
    }
    .cart-img>p>img{
        width: 1rem;
        height: 1rem;
        margin: 0.1rem 0.1rem  0.14rem 0rem;
        border: 0.01rem solid gainsboro;
    }
    .cart-img>p>span{
        display: inline-block;
        padding: 0.01rem 0.02rem;
        color: white;
        font-size: 0.1rem;
        background-color: red;
        position: absolute;
        top: 0.11rem;
        right: 0.11rem;
    }
    .cart-desc{
        position: relative;
        color: gray;
        line-height: 0.22rem;
        margin-top: 0.15rem;
    }
</style>
