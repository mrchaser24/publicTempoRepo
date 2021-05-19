<template>
  <div class="lottery-records">
    <Header
      :msg="$t('lotteryRecord')"
      :back="true"
      :leftText="$t('back')"
      :showFilter="true"
      @showFilterDate="showFilterDate()"
    />
    <div class="lottery-records-wrapper">
      <FilterRecord
        v-if="showFilter"
        :showCheckBox="false"
        @cancel-filter-data="cancelFilter"
        @filter-data="confirmFilter"
      />
      <PullRefresh
        @refreshData="onRefresh"
        @loadData="loadData()"
        :refreshing="refreshing"
        :finished="finished"
        :loading="loading"
      >
        <div
          v-if="betReportListFiltred.length > 0"
          slot="list-content"
          class="record-list"
        >
          <div
            class="tnq-list-item"
            v-for="(item, key) in betReportListFiltred"
            :key="key"
            @click="selectItem(item)"
          >
            <div class="left">
              <div class="top">
                <span>{{
                  item.gamePlayingModel ? item.gamePlayingModel.name : ""
                }}</span>
                <span>未开奖</span>
              </div>
              <div class="body">
                <span>{{ $t("issue") }}: {{ item.currentIssue }}</span>
                <span>{{ $t("betNum") }}:{{ item.content }}</span>
                <span
                  >{{ $t("betAmount") }}: {{ item.betMoney }}元</span
                >
                <span
                  >{{ $t("awardAmount") }}:{{
                    item.gamePlayingModel ? item.gamePlayingModel.bonus : ""
                  }}</span
                >
                <span class="date">{{ item.insertTime }}</span>
                <span class="play-count"
                  >{{ $t("howToPlay") }}: {{ item.gamePlaying }}</span
                >
              </div>
            </div>
            <div class="right">
              <van-icon name="arrow" class="arrow" />
            </div>
          </div>
        </div>
        <div v-else slot="list-content" class="def-height no-data-box">
          <van-empty :description="$t('noData')" />
        </div>
      </PullRefresh>
      <!--  <van-tabs v-model="activeTab">
        <van-tab
          v-for="(tabItem, tabKey) in tabList"
          :key="tabKey"
          :name="tabKey"
          :title="tabItem">
          <div class="top-panel">
            <div class="panel-header">
              <div>{{ $t('betting') }}</div>
              <div>{{ $t('winALottery') }}</div>
              <div>{{ $t('profit') }}</div>
            </div>
            <div class="panel-body">
              <div class="color">4.0</div>
              <div class="color">0.0</div>
              <div class="color">-4.0</div>
            </div>
          </div>
        </van-tab>
      </van-tabs> -->
    </div>

    <PurchaseDetails
      :isShow="showPurchase"
      :itemData="itemData"
      @hide-popup="closePurchasePopup()"
    />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";
import FilterRecord from "@/components/common/FilterRecord.vue";
import PurchaseDetails from "@/components/LotteryRecord/PurchaseDetails.vue";
import PullRefresh from "@/components/common/PullRefresh.vue";

import { GameBetCoreService } from "@/core/GameCore/Service/GameBetCoreService";
import { GameBetSearchCoreMessage } from "@/core/GameCore/Message/GameBetSearchCoreMessage";
import { myFn } from "@/utils/fn";

@Component({
  components: {
    Header,
    FilterRecord,
    PurchaseDetails,
    PullRefresh,
  },
})
export default class LotteryRecord extends Vue {
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private showPurchase: boolean = false;
  private itemData: any = {};
  private showFilter: boolean = false;
  private activeTab: number = 0;
  private tabList: any = [
    this.$t("all"),
    this.$t("noPrize"),
    this.$t("hasWon"),
    this.$t("not"),
  ];
  private betReportList?: any = [];
  get betReportListFiltred() {
    if (this.filterDate === "") {
      return this.betReportList;
    } else {
      return this.betReportList.filter((betReport: any) => {
        let betDate: Date = new Date(betReport.insertTime);
        let currentFilter: Date = new Date(this.filterDate);
        return (
          betDate.getFullYear() === currentFilter.getFullYear() &&
          betDate.getDate() === currentFilter.getDate() &&
          betDate.getMonth() === currentFilter.getMonth()
        );
      });
    }
  }
  private filterDate?: any = "";

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: array || []
   * @Date: 2021-04-08 10:04:13
   * @Description: Get betting record data
   */
  private async UserBetReport() {
    let params: any = new GameBetSearchCoreMessage();
    params.equal_userInfo_gameBet = myFn.getCookie()?.userid;
    params.count = 100;
    params.page = 1;
    await GameBetCoreService.Search(params).then((data: any) => {
      this.betReportList = data.reverse();

      if (this.refreshing) {
        this.refreshing = false;
      }
      this.loading = false;
      this.finished = true;
    });
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-08 10:04:13
   * @Description: Load the data on van-list component
   */
  private loadData(): void {
    this.UserBetReport();
  }

  /*
   * @Author: keanu
   * @LastAuthor: null
   * @Param: null
   * @Return: null
   * @Date: 2021-04-08 10:04:13
   * @Description: refresh data on pull refresh component
   */
  private onRefresh(): void {
    this.finished = false;
    this.loading = true;
    this.refreshing = true;
    if (myFn.getCookie()?.userid) this.loadData();
  }

  private changeTab(val: any) {
    console.log(val);
  }

  private showFilterDate() {
    this.showFilter = !this.showFilter;
  }

  private closePurchasePopup() {
    this.showPurchase = false;
  }

  private selectItem(item: any) {
    // this.showPurchase = true;
    // this.itemData = item;
  }

  private cancelFilter() {
    this.filterDate = "";
  }

  private confirmFilter(date: any) {
    this.filterDate = date;
  }

  private mounted() {}
}
</script>

<style scoped lang="less">
@import "./../../assets/css/lottery-record.less";

.record-list {
  min-height: calc(100vh - 45px);
}
.def-height {
  min-height: calc(100vh - (45px + 10px));
  padding-top: 10px;
}

.no-data-box {
  min-height: calc(100vh - (45px + 10px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>