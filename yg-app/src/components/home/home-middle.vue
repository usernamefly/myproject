<template>
    <div v-if="data">
        <div class="home-small-m"  v-for="bg in data" :key="bg" :style="'background:url('+bg+') center center;background-size: 100%;'"></div>
    </div>
</template>

<script>
    export default {
        name: "home-middle",
        props:["data"]
    }
</script>

<style scoped>

</style>
