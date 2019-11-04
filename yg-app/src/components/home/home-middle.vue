<template>
    <div>
        <home-middle-s class="home-small-m"></home-middle-s>
        <home-middle-s class="home-small-m"></home-middle-s>
        <home-middle-s class="home-small-m"></home-middle-s>
        <home-middle-s class="home-small-m"></home-middle-s>

    </div>
</template>

<script>
    import middle from "./small-components/home-middle-s"
    export default {
        name: "home-middle",
        props:["n"],
        components:{
            "home-middle-s":middle,
        }
    }
</script>

<style scoped>

</style>
