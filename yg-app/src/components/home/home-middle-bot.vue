<template>
    <div v-if="data">
        <img :key="pic" v-for="pic in data" :src="pic">
    </div>
</template>

<script>
    export default {
        name: "home-middle-bot",
        props:["data"]
    }
</script>

<style scoped>

</style>
