<template>
    <div v-if="data">
        <img class="home-small-m"  v-for="bg in data" :key="bg" :src="bg">
    </div>
</template>

<script>
    export default {
        name: "home-middle",
        props:["data"],
    }
</script>

<style scoped>

</style>
