<template>
  <div :class="'skin_' + colorSetting">
    <Header />
    <div id="main">
      <Left />
      <div id="iframe" class="frame">
        <div class="L_SSCJSC" style="">
          <!--
                    -->
          <select
            id="lottery"
            name="lottery"
            v-model="selectItem"
            @change="onChangeLottery"
          >
            <option
              :value="item.name"
              v-for="(item, key) in AllLotteries"
              :key="key"
              >{{ item.name }}</option
            >
          </select>
          日期：
          <input
            id="date"
            type="date"
            v-model="dateTime"
            class="hasDatepicker"
            @change="onChangeDate"
          />
          <div id="drawTable">
            <table class="list table_ball table">
              <thead>
                <tr>
                  <th>期数</th>
                  <th>开奖时间</th>
                  <th :colspan="maxNum">开出号码</th>
                  <th :colspan="totalNum" class="strong">冠亚军和</th>
                  
                  <th v-show="maxNum === 5" class="strong">龙虎</th>
                  <th v-show="maxNum === 5" class="strong">前三</th>
                  <th v-show="maxNum === 5" class="strong">中三</th>
                  <th v-show="maxNum === 5" class="strong">後三</th>
                  <th v-show="maxNum === 10" colspan="5" class="strong">1~5 龙虎</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, key) in list" :key="'list' + key" class="">
                  <td class="period">{{ item.CurIssue }}</td>
                  <td class="drawTime">{{ item.AddTime }}</td>
                  <td
                    v-for="(num, key) in item.numArr"
                    :key="'numArr' + key"
                    class="name"
                  >
                    <span :class="'b' + num">{{ num }}</span>
                  </td>
                  <td class="other1">{{ item.totalNum }}</td>
                  <td v-if="item.little == '大'" class="other1 GDX_D">
                    {{ item.little }}
                  </td>
                  <td v-if="item.little == '小'" class="">
                    {{ item.little }}
                  </td>
                  <td v-if="item.dsNum == '双'" class="other1 GDS_S">
                    {{ item.dsNum }}
                  </td>
                  <td v-if="item.dsNum == '单'" class="">
                    {{ item.dsNum }}
                  </td>

                  <td
                    v-for="(huItem, key) in item.huList"
                    :key="'huList' + key"
                    class="other1 "
                    :class="huItem == '虎' ? '' : 'GDS_S'"
                  >
                    {{ huItem }}
                  </td>
                  <td v-show="maxNum === 5" class="other1 others GTS_3"
                    v-for="(perArr, key) in item.perArr"
                    :key="'info'+key"
                    >{{perArr}}</td> 
                  <td v-show="maxNum === 5" class="other1 others GTS_4"
                  v-for="(midArr, index) in item.midArr"
                    :key="'info1'+index"
                    >{{midArr}}</td>
                  <td v-show="maxNum === 5" class="other1 others GTS_4"
                  v-for="(nextArr, i) in item.nextArr"
                    :key="'info2'+i"
                    >{{nextArr}}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            id="ui-datepicker-div"
            class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
          ></div>
        </div>
      </div>
    </div>
    <Notice />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Layouts/Header.vue'
