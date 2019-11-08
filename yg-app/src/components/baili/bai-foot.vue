<template>
    <div class="bai-foot">
        <p>商品分类</p><p>品牌故事</p>
    </div>
</template>

<script>
    export default {
        name: "bai-foot"
    }
</script>

<style scoped>
.bai-foot{
    width: 100%;
    position: fixed;
    bottom: 0rem;
    line-height: 0.5rem;
    display: flex;
    justify-content: center;
    height: 0.5rem;
    background-color: white;
    font-size: 0.16rem;
    color: gray;
    border-top: 0.01rem solid gainsboro;
}
.bai-foot>p{
    height:0.5rem;
    width: 49%;
    text-align: center;
}
.bai-foot>p:nth-child(1){
    border-right: 0.01rem solid gainsboro;
}
</style>
