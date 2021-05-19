<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div  style="">
                    <div class="main history">
                        <div class="search">
                            <span class="title">两周报表</span>
                        </div>
                        <table class="list table mt" v-for="(week,index) in TwoWeekDataTable" :key="index">
                            <thead>
                                <tr>
                                    <th class="date">日期</th>
                                    <th class="count">注数</th>
                                    <th class="amount">下注金额</th>
                                    <th class="amount">有效金额</th>
                                    <th class="cm">佣金</th>
                                    <th class="dividend">盈亏</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="(item,index) in week.day" :key="index">
                                    <td clss="date" :class="today==item.date ? 'blue':''">
                                        <a href="bets?date=2020-11-30">{{item.date}} 
                                        <span v-if="item.weekDay==1">星期一</span>
                                        <span v-if="item.weekDay==2">星期二</span>
                                        <span v-if="item.weekDay==3">星期三</span>
                                        <span v-if="item.weekDay==4">星期四</span>
                                        <span v-if="item.weekDay==5">星期五</span>
                                        <span v-if="item.weekDay==6">星期六</span>
                                        <span v-if="item.weekDay==7">星期日</span>
                                        </a>
                                    </td>
                                    <td>0.0</td>
                                    <td class="money" :class="item.betmoney<0 ? 'minus':''">{{item.betmoney}}</td>
                                    <td class="money" >0.0</td>
                                    <td class="money">0.0</td>
                                    <td class="result"><a :href="'bets?date='+item.date" :class="item.Gain<0 ? 'minus':''">{{item.Gain}}</a></td>
                                </tr>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th v-if="week.weekType==false">上周</th>
                                    <th v-if="week.weekType==true">本周</th>
                                    <td>0.0</td>
                                    <td class="money" :class="week.totalBetmoney<0 ? 'minus':''">{{week.totalBetmoney}}</td>
                                    <td class="money">0</td>
                                    <td class="money">0.0</td>
                                    <td class="result color" :class="week.totalGain<0 ? 'minus':''">{{week.totalGain}}</td>
                                </tr>
                            </tfoot>
                        </table>

                    </div>



                
                </div>
            </div>
        </div>
            <Notice />

        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Layouts/Header.vue"
import Footer from "@/components/Layouts/Footer.vue"
import Left from "@/components/Layouts/Left.vue"
// import { UserService } from '@/core/UserCore/Service/UserServer';
import store from '@/store'
import Notice from '@/components/Layouts/Notice.vue'

@Component({
    components: {
        Header,
        Footer,
        Left,
        Notice
    }
})
export default class Twoweek extends Vue {
            private TwoWeekData?: any[] = []
            private TwoWeekDataTable: any[] = []
            private today:String=''
            
     get token() {
    return this.$store.state['_token'] ? this.$store.state['_token'] : localStorage.getItem("_token");
  }
  
  // private TwoWeek(){
  //       const dateObj = new Date();
  //       var month = dateObj.getMonth();
  //       const day = dateObj.getDate();
  //       const year = dateObj.getFullYear();
  //       month++;
  //       this.today = year  + '-'+ month  + '-' + day;
  //       console.log(this.today)
  //     UserService.TwoWeek({ _token: this.token })
  //       .then( (data) => {
  //       this.TwoWeekData=data
  //       var key;
  //        var item;
  //       var objectData =[]
  //       for (key in data.data) {
  //           if (data.data.hasOwnProperty(key))
  //               item = {
  //                   date:key,
  //                   Gain: data.data[key].Gain,
  //                   betmoney: data.data[key].betmoney,
  //                   weekDay: data.data[key].weekDay
  //               }
  //               objectData.push(item)
  //       }
  //       for(var j=0;j<objectData.length;j++){
  //           var array=[]
  //           var totalGain=0;
  //           var totalBetmoney=0;
  //           var weekType=false;
  //           for(var i=j;i<j+7;i++){
  //               totalBetmoney+=objectData[i]?.betmoney
  //               totalGain+=objectData[i]?.Gain
  //               array.push(objectData[i])
  //               if(objectData[i]?.date==this.today){
  //                   weekType=true
  //               }
  //           }
  //           j=j+6
  //           var week=
  //           {
  //               weekType:weekType,
  //               day:array,
  //               totalGain:totalGain,
  //               totalBetmoney:totalBetmoney
  //           }
  //           this.TwoWeekDataTable.push(week)
  //       }
  //   console.log(this.TwoWeekDataTable)
  //   });
  // }
  
 mounted() {
    // this.TwoWeek()
  }
  get colorSetting() {
  console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
}
</script>
<style>
        .history td {
            width: 16.67%;
        }
        .skin_blue .history td.blue a {
    color: blue;
        font-weight: bold;
}
    </style>
