<template>
    <div class="fou-foot" v-if="data">
        <div class="fou-foot-bot" v-for="(val,index) in data" :key="index">
            <p>{{val.title}}</p>
            <img :src="val.pic">
            <p>{{val.desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fou-foot",
        props:["data"]
    }
</script>

<style scoped>
.fou-foot{
    width: 100%;
    background-color: rgb(238,238,238);
    margin-bottom: 0.5rem;
}
.fou-foot-bot{
    background-color:white;
    width: 100%;
    height: 2.7rem;
    padding: 0 0.2rem 0.1rem;
    font-size: 0.15rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
}
.fou-foot-bot>img{
    width: 100%;
}
.fou-foot-bot>p:nth-child(1){
    color: dimgray;
    height: 0.45rem;
    line-height: 0.5rem;
}
.fou-foot-bot>p:nth-child(3){
    color: dimgray;
    font-size: 0.14rem;
    height: 0.5rem;
    padding:0.05rem 0;
    color: rgb(150,150,150);
 }
</style>
