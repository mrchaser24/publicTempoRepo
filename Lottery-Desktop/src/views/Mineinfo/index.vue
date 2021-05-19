<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="">
                    <div class="user_info_table">
                        <table class="table user_info">
                            <thead>
                                <tr>
                                    <th colspan="2">{{ $t('memberProfile') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr asd>
                                    <th>{{ $t('memberAcc') }}</th>
                                    <td>{{ userDetails.name }}</td>
                                </tr>
                                <tr>
                                    <th>{{ $t('memberName') }}</th>
                                    <td>{{ userDetails.name }}</td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ownedHandicap') }}</th>
                                    <td>{{userInfo.handicap}} 盘</td>
                                </tr>
                                <tr>
                                    <th>{{ $t('accStat') }}</th>
                                    <td>启用</td>
                                </tr>
                                <tr>
                                    <th>{{ $t('quickDrawAmnt') }}</th>
                                    <td>{{ userDetails.money }} (余额:96)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div>
                        <div class="tab-wrapper">
                            <a id="info" href="info?lottery=SGFT" class="active">彩票类</a>
                        </div>
                    </div>
                    <div class="info_body">
                        <div class="game_class">
                            <ul>
                                <li><span>快开彩</span>
                                    <a href="info?lottery=SGFT" class="selected">SG飞艇</a><a href="info?lottery=PK10JSC">极速赛车</a><a href="info?lottery=BJPK10">北京赛车(PK10)</a><a href="info?lottery=SSCJSC">极速时时彩</a><a href="info?lottery=CQHLSX">重庆欢乐生肖</a><a href="info?lottery=XYFT">幸运飞艇</a>
                                    <a href="info?lottery=LUCKYSB">极速飞艇</a><a href="info?lottery=AULUCKY5">澳洲幸运5</a><a href="info?lottery=AULUCKY10">澳洲幸运10</a>
                                </li>
                            </ul>
                        </div>
                        <table class="list table data_table">
                            <thead>
                                <tr>
                                    <th>玩法</th>
                                    <th>A盘退水</th>
                                    <th>单注最低</th>
                                    <th>单注最高</th>
                                    <th>单期最高</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <th>1-10车号</th>
                                    <td class="cm">0%</td>
                                    <td>1</td>
                                    <td>20000</td>
                                    <td>50000</td>
                                </tr>
                                <tr>
                                    <th>两面</th>
                                    <td class="cm">0%</td>
                                    <td>1</td>
                                    <td>50000</td>
                                    <td>200000</td>
                                </tr>
                                <tr>
                                    <th>冠亚军和大小</th>
                                    <td class="cm">0%</td>
                                    <td>1</td>
                                    <td>50000</td>
                                    <td>200000</td>
                                </tr>
                                <tr>
                                    <th>冠亚军和单双</th>
                                    <td class="cm">0%</td>
                                    <td>1</td>
                                    <td>50000</td>
                                    <td>200000</td>
                                </tr>
                                <tr>
                                    <th>冠亚军和</th>
                                    <td class="cm">0%</td>
                                    <td>1</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                </tr>
                            </tbody>
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
import Notice from '@/components/Layouts/Notice.vue'
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"

import { myFn } from "@/utils/fn";

@Component({
    components: {
        Header,
        Footer,
        Left,
        Notice
    }
})
export default class Mineinfo extends Vue {
  private userDetails: any = {};

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-12 10:28:32
    * @Description: Get current user info in local storage
  */
  get localUserInfo() {
    return this.$store.state.userInfo.item;
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param null
    * @Return null
    * @Date: 2021-04-12 11:00:45
    * @Description: get user info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.localUserInfo.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.userDetails = data[0];
        this.userDetails.money = myFn.formatDecimal(this.userDetails.money);
        // console.log(this.userDetails)
      }
    })
  }

  get colorSetting() {
    console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
  get userInfo() {
    return this.$store.state.userInfo;
  }

  
  private async created() {
    await this.UserInfo();
    // console.log(this.userDetails)
  }
}
</script>
