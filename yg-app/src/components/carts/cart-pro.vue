<template>
    <div v-if="data">
        <div class="cart-pro" v-for="(val,index) in data" :key="index">
            <div class="sigsl">
                <cart-sigsel ></cart-sigsel>
            </div>
            <cart-rig class="cart-right" :val="val" :index="index"></cart-rig>
        </div>
    </div>

</template>

<script>
    import sigsel from "./cart-select"
   import pro from "./product-de"
    export default {
        name: "cart-pro",
        props:["data"],
        components:{
           "cart-sigsel":sigsel,
           "cart-rig":pro
        },
        /*beforeMount() {
            console.log(this.data);
        }*/
    }
</script>

<style scoped>
.cart-pro{
    width: 100%;
    height: 1.8rem;
    display: flex;
    font-size: 0.13rem;
    border-bottom: 0.01rem solid gainsboro;
    background-color: white;
}
    .sigsl{
        height: 100%;
        width: 0.5rem;
        padding: 0.8rem 0.15rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
.cart-right{
    width: 3.25rem;
}
</style>
