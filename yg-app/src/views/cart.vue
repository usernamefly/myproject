<template>
    <div v-if="cartInfo">
        <cart-head></cart-head>
        <cart-dos></cart-dos>
        <cart-con class="cart-con" :data="cartInfo.con"></cart-con>
        <cart-foot :data="cartInfo.foot"></cart-foot>
    </div>
</template>

<script>
    import head from '../components/carts/cart-head'
    import con from '../components/carts/cart-con'
    import hb from '../components/commons/cla-head-bot'
    import foot from '../components/carts/cart-foot'
    import cartApi from '../apis/cartApi'
    export default {
        name: "cart",
        data(){
          return{
              cartInfo:{}
          }
        },
        components:{
            "cart-con":con,
            "cart-head":head,
            "cart-dos":hb,
            "cart-foot":foot
        },
        methods:{
            async _initCartInfo(){
                let data=await cartApi.getCartInfoByUserId();
                this.cartInfo=data;
                /*console.log(this.cartInfo);*/
            }
        },
        beforeMount() {
            this._initCartInfo();
        }
    }
</script>

<style scoped>

</style>