import Left from '@/components/Layouts/Left.vue'
import Footer from '@/components/Layouts/Footer.vue'
import Notice from '@/components/Layouts/Notice.vue'
import moment, { max } from 'moment'
import { getLottoryResult } from '../../api/lottoryInfo'
import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService"
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage"
import { GameHistoryCoreService } from "@/core/GameCore/Service/GameHistoryCoreService"
import { GameHistorySearchCoreMessage } from "@/core/GameCore/Message/GameHistorySearchCoreMessage"
@Component({
  components: {
    Header,
    Left,
    Footer,
    Notice
  }
})
export default class Lottoryhistory extends Vue {
  private currGameCode: String = ''
  private dateTime: String = ''
  private maxNum: Number = 5
  private totalNum: Number = 3
  private selectItem: String | null = ''
  private AllLotteries?: any = []
  private list?: any[] = []
  private isSelectSub: Boolean = false

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: gameid: any
    * @Return: array || []
    * @Date: 2021-04-19 16:07:39
    * @Description: Get lottery draw history
  */
   private async GameHistory(gamename: any, dt: any) {
    let params: any = new GameHistorySearchCoreMessage();
    params.equal_gameInfo_gameHistory = this.filterLottery(gamename)[0].id;
    // params.like_insertTime_gameHistory = `${dt}`;
    params.count = 100;
    params.page = 1;
    await GameHistoryCoreService.Search(params).then((data: any) => {
      let maxNum = 5
      let tempArr = []
      for (let i = 0; i < data.length; i++) {
        let temp = data[i]
          let numberArray = temp.winningNumbers.split(',');
          let total = parseInt(numberArray[0])+parseInt(numberArray[1]);//str.split('=')[1]
          let little = '小'
          if (total >= 12) {
            little = '大'
          }
          let dsNum = '单'
          if (total % 2 == 0) {
            dsNum = '双'
          }
          let numArr = temp.winningNumbers.split(',')
          if (maxNum < numArr.length) {
            maxNum = numArr.length
          }
          let huList = [];
          let perArr = []; //前
          let midArr = [];//中
          let nextArr = [];//后
          if(maxNum>=10){
            for (let j = 0; j < 5; j++) {
              let huStr = '虎'
              if (parseInt(numArr[j]) >= parseInt(numArr[9 - j])) {
                huStr = '龙'
              }
              huList.push(huStr)
            }
          }
          else if(maxNum == 5){
            let huStr = '虎'
            if(numArr[0]>numArr[4]){
              huStr = '龙'
            }
            else if(numArr[0]==numArr[4]){
              huStr = '和'
            }
            huList.push(huStr);

            //判断是否是前三是否为豹子
            let str1 = this.test(numArr[0]+","+numArr[1]+","+numArr[2]);
            perArr.push(str1);
            let str2 = this.test(numArr[1]+","+numArr[2]+","+numArr[3]);
            midArr.push(str2);
            let str3 = this.test(numArr[2]+","+numArr[3]+","+numArr[4]);
            nextArr.push(str3);
          }
          
          tempArr.push({
            CurIssue: temp.currentIssue,
            AddTime: temp.insertTime,
            numArr: numArr,
            Id: temp.id,
            totalNum: total,
            little: little,
            dsNum: dsNum,
            huList: huList,
            perArr:perArr,
            midArr:midArr,
            nextArr:nextArr,
          })
        // }
      }
      this.maxNum = maxNum
      this.list = tempArr
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-19 16:49:15
    * @Description: get game info data
  */
  private async GameInfo() {
    let params: any = new GameInfoSearchCoreMessage()
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.AllLotteries = data;
      this.selectItem = this.AllLotteries[0].name;
      this.dateTime = this.currentDate();
      this.GameHistory(this.selectItem, this.dateTime);
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-19 17:41:25
    * @Description: filter lottery
  */
  private filterLottery(gamename: any) {
    return this.AllLotteries.filter((val: any) => {
      if (val.name === gamename) {
        return val;
      }
    })
  }

  get colorSetting() {
    return this.$store.state.colorSetting
  }

  private onChangeDate(e: any) {
    this.GameHistory(this.selectItem, this.dateTime)
  }

  private onChangeLottery(e: any) {
    this.GameHistory(this.selectItem, this.dateTime)
  }

  test(str:string){
      //let str = '1,2,5';
      var vars = str.split(',');
      let $res = '';
      if(vars[0] ==vars[1] &&vars[0] ==vars[2]&& vars[1] ==vars[2]){
          $res ='豹子';
      }else{
          let $dz = 0;
          if(vars[0] ==vars[1]){
              $dz++;
          }
          if(vars[0]==vars[2]){
              $dz++;
          }
          if(vars[1] ==vars[2]){
              $dz++;
          }
          if($dz ==1){
              $res ='对子';
          }else {
              let $bb=0;
              if(Math.abs(parseInt(vars[0])-parseInt(vars[1])) ==1){
                  $bb++;
              }
              if (Math.abs(parseInt(vars[0])-parseInt(vars[2])) ==1){
                  $bb++;
              }
              if(Math.abs(parseInt(vars[1])-parseInt(vars[2])) ==1){
                  $bb++;
              }
              if($bb ==0){
                  $res ='杂六';
              }if($bb==1){
                  $res ='半顺';
              }if($bb==2){
                  $res ='顺子';
              }
          }
      }
      return $res;
  }

  get token() {
    return this.$store.state['_token']
      ? this.$store.state['_token']
      : localStorage.getItem('_token')
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: string || ""
    * @Date: 2021-04-19 17:43:22
    * @Description: get current date
  */
  private currentDate() {
    let time = new Date();
    let str = 
      time.getFullYear() + '-' 
      + ((time.getMonth() + 1) < 10 ? ('0'+(time.getMonth() + 1)): (time.getMonth() + 1)) + '-' 
      + (time.getDate() < 10 ? ('0'+time.getDate()) : time.getDate());
    return str;
  }

  private async created() {
    await this.GameInfo();
  }

  private mounted() {
    this.isSelectSub = false;
    moment.locale('en');
  }
}
</script>
<style>
#date {
  width: 136px;
}
</style>
