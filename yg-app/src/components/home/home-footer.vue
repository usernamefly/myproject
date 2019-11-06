<template>
    <div v-if="data_o" class="home-foot-p">
        <div  v-for="(bg,index) in data_o" :key="index" :style="'background:url('+bg.pic+') 0.04rem 0.05rem / 75% 50% ' +
         'no-repeat;padding-top:0.16rem'"><br/>{{bg.pic_name}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                bg:''
            }
        },
        name: "home-footer",
        props:["data_o"]
    }
</script>

<style scoped>
    .home-foot-p{
       width: 100%;
        height: 0.5rem;
        font-size: 0.13rem;
        text-align: center;
        border-bottom: 0.01rem solid gray;
        background-color: #f2f2f2;
        z-index: 2;
    }
</style>
