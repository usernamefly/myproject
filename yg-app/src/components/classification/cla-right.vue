<template>
    <div class="cla-right" v-if="data2">
        <p class="fill"></p>
        <div v-for="(val,index) in data2" :key="index">
            <p class="cla-right-title">{{val.title}}</p>
            <p class="cla-right-con" v-for="(key,index1) in val.con" :key="index1">
                <img :src="key.pic"><br/>
                <span><a href="#/baili">{{key.xpai}}</a></span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cla-right",
        props:["data2"]
    }
</script>

<style scoped>

</style>
