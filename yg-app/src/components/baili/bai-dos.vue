<template>
    <div class="bai-dos">
        <a class="bai-act" href="#/main/baili">综合</a><a href="#/main/baili">销量</a>
        <a href="#/main/baili">价格</a><a href="#main/biali">新品</a>
        <a href="#/main/baili">筛选</a>
    </div>
</template>

<script>
    export default {
        name: "bai-dos"
    }
</script>

<style scoped>
    .bai-dos{
        width: 100%;
        height: 0.35rem;
        line-height: 0.3rem;
        display: flex;
        justify-content: space-around;
    }
    .bai-dos>a{
        font-size: 0.13rem;
        color: gray;
        text-decoration: none;
    }
    .bai-act{
        color: red;
    }
    .bai-dos>a:nth-child(1){
        color: red;
    }
    .bai-dos>a:nth-child(3){
        background-image: url("../../assets/images/baili/gray.png");
        background-size: 23%;
        background-repeat: no-repeat;
        padding-right: 0.13rem;
        background-position: 0.26rem 0.1rem;
    }
    .bai-dos>a:nth-child(5){
        background-image: url("../../assets/images/baili/select.png");
        background-size: 26%;
        background-repeat: no-repeat;
        padding-right: 0.13rem;
        background-position: 0.26rem 0.1rem;
    }
</style>
