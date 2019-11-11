<template>
    <div class="det-mao">
        <p>秒杀</p><p class="mao-r">距结束仅剩 <span>11</span>：<span>11</span>：<span>11</span></p>
    </div>
</template>

<script>
    export default {
        name: "det-miao"
    }
</script>

<style scoped>
.det-mao{
    background-color: white;
    display: flex;
    position: relative;
    justify-content: space-between;
}
.det-mao>.mao-r{
    font-size:0.14rem ;
    color: white;
    height: 0.5rem;
    width: 72%;
    position: absolute;
    right: 0;
    line-height: 0.5rem;
    text-align: right;
    padding-right: 0.1rem;
    box-sizing: border-box;
    background-image: url("../../assets/images/detailshengjiabu/pop_btn.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.mao-r>span{
    background-color: rgb(128,26,1);
    padding: 0.004rem 0.05rem;
    border-radius: 0.05rem 0.05rem;
}
    .det-mao>p:nth-child(1){
        width: 30%;
        color: red;
        z-index: 2;
        position: absolute;
        top: -0.06rem;
        height: 0.555rem;
        font-size: 0.2rem;
       padding-left: 0.3rem;
        font-weight: 600;
        box-sizing: border-box;
        line-height: 0.5rem;
        background-image: url("../../assets/images/detailshengjiabu/countdownt.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-bottom: 0.01rem solid gainsboro;
    }
</style>
