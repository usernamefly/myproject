<template>
    <div class="login-main">
        <log-head></log-head>
        <log-tab></log-tab>
        <router-view>
            <button class="log-solt" slot="but">登录</button>
        </router-view>
        <log-mid></log-mid>
    </div>
</template>

<script>
    import head from "../components/login/login-head"
    import tab from "../components/login/log-tab"
    import middle from "../components/login/log-mid"
    export default {
        name: "login",
        components:{
            "log-head":head,
            "log-tab":tab,
            "log-mid":middle
        }
    }
</script>

<style scoped>
.log-solt{
    width: 100%;
    margin-top: 0.4rem;
    height:0.45rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.17rem;
    margin-bottom: 0.1rem;
    color: white;
    background-color: rgb(153,153,153);
}
    .login-main{
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
