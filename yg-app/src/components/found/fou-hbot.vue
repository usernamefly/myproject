<template>
    <div class="fou-hbot">
        <span></span>时尚风向标<span></span>
    </div>
</template>

<script>
    export default {
        name: "fou-hbot"
    }
</script>

<style scoped>
.fou-hbot{
    width: 100%;
    height: 0.45rem;
    line-height:0.45rem;
    font-size: 0.15rem;
    text-align: center;
    background-color: rgb(238,238,238);
}
.fou-hbot span{
    display: inline-block;
    border: 0.007rem solid gainsboro;
    width: 0.5rem;
    margin: 0 0.1rem;
    top: -0.05rem;
    position: relative;
    background-color: gray;
}
</style>
