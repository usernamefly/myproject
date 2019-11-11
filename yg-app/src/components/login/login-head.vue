<template>
    <div class="cart-head">
        <img @click="before" src="../../assets/images/calssasion/new-back.png">
        <p class="cart-head-p">登录</p>
    </div>
</template>

<script>

    export default {
        name: "login-head",
        methods:{
            before(){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .cart-head{
        width: 100%;
        height: 0.45rem;
        background-color: rgb(248,248,248);
        display: flex;
        margin-bottom: 0.15rem;
    }
    .cart-head>img:nth-child(1){
        width: 0.1rem;
        height: 0.2rem;
        margin-top: 0.13rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }
    .cart-head-p{
        font-size: 0.2rem;
        padding-left: 1.4rem;
        line-height: 0.45rem;
        margin-right: 0.9rem;
    }
</style>
