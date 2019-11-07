<template>
    <div class="cla-left" v-if="data1">
        <p class="isActive" @click="changeValue">全部品牌</p>
        <p class="noa" v-for="(val,index) in data1" :key="index">{{val}}</p>
    </div>
</template>

<script>
    export default {
        name: "cla-left",
        props:["data1"],
        data(){
            return {
                "index":false
            }
        },
        methods:{
            changeValue(){
                this.index=true;
            }
        }
    }
</script>

<style scoped>

</style>
