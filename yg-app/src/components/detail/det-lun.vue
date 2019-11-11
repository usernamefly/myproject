<template>
    <div class="det-sli" @click.self="change1">
        <img :src="item1">
        <ul class="det-doc">
            <li  v-for="(item,index) in images" :key="index"  @click="change(index,item)"  :class="{active:index===number}"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "det-lun",
        data(){
            return{
                number:0,
                item1:"http://39.107.245.176/images/detail/101002518_01_l.jpg",
                images:[
                    "http://39.107.245.176/images/detail/101002518_01_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_02_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_03_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_04_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_05_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_06_l.jpg",
                    "http://39.107.245.176/images/detail/101002518_07_l.jpg"]
            }
        },
        methods:{
            change:function(index,item){
                this.number=index;
                this.item1=item;
            },
            change1:function(){
                if(this.number>6){
                    this.number=0
                }
                this.number++;
                this.item1.next();
            }
        },
        mounted() {
            /*setInterval(this.change,10000);*/
        }
    }
</script>

<style scoped>
    .det-doc>.active{
        background-color:red;
    }
.det-sli{
    background-color: white;
    position: relative;
    width: 100%;
    height: 2rem;
    border-bottom: 0.01rem solid gainsboro;
}
    .det-doc{
        width: 1rem;
        height: 0.1rem;
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 1.85rem;
        left: 1.4rem;
    }
    .det-sli>img{
        width: 50%;
        position: absolute;
        bottom: 0.1rem;
        left: 0.95rem;
    }
.det-doc>li{
    background-color: rgb(160,160,160);
    width: 0.09rem;
    height: 0.09rem;
    border-radius: 50%;
}
</style>
