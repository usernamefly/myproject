<template>
    <div>
        <cla-head></cla-head>
        <cla-head-bot></cla-head-bot>
    </div>
</template>

<script>
    import head from '../components/classification/cla-head'
    import headb from '../components/classification/cla-head-bot'
    export default {
        name: "classification",
        components:{
            "cla-head":head,
            "cla-head-bot":headb
        }
    }
</script>

<style scoped>
   /* @import "../assets/css/cla.css";*/
</style>
