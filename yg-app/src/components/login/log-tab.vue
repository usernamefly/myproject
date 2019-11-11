<template>
    <div >
        <div class="login-tab">
            <a href="#/login/logins" tag="p" @click="Phone" :class="{active:flag}">手机号快捷登录</a>
            <a href="#/login/logregister" tag="p" @click="Phone1" :class="{active:flag1}">账号密码登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log-tab",
        data(){
            return{
                flag:true,
                flag1:false,
            }
        },
        methods:{
            Phone(){
                if(this.flag1==true){
                    this.flag1=false;
                    this.flag=true;
                }
            },
            Phone1(){
                if(this.flag==true){
                    this.flag=false;
                    this.flag1=true
                }
            }
        }
    }
</script>

<style scoped>
.login-tab>.active{
    color: red;
    border-bottom: 0.01rem solid red;
}
.login-tab{
    display:flex;
    justify-content: center;
    font-size: 0.15rem;
    height: 0.5rem;
    width: 90%;
    margin: 0 auto;
    line-height: 0.5rem;
    border-bottom: 0.01rem solid gainsboro;
}
.login-tab>p{

}
.login-tab>a{
    display: inline-block;
    color: gray;
    text-decoration: none;
    width: 50%;
    text-align: center;
}
</style>
