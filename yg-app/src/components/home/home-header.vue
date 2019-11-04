<template>
    <div class="home-head">
        <p></p><input type="text" :value="val"><p>消息</p>
    </div>
</template>

<script>
    export default {
        name: "home-header",
        data(){
            return{
                val:"11.11提前购 抢370元优惠券"
            }
        }
    }
</script>

<style scoped>

</style>
