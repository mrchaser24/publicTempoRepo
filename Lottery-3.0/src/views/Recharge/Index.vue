<template>
  <div class="main-recharge">
    <Header :msg="$t('recharge')" :leftText="$t('back')" :back="back" />
    <van-tabs class="recharge_info" v-model="activeTab" @click="goToPage">
      <van-tab
        v-for="(index, key) in tabList"
        :key="key"
        :name="key"
        :title="index.title"
      >
        <div class="visa-list" v-if="visaCardList.length > 0">
          <van-cell
            v-for="(visaItem, visaKey) in visaCardList"
            :key="visaKey"
            class="visa_card"
            is-link
            :to="{ name: 'DetailRecharge', params: { bankid: visaItem.id } }"
          >
            <template #right-icon />
            <img
              alt="user_avatar"
              :src="require(`@/assets/recharge/visa1.png`)"
            />
            <h2>
              {{ $t('constructionBank') }} <span>（{{ visaItem.bankName }}）</span>
            </h2>
            <h5>{{ $t('cardHolder') }}：{{ visaItem.name }}</h5>
            <p>{{ visaItem.bankCardNum }}</p>
          </van-cell>
        </div>
        <div v-else class="def-height no-data-box">
          <van-empty :description="$t('noData')" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from 'vue-property-decorator'
import {AccountInfoCoreService} from "@/core/AccountCore/Service/AccountInfoCoreService";
import {AccountInfoSearchCoreMessage} from "@/core/AccountCore/Message/AccountInfoSearchCoreMessage";
import { myFn } from "@/utils/fn";

@Component({
  components: {
    Header,
  },
})
export default class Recharge extends Vue {
  private back: boolean = true
  private activeTab: any = 0
  private visaCardList: any = []
  private tabList: any[] = [
    { title: this.$t('onlineBankingRecharge'), path: '' },
    { title: this.$t('onlineRecharge'), path: 'OnlineRecharge' },
    // { title: this.$t('offlineRecharge'), path: 'OfflineRecharge'},
    // { title: this.$t('moneyTransfer'), path: 'RechargeBank' },
  ]
  
  private goToPage(index: any) {
    var url = this.tabList[index].path
    if (url) this.$router.push({ name: url })
  }

  private getBank(){
    let params = new AccountInfoSearchCoreMessage()
    params.equal_userInfo_accountInfo = myFn.getCookie()?.userid as any;
    AccountInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.visaCardList=data
      }
    })
  }

  created(){
    if (myFn.getCookie()?.userid) this.getBank();
  }
}
</script>
<style lang="less" scoped>
/* Theme color */
@import "./../../assets/css/recharge.less";
.main-recharge {
  margin-top: 10px;
}

  /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-12
    * @Description: add margin to top
  */
.main-recharge .visa_card {
  position: relative;
  /* width: 100%; */
  background: transparent;
  margin-top: 5px;
  padding: 0px 10px 0px;
}

.main-recharge .visa_card:not(:last-child) {
  margin-bottom: 10px;
  padding-top: 10px;
}

.main-recharge .visa_card img {
  width: 100%;
}

.main-recharge .visa_card h2 {
  position: absolute;
  top: 15px;
  left: 25px;
  color: #fff;
  font-size: 12pt;
}

.main-recharge .visa_card h2 span {
  font-size: 12px;
  font-weight: normal;
}

.main-recharge .visa_card h5 {
  position: absolute;
  top: 41px;
  left: 25px;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
}

.main-recharge .visa_card p {
  position: absolute;
  bottom: 15px;
  left: 25px;
  color: #fff;
}

.recharge_info ::v-deep.van-tab {
  color: #ababab;
}

// .recharge_info ::v-deep.van-tab:before {
//   content: "";
//   border-right: 1px solid #ababab;
//   position: absolute;
//   right: 0;
//   height: 66%;
// }

.recharge_info ::v-deep.van-tab.van-tab--active {
  background-image: linear-gradient(180deg, #fc9c5d 0%, #ee7656 0%, #e04f4f 62%), 
	linear-gradient(#e04f4f, #e04f4f);
  color: #fff;
}

.recharge_info ::v-deep.van-tabs__nav {
  background: linear-gradient(179deg, #fff, #d5d5d5);
}

.recharge_info ::v-deep.van-tabs__line {
  opacity: 0;
}

.main-recharge .van-tabs__content .van-cell::after {
  content: none;
}

.main-recharge ::v-deep.van-tabs__content {
  min-height: calc(100vh - (45px + 44px + 10px));
}

.main-recharge .visa-list ::v-deep.van-cell__value {
  display: flex;
}

.def-height {
  min-height: calc(100vh - (45px + 10px + 44px + 10px));
  padding-top: 10px;
}

.no-data-box {
  min-height: calc(100vh - (45px + 10px + 44px + 10px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
