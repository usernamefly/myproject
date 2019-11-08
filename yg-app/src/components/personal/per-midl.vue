<template>
    <div class="per-mid">
        <div class="per-mid-con">
            <p><img src="../../assets/images/my/member.png"><br/>用户中心</p>
            <p><img src="../../assets/images/my/integration.png"><br/>积分商城</p>
            <p><img src="../../assets/images/my/past.png"><br/>每日签到</p>
            <p><img src="../../assets/images/my/service.png"><br/>联系客服</p>
        </div>
        <div class="per-mid-con">
            <p><img src="../../assets/images/my/collection.png"><br/>收藏/关注</p>
            <p><img src="../../assets/images/my/help.png"><br/>帮助中心</p>
            <p><img src="../../assets/images/my/suguession.png"><br/>意见反馈</p>
            <p></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "per-midl"
    }
</script>

<style scoped>
.per-mid-con{
    width: 100%;
    display: flex;
    font-size: 0.13rem;
    color: gray;
    box-sizing: border-box;
    justify-content:space-around;
    height: 0.8rem;
    padding:0.1rem;
    background-color: white;
    margin-bottom: 0.1rem;
}
.per-mid-con img{
    width: 0.25rem;
    height: 0.25rem;
    margin-bottom: 0.1rem;
}
.per-mid-con>p{
    width: 25%;
    text-align: center;
}
</style>
