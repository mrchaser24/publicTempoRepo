<template>
    <div class="side_left" id="side">
            <div class="user_info">
                <div class="title">账户信息</div>

                <div class="zhanghu">
                    <div class="info">
                        <label>账号：</label>
                        <div class="inline-name">
                            <span>{{ userDetails.name }} ({{ 'A盘' }})</span>
                        </div>
                    </div>
                    <div id="account0" class="accounts" >
                        <div class="info"><label>快开彩额度：</label><span class="balance">{{ userDetails.money }}</span>
                        </div>
                        <div class="info"><label>未结算金额：</label><span class="betting">{{ userDetails.money }}</span></div>
                    </div>
                    
                </div>
            </div>

            <input type="hidden" id="userType" value="1" />

            <div class="betdone" id="drawOfficial">
                <div class="title"><a href="http://168kai.com" target="_blank">全国开奖网</a></div>
            </div>

            <div class="betdone" id="lastBets">
                <div class="title"><span>最新注单</span></div>
                <ul class="bets">
                </ul>
            </div>
            <div style="display:none" id="betResultPanel">

                <div class="control s0">
                    <a onclick="resetPanel()" href="javascript:void(0)">返 回</a>
                </div>
                <div id="betResultDrawNumber" class="Paneltitle"></div>
                <div class="bresults">
                    <ul class="bets" id="betReulstList"></ul>
                    <table class="total s0">
                        <tbody>
                            <tr>
                                <td class="label">下注金额</td>
                                <td id="betResultCount"></td>
                            </tr>
                            <tr>
                                <td class="label">合计金额</td>
                                <td id="betResultTotal"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"

import { myFn } from "@/utils/fn";

@Component({
    components: {
        
    }
})
export default class Left extends Vue {
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
      }
    })
  }

  private async created() {
    await this.UserInfo();
  }

}
</script>
