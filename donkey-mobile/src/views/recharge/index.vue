<template>
    <div>
        <van-nav-bar @click-left="onClickLeft" :border="false" :class="{backnone:themeColor=='night'}" title="充值中心" left-arrow>
            <template #right>
                <img class="custum" src="../../assets/recharge/customer service.png" alt />
            </template>
        </van-nav-bar>
        <div class="channels" :class="{backnone:themeColor=='night'}">
            <div class="title-warp">
                <img  v-if="themeColor!='night'" src="../../assets/recharge/titlebg_day.png" alt />
                 <img  v-else src="../../assets/recharge/titlebg_night.png" alt />
                <div class="title"  :class="{'color-text':themeColor=='night'}"  >支付渠道</div>
            </div>
            <div class="items">
                <div class="item" v-for="(item,index) in list[themeColor]" :key="index" @click="changeChannel(index)">
                    <img :src="item" alt />
                    <img v-if="channelIndex ==index"  class="hover" src="../../assets/recharge/pre.png" alt />
                </div>
              
            </div>
        </div>

        <div class="channels" :class="{backnone:themeColor=='night'}" style="padding-bottom:10px">
            <div class="title-warp">
                <img  v-if="themeColor!='night'" src="../../assets/recharge/titlebg_day.png" alt />
                 <img  v-else src="../../assets/recharge/titlebg_night.png" alt />
                <div class="title" :class="{'color-text':themeColor=='night'}">充值金额</div>
            </div>
            <div class="items nomar-top flex-warp">
                <div class="item margin-t-10" v-for="(item,index) in moneys[channelIndex]" :key="index" @click="changeMoney(index)">
                    <img :src="require(`@/assets/recharge/money_${themeColor}_def.png`)" alt />
                    <div class="select-money" :class="{'gray-text':themeColor=='night'}" >
                      <img class="small-rmb" v-if="themeColor!='night'" src="../../assets/recharge/RMB small_day.png" alt="">
                      <img class="small-rmb" v-else src="../../assets/recharge/RMB small_night.png" alt="">
                        {{item}}元
                      </div>
                    <img v-if="moneyIndex ==index"  class="hover" src="../../assets/recharge/money pre.png" alt />
                </div>
              
            </div>
            <div class="input-warp"  :class="{'input-warp-night':themeColor=='night'}"  >
                  <img class="big-rmb" v-if="themeColor!='night'" src="../../assets/recharge/RMB big_day.png" alt="">
                      <img class="big-rmb" v-else src="../../assets/recharge/RMB big_night.png" alt="">
                      <van-field class="inputcell" placeholder="30-5000 充值比例 （1元 = 10驴币）" />
            </div>
        </div>

        <van-button class="confirmbtn" color="#6A6AF6" block round type="info">确定</van-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Recharge extends Vue {
    private themeColor: string = "";
    private channelIndex:number = 0
    private moneyIndex:number=0
    private list = {
        day: [
           require( "@/assets/recharge/alipay_day.png"),
            require("@/assets/recharge/wechat_day.png"),
            require("@/assets/recharge/bankcard_day.png")
        ],
        night: [
            require("@/assets/recharge/alipay_night.png"),
            require("@/assets/recharge/wechat_night.png"),
            require("@/assets/recharge/bankcard_night.png")
        ]
    };
    private moneys = [
     [ 100,200,300,500,1000,1500],
     [ 50,80,100,150,250,300],
      [ 500,800,1000,1500,2500,3000],
    ]
    created() {
        this.themeColor = this.$store.state.themeColor;
    }
    private onClickLeft(){
      this.$router.back()
    }
    private changeChannel(index:number){
      if(this.channelIndex!=index){
 this.channelIndex = index
      this.moneyIndex = 0
      }
     
    }
    private changeMoney(index:number){
this.moneyIndex = index
    }
}
</script>

<style>
.van-nav-bar__arrow{
  font-size: 22px;
}
.van-nav-bar__title{
  font-size: 18px;
}
.backnone{
  background: #1A191C !important;
}
.backnone .van-nav-bar__title{
  color: #616163;
  font-size: 18px;
}
.confirmbtn{
  height: 36px;
  width: 94%;
  margin: 0 auto;
  margin-top: 1.5rem;
}
.input-warp{
  background: #ECECF1;
  border-radius: 5px;
  padding: .4rem .5rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.color-text{
 background-image:-webkit-linear-gradient(bottom,#D549FF,#6B6AF6); 
    -webkit-background-clip:text; 
    -webkit-text-fill-color:transparent; 
}
.input-warp .van-cell {
    background: none;
    padding: 0;
}
.input-warp .van-cell input::-webkit-input-placeholder {
    color: #AFAFAF;
}


.input-warp-night{
  background: #3F3E42;
}
.input-warp-night input::-webkit-input-placeholder {
    color: #777777;
}
.inputcell{
 margin-left: 5px;
}
.items {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 10px;
}
.nomar-top{
  margin-top: 0;
}
.item {
    width: 30%;
    position: relative;
    display: flex;
    align-items: center;
    justify-items: center;
    font-weight: 600;
}
.item .hover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.small-rmb{
  width: .8rem;
   margin-right: 5px;
}
.big-rmb{
  width: 1.2rem;
  height: 1.2rem;
  flex: 1;
}
.flex-warp{
  flex-wrap: wrap;
  justify-content: space-between;
}
.margin-t-10{
  margin-top: 10px;
}
.select-money{
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.channels {
    padding: 0 0.8rem;
    margin-top: .5rem;
    background: #fff;
    padding-top: .7rem;
}
.custum {
    width: 1.5rem;
}
.title-warp {
    position: relative;
}
.title-warp > img {
    width: 4rem;
    height: 1.5rem;
}
.title-warp > .title {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
    font-weight: 600;
    word-break: keep-all;
}
.gray-text{
  color: #A0A0A1;
}
</style>