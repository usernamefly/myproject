<template>
    <div class="per-foot">
        <div><span>12345678901 | <a href="#/login/logins">退出</a></span><span><span></span>电脑版 客户端 微信</span></div>
        <p>百丽国际旗下购物网站<br/>Copyright &copy; 2011-2018 优购 m.yougou.com</p>
    </div>
</template>

<script>
    export default {
        name: "per-foot"
    }
</script>

<style scoped>
.per-foot{
    text-align: center;
    color: rgb(100,100,100);
    width: 100%;
    padding:0.17rem 0.2rem;
    box-sizing: border-box;
    height: 1rem;
    background-color: rgb(234,234,234);
    font-size: 0.13rem;
    margin-top: -0.1rem;
    margin-bottom: 0.5rem;
}
.per-foot>div{
    display: flex;
    justify-content: space-between;
}
.per-foot>div>span>a{
    color: gray;
    text-decoration: none;
}
.per-foot>p{
    margin-top: 0.2rem;
    line-height: 0.2rem;
    color: gray;
}
</style>
