<template>
    <div class="log-mid">
        <p><span></span> 第三方平台登录 <span></span></p>
        <div class="log-mids">
            <img src="../../assets/images/login/QQ.png">
            <img src="../../assets/images/login/pay.png">
            <img src="../../assets/images/login/sina.png">
        </div>
        <p class="log-show">首次登录表示您同意 <a href="#login">优购会员注册协议</a></p>
        <div class="log-foot">
            <p>正品保障</p>
            <p>10天退货</p>
            <p>10天补差价</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log-mid"
    }
</script>

<style scoped>
    .log-foot{
        width: 80%;
        margin: 0.8rem auto 0rem;
        display: flex;
        font-size: 0.13rem;
        justify-content: space-around;
    }
    .log-foot>p{
        width: 35%;
        background-image: url("../../assets/images/login/ensure.png");
        background-repeat: no-repeat;
        background-size: 15%;
        background-position-x: 0.05rem;
    }
    .log-show{
        margin-top: 0.2rem;
    }
    .log-show>a{
        color: red;
    }
.log-mid{
    font-size: 0.12rem;
    width: 100%;
    margin: 0 auto;
    color: gray;
    position: absolute;
    text-align: center;
    top: 4.3rem;
}
.log-mid>p>span{
    display: inline-block;
    width: 1rem;
    border-top: 0.01rem solid gainsboro;
    position: relative;
    top: -0.02rem;
}
    .log-mids{
        width:2.4rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
.log-mids>img{
    width: 0.4rem;
    margin-top: 0.3rem;
}

</style>
