<template>
    <div class="det-sel">
         <p><span>已选 {{color}}/{{size}}</span><img :src="pic" alt=""></p>
    </div>
</template>

<script>
    export default {
        name: "det-sele",
        data(){
            return{
                color:"黑色",
                size:"尺码",
                pic:"http://39.107.245.176/images/detail/open.png"
            }
        }
    }
</script>

<style scoped>
.det-sel{
    margin: 0.1rem 0;
    background-color: white;
    font-size: 0.14rem;
    height: 0.5rem;
    line-height: 0.5rem;
}
.det-sel>p{
    display: flex;
    padding: 0 0.1rem;
    box-sizing: border-box;
    justify-content: space-between;
}
.det-sel>p>img{
    height: 0.14rem;
    margin-top: 0.18rem;
}
</style>
