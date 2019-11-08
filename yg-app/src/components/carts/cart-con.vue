<template>
    <div class="cart-con" v-if="data">
        <p class="cart-fill"></p>
        <cart-title></cart-title>
        <cart-pro :data="data"></cart-pro>
        <p class="cart-fill1"></p>
    </div>
</template>

<script>
    import product from './cart-pro'
    import title from './cart-title'
    export default {
        name: "cart-con",
        props:["data"],
        components:{
            "cart-title":title,
            "cart-pro":product
        },
        beforeMount() {
            console.log(this.data);
        }
    }
</script>

<style scoped>

.cart-fill{
    width: 100%;
    height: 0.1rem;
    background-color: rgb(238,238,238);
}
.cart-fill1{
    width: 100%;
    background-color: rgb(238,238,238);
}
    .cart-con{
        margin-bottom: 0.7rem;
    }
</style>
