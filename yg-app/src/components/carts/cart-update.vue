<template>
    <div class="update">
        <p class="reduc" @click="reduce">一</p>{{num}}<p class="add" @click="add"></p>
    </div>
</template>

<script>
    export default {
        name: "cart-update",
        data(){
            return{
                num:1
            }
        },
        methods:{
            add(){
                this.num++;
            },
            reduce(){
                if(this.num>1){
                    this.num--;
                }
            },

        }
    }
</script>

<style scoped>
.update{
    width: 1.1rem;
    font-size: 0.15rem;
    border-radius: 0.05rem 0.05rem;
    font-weight: bold;
    line-height: 0.25rem;
    display: flex;
    justify-content: space-between;
    height: 0.25rem;
    border: 0.02rem solid gainsboro;
}
.update>p{
    width: 0.3rem;
    border-radius: 0.05rem 0.05rem;
    height: 0.25rem;
    text-align: center;
    background-color: gainsboro;
}
.update>p:nth-child(2){
    background-image: url("../../assets/images/cart/addN.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position:center center;
}
</style>
