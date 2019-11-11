<template>
<div class="det-desc">
    <p>{{desc}}</p>
    <div><p>￥{{price}} <span>￥{{pricz}}</span></p><span>{{no}}</span></div>
</div>
</template>

<script>
    export default {
        name: "det-miao-bot",
        data(){
            return{
                desc:"SKAP/圣伽步2018春夏专柜同款黑色牛皮商务男皮单鞋20812821",
                price:470,
                pricz:1598,
                no:"不可用优惠券"
            }
        }
    }
</script>

<style scoped>
.det-desc{
    font-size: 0.15rem;
    color: dimgray;
    background-color: white;
    padding: 0.1rem;
    margin-top: 0.5rem;
}
.det-desc>p{
    width: 88%;
}
.det-desc>div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;
}
.det-desc>div span{
    color: darkgray;
    font-size: 0.13rem;
}
.det-desc>div span:nth-child(1){
    text-decoration: line-through;
    font-weight: 200;
}
.det-desc>div span:nth-child(2){
    padding-top: 0.1rem;
}
.det-desc>div>p{
    color: red;
    font-weight: bold;
    font-size: 0.25rem;
}
</style>
