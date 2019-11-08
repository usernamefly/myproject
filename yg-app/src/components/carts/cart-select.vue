<template>
    <div class="cart-asel" @click="sel" :style="bg"></div>
</template>

<script>
    export default {
        name: "cart-select",
        data(){
          return {
              bg:''
          }
        },
        methods:{
            sel(){
                if(this.bg==''){
                    this.bg='background:url("../../assets/images/cart/roundcheck-fill.png")';
                }else {
                    this.bg='';
                }
            }
        }
    }
</script>

<style scoped>
.cart-asel{
    width: 0.2rem;
    height: 0.2rem;
    background:url("../../assets/images/cart/roundcheck-fill.png");
    border-radius: 50%;
    border: 0.01rem solid gray;
    background-size: 100%;
    background-position: center center;
}
</style>
