<template>
    <div class="cla-head">
        <img @click="before" src="../../assets/images/calssasion/new-back.png"><input type="text" value="请输入关键字">
        <img @click="show" src="../../assets/images/calssasion/ico-menu.png">
    </div>
</template>

<script>
    export default {
        name: "cla-head",
        methods:{
            before(){
                this.$router.push("/");
            },
            show(){

            }
        }
    }
</script>

<style scoped>
    .cla-head{
        width: 100%;
        height: 0.45rem;
        background-color: rgb(248,248,248);
        position: fixed;
        top: 0;
        display: flex;
    }
    .cla-head>input{
        width: 2.67rem;
        margin-left: 0.2rem;
        padding-left: 0.1rem;
        background-image: url("../../assets/images/calssasion/ygseach.png");
        background-position: 2.3rem 0.05rem;
        background-size: 6%;
        background-repeat: no-repeat;
        box-sizing: border-box;
        height: 0.3rem;
        border: 0.015rem solid gainsboro;
        margin-top: 0.07rem;
        color: gray;
    }
    .cla-head>img:nth-child(1){
        width: 0.1rem;
        height: 0.2rem;
        margin-top: 0.13rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }
    .cla-head>img:nth-child(3){
        width: 0.23rem;
        height: 0.2rem;
        margin-left: 0.26rem;
        margin-top: 0.12rem;
    }
</style>
