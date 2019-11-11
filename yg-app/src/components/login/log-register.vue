<template>
<div class="log-account">
    <p  @click="pass2"><input type="text" :placeholder="email" ><span :style="styleObj1"></span></p>
    <p @click="pass1"><input  class="log-pass" type="password" :placeholder="pass" ><span :style="styleObj1"></span></p>
    <slot name="but"></slot>
    <div class="log-new">忘记密码</div>
</div>
</template>

<script>
    export default {
        name: "log-register",
        data(){
            return{
                email:"手机号/邮箱",
                pass:"密码",
                styleObj:{display:'none'},
                styleObj1:{display:'none'}
            }
        },
        methods:{
            pass2(){
                if(this.styleObj.display=="block"){
                    this.styleObj.display="none";
                    this.styleObj1.display="block";
                }
            },
            pass1(){
                if(this.styleObj1.display=="block"){
                    this.styleObj1.display="none";
                    this.styleObj.display="block";
                }
            }
        }
    }
</script>

<style scoped>
.log-account{
    font-size: 0.13rem;
    width: 90%;
    height: 0.4rem;
    margin: 0.1rem auto;
}
.log-new{
    font-size: 0.13rem;
    width: 90%;
    margin: 0 auto;
    text-align: right;
}
.log-account>p>input {
    width: 90%;
    outline: none;
    height: 0.4rem;
    color: gainsboro;
    line-height: 0.45rem;
    border: none;
}
.log-account>p>span{
    display: inline-block;
    position: absolute;
    top: 0.1rem;
    right: 0.6rem;
    width: 0.15rem;
    height: 0.15rem;
    background-color: gray;
    background-image: url("../../assets/images/my/close__Down.png");
    border-radius: 50%;
    background-position: center center;
    background-size: 60%;
    background-repeat: no-repeat;
}
.log-account>p{
    position: relative;
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    border-bottom: 0.01rem solid gainsboro;
}
.log-account>p:nth-child(2)>.log-pass{
    background-image: url("../../assets/images/login/black.png");
    background-repeat: no-repeat;
    background-size: 0.2rem;
   background-position:3rem center;
    width: 100%;
}
</style>
