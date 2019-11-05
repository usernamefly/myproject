<template>
    <div class="home-head">
        <p></p><input type="text" :value="vall"><p>消息</p>
    </div>
</template>

<script>
    export default {
        name: "home-header",
        props:["data"],
        data(){
            return{
                vall:"11.11提前购 抢370元优惠券",
            }
        },
        /*beforeMount() {
            console.log(data,tid);
        }*/
    }
</script>

<style scoped>

</style>
