<template>
    <div class="bai-con" v-if="data">
        <img src="../../assets/images/baili/1572506374914.jpg">
        <a href="#/detail" class="bai-con-con" v-for="(val,index) in data" :key="index">
            <img :src="val.pic">
            <p class="abi-desc">{{val.desc}}</p>
            <p class="abi-price">{{val.price}}<span>{{val.price1}}</span></p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "bai-containear",
        props:["data"],
    }
</script>

<style scoped>
.bai-con{
    width: 100%;
    background-color: rgb(238,238,238);
    padding: 0.06rem 0.04rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
.bai-con-con{
    display: inline-block;
    width: 49%;
    color: black;
    text-decoration: none;
    font-size: 0.13rem;
    background-color: white;
    margin-bottom:0.08rem;
    padding: 0.06rem 0.05rem;
    box-sizing: border-box;
}
.bai-con>img{
    width: 49%;
    height: 2.83rem;
}
.abi-price{
    font-size: 0.16rem;
    color: red;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
}
.bai-con-con>img{
    width: 100%;
}
.abi-price>span{
    margin-left: 0.2rem;
    display: inline-block;
    width: 1rem;
    font-size: 0.12rem;
    background-image: url("../../assets/images/baili/ticketIcon.png");
    background-repeat: no-repeat;
    text-decoration: line-through;
    background-size: contain;
    background-position: 0.4rem 0;
    color: gray;
}
</style>
