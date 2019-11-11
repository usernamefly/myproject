<template>
    <div class="log-phone">
        <p><input type="text" :placeholder="phone"><span>获取验证码</span></p>
        <p><input type="text" :placeholder="VerificationCode"></p>
        <slot name="but"></slot>
        <div class="log-new">新会员限时惊喜 首次登录送百元礼包</div>
    </div>
</template>

<script>
    export default {
        name: "logins",
        data(){
            return{
                phone:"手机号",
                VerificationCode:'请输入验证码'
            }
        }
    }
</script>

<style scoped>
.log-phone{
    width: 90%;
    margin: 0 auto;
    font-size: 0.14rem;
}
.log-new{
    font-size: 0.13rem;
    width: 90%;
    color: red;
    margin: 0 auto;
    text-align: center;
}
.log-phone>p{
    width: 100%;
    height: 0.45rem;
    border-bottom: 0.01rem solid gainsboro;
}
.log-phone>p>input{
    border: none;
    outline: none;
    line-height: 0.45rem;
}
.log-phone>p:nth-child(1){
    width: 100%;
    margin-top:0.1rem;
    margin-bottom: 0.01rem;
    display: flex;
    justify-content: space-between;
}
.log-phone>p:nth-child(1)>input{
    width: 70%;
}
.log-phone>p:nth-child(1)>span{
    display: inline-block;
    width: 1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-left: 0.01rem solid gainsboro;
}
.log-phone>p:nth-child(2)>input{
    height: 0.4rem;
    width: 100%;
}
</style>
