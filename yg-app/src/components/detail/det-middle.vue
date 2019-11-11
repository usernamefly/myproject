<template>
<div class="det-mid">
    <p><img :src="pic" >{{brand}}</p><img :src="pic1" >
</div>
</template>

<script>
    export default {
        name: "det-middle",
        data(){
            return{
                "pic":"http://39.107.245.176/images/detail/skap506750676.jpg",
                "pic1":"http://39.107.245.176/images/detail/open.png",
                "brand":"圣伽步  百丽优购",
                "msg":"喜欢此商品的人还买了"
            }
        }
    }
</script>

<style scoped>
.det-mid{
    height: 0.5rem;
    padding-right: 0.117rem;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    font-size: 0.13rem;
    border-bottom: 0.01rem solid gainsboro;
}
.det-mid>p{
    padding-left: 0.15rem;
    padding-top: 0.11rem;
    display: flex;
    width: 1.2rem;
}
.det-mid>p>img{
    height: 0.27rem;
    width: 0.6rem;
    border: 0.01rem solid gainsboro;
}
.det-mid>img,
.det-mid>div>img{
    margin-top: 0.18rem;
    height: 0.13rem;
}
.det-mid>div{
    display: flex;
    justify-content: space-between;
    line-height: 0.5rem;
    width: 100%;
    background-color: white;
    padding-top: 0.05rem;
    box-sizing: border-box;
    padding-left: 0.1rem;
    height: 0.5rem;
    border-bottom: 0.01rem solid gainsboro;
}
</style>
]
