<template>
    <div class="fou-head">
        <img @click="before" src="../../assets/images/calssasion/new-back.png">
        <p class="fou-head-p">发现 <span>登录</span></p>
        <img @click="show" src="../../assets/images/calssasion/ico-menu.png">
    </div>
</template>

<script>
    export default {
        name: "fou-head",
        methods:{
            before(){
                this.$router.push("/");
            },
            show(){
                this.$eventBus.$emit("bot","block");
                /*this.$store.dispatch('DIDOS','block');*/
            }
        }
    }
</script>

<style scoped>
.fou-head-p{
font-size: 0.2rem;
    padding-left: 1.3rem;
    line-height: 0.45rem;
}
.fou-head-p>span{
    font-size:0.13rem;
    margin-left: 0.83rem;
}
</style>
