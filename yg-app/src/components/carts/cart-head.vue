<template>
    <div class="cart-head">
        <img @click="before" src="../../assets/images/calssasion/new-back.png">
        <p class="cart-head-p">购物车</p>
        <img @click="show" src="../../assets/images/calssasion/ico-menu.png">
    </div>
</template>

<script>
    export default {
        name: "cart-head",
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
    @import "../../assets/css/cart.css";
</style>
