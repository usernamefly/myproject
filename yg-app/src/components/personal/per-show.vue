<template>
    <div class="per-show">
        <img class="Head-portrait" src="../../assets/images/my/user.png">
        <p class="per-vip">{{number}}<br/><span>{{vip}}</span></p>
        <img class="per-information" src="../../assets/images/my/information-small.png">
        <p class="per-account">账户管理 ></p>
    </div>
</template>

<script>
    export default {
        name: "per-show",
        data(){
            return{
                number:12345678901,
                vip:"普通会员"
            }
        }
    }
</script>

<style scoped>
    .per-vip{
        width: 1.5rem;
        height: 0.6rem;
        font-size: 0.18rem;
        color: white;
        margin-top: 0.15rem;
    }
    .per-vip>span{
        font-size: 0.14rem;
        margin-top: 0.1rem;
        border-radius: 0.1rem 0.1rem;
        display: inline-block;
        padding: 0.03rem 0.1rem;
        color: rgb(230,230,230);
        background-color: rgba(189,35,2,1);
    }
.per-show{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 0.9rem;
    background-image: url("../../assets/images/my/top-backgroundc.jpg");
    background-size:100%;
}
    .Head-portrait{
        height: 60%;
        margin: 0.13rem 0.1rem 0.2rem 0.1rem;
    }
    .per-information{
        height: 25%;
        margin-top: 0.15rem;
        margin-left: 1.15rem;
    }
    .per-account{
        position: absolute;
        top: 0.6rem;
        left: 2.85rem;
        font-size: 0.15rem;
        color: white;
    }
</style>
