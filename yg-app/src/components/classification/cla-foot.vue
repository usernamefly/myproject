<template>
    <div class="cla-foot" v-if="data">
        <cla-left :data1="data.claleft"></cla-left>
        <cla-right :data2="data.claright"></cla-right>
    </div>
</template>

<script>
    import headl from './cla-left'
    import headr from './cla-right'
    export default {
        name: "foot",
        props:["data"],
        components:{
            "cla-left":headl,
            "cla-right":headr
        }
    }
</script>

<style scoped>

</style>
