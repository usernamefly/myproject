<template>
    <div class="yg-foot">
        <a href="#/main/"><img src="../../assets/images/home/toolbar_home_selected.png" ><br/>首页</a>
        <a href="#/main/cla"><img src="../../assets/images/home/toolbar_categories_normal.png" ><br/>分类</a>
        <a href="#/main/fou"><img src="../../assets/images/home/toolbar_discover_normal.png" ><br/>发现</a>
        <a href="#/main/cart"><img src="../../assets/images/home/toolbar_shopcar_normal.png" ><br/>购物车</a>
        <a href="#/main/personal"><img src="../../assets/images/home/toolbar_personal_normal.png" ><br/>我的</a>
    </div>
</template>

<script>
    export default {
        name: "yg-foot"
    }
</script>

<style scoped>
.yg-foot{
    width: 100%;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    border-top: 0.01rem solid gainsboro;
    position: fixed;
    bottom: 0;
    padding: 0.1rem 0.1rem 0.05rem;
}
.yg-foot>a {
    width: 20%;
    text-align: center;
    font-size: 0.13rem;
    text-decoration: none;
    color: dimgray;
}
.yg-foot>a>img{
    width: 0.2rem;

}
</style>
