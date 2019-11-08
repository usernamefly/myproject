<template>
    <div class="cart-title">
        <cart-sel class="asel"></cart-sel>百丽优购
    </div>
</template>

<script>
    import inp from './cart-select';
    export default {
        name: "cart-title",
        components:{
            "cart-sel":inp
        }
    }
</script>

<style scoped>
.cart-title{
    display: flex;
    width: 100%;
    height: 0.5rem;
    font-size: 0.17rem;
    line-height: 0.5rem;
    color: dimgray;
    background-color: rgb(245,245,245);
}
    .asel{
        margin: 0.14rem 0.14rem;
    }
</style>
