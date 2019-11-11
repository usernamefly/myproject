<template>
<div v-if="data">
    <div class="cart-fo"  v-for="(val,index) in data" :key="index">
        <p class="cart-allsel"><cart-selt class="asel"></cart-selt> 全部</p>
        <div>
            <p class="totalPrice">总计：<b>￥{{val.totalprice}}</b> <span>(不含运费)</span></p>
            <p class="mit">节省：￥{{val.mit}}</p>
        </div>
        <p class="settlement">去结算({{val.tnum}})</p>
    </div>
</div>

</template>

<script>
    import selt from "./cart-select"
    export default {
        name: "cart-foot",
        props:["data"],
        components:{
            "cart-selt":selt
        }
    }
</script>

<style scoped>
.cart-fo{
    width: 100%;
    height: 0.5rem;
    font-size: 0.15rem;
    background-color: rgb(248,248,248);
   /* position: fixed;*/
    margin-top:-0.6rem;
    justify-content: space-between;
    bottom: 0;
    display: flex;
    margin-bottom: 0.5rem;
}
    .cart-allsel{
        width: 0.6rem;
        display: flex;
        line-height: 0.5rem;
        padding-left: 0.1rem;
    }
    .cart-allsel>.asel{
        margin-right: 0.04rem;
        margin-top: 0.13rem;
    }
    .totalPrice{
        width: 1.5rem;
        margin-top: 0.05rem;
        font-size: 0.13rem;
    }
.totalPrice>b{
    color: red;
    font-size: 0.15rem;
}
.totalPrice>span{
    font-size: 0.1rem;
}
    .mit{
        font-size: 0.13rem;
        margin-left: 0.5rem;
        margin-top: 0.02rem;
    }
    .settlement{
        width: 1rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        background-color: red;
        color: white;
        font-size: 0.15rem;
    }
</style>
