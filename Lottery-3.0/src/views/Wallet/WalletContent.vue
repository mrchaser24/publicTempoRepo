<template>
  <div class="wlt-content">
    <div class="wlt-wrapper">
      <div class="wlt-total-amount">{{ $t('totalAmount') }}（{{ $t('yuan') }}）</div>
      <div class="wlt-amt-deposit">
        <div class="amount">
          <!-- 
          /*
            * @Author: chase 
            * @LastAuthor: null
            * @Param null
            * @Return null
            * @Date: 2021-04-11
            * @Description: Decimal
          */ -->
          <span class="currency">￥</span>{{UserData.money ? UserData.money : '0.00'}}
        </div>
        <router-link :to="{name: 'Deposit'}">
          <button class="deposit-btn" :inline="true">{{ $t('goToDeposit') }}</button>
        </router-link>
      </div>
      <div class="wlt-items">
        <div
          v-for="(item, key) in list"
          :key="key"
          class="wlt-item-icon"
          @click="goLink(item.path)"
        >
          <template class="wlt-icon-wrap">
            <img
              alt=""
              class="wlt-icon" 
              :class="item.icon"
              :src="require(`@/assets/images/common/${item.icon}.png`)">
          </template>
          <span>{{ item.name }}</span>
        </div>
      </div>
      <!-- <div class="wlt-more-details">
        <div class="wlt-details">{{ $t('walletDetails') }}</div>
        <div class="wlt-view-bal" @click="isShown = !isShown">
          {{ $t('clickToViewBalance') }}
          <div class="plus" v-if="!isShown"></div>
          <div class="minus" v-else></div>
        </div>
      </div> -->
    </div>
    <div class="wlt-bal-detail" v-if="isShown">
      <div class="wlt-bal-wallet">
        <div class="wlt-item">
          <div class="wlt-text">
            <div class="wlt-wallet-img"></div>
            {{ $t('centralWallet') }}
          </div>
          <p class="amount">{{userBalance}}</p>
        </div>
        <div class="wlt-item">
          <div class="wlt-text">
            <div class="wlt-wallet-img"></div>
            {{ $t('lockWallet') }}
          </div>
          <p class="amount">0.00</p>
        </div>
      </div>
      <div class="wlt-bal-games">
        <div class="wlt-row">
          <div
            class="wlt-game"
            v-for="(games, index) in gameListBalances"
            :key="index"
          >
            {{ games.Name }}
            <div class="wlt-amount">
              {{ games.Balance }}.00
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="wlt-container">
      <div class="wlt-betting-record">
        <div class="wlt-heading">{{ $t('betRecord') }}</div>
        <div class="wlt-more">
          <span @click="$router.push({path:'/Bet/AllBetRecord'})">{{ $t('seeMore') }}</span>
          <img alt="user_avatar" class="more-arrow" src="@/assets/wallet/back-btn.png">
        </div>
      </div>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService"
import { myFn } from "@/utils/fn";
import { Dialog } from 'vant';

@Component({
  components: {}
})

export default class WalletContent extends Vue {
  private accountDetail: any = null;
  private UserData?: any = {};
  private isShown?: boolean = false;
  private list?: any = [
    // {
    //   icon: "quota-icon",
    //   name: this.$t('transfer'),
    //   path: "QuotaConversion"
    // },
    {
      icon: "withdrawal",
      name: this.$t('withdrawal'),
      path: "Withdraw"
    },
    {
      icon: "recharge",
      name: this.$t('cardManagement'),
      path: "Recharge"
    }
  ];
  private gameListBalances?:  any = [
    {id: 0, Name: 'AA彩票', Balance: 888},
    {id: 1, Name: 'KY棋牌', Balance: 0},
    {id: 2, Name: 'VG棋牌', Balance: 0},
    {id: 3, Name: 'QG棋牌', Balance: 0},
    {id: 4, Name: 'OG视讯', Balance: 0},
    {id: 5, Name: 'GD视讯', Balance: 0},
    {id: 6, Name: '欧博视讯', Balance: 0},
    {id: 7, Name: 'EB视讯', Balance: 0},
    {id: 8, Name: 'AG视讯', Balance: 0},
    {id: 9, Name: 'BG视讯', Balance: 0},
    {id: 10, Name: 'DG视讯', Balance: 0},
    {id: 11, Name: 'AG捕鱼王', Balance: 0},
    {id: 12, Name: 'BG捕鱼', Balance: 0},
    {id: 13, Name: 'TTG电子', Balance: 0},
    {id: 14, Name: 'CQ9电子', Balance: 0},
    {id: 15, Name: 'AG电子', Balance: 0},
    {id: 16, Name: 'BG电子', Balance: 0},
    {id: 17, Name: 'CMD体育', Balance: 0},
    {id: 18, Name: 'AG体育', Balance: 0},
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: string
    * @Date: 2021-04-07 10:18:19
    * @Description: Get current user info
  */
  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-07 10:18:19
    * @Description: Get User info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = myFn.getCookie()?.userid;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.UserData = data[0];
        this.UserData.money = myFn.formatDecimal(this.UserData.money)
      }
    })
  }

  private goLink(url: string) {
    if (url === 'Withdraw'&& (this.UserData.withdrawPassword === null || this.UserData.withdrawPassword === '') ) {
      Dialog.confirm({
        title: this.$t('notice') as any,
        message: this.$t('modifyWithdrawpass') as any,
        confirmButtonText: this.$t('modify') as any,
        cancelButtonText: this.$t('cancel') as any,
        width: '80%'
      })
        .then(() => {
          return this.$router.push({name: 'ChangeWithdrawPassword'})
        })
        .catch(() => {
          // on cancel
        });
    } else {
      return this.$router.push({name: url})
    }

  }

  private created () {
    if (myFn.getCookie()?.userid) this.UserInfo();
  }

}
</script>
