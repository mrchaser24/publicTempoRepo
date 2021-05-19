<template>
  <div class="pl-popup">
    <van-popup
      v-model="isShow" 
      get-container="#app"
      class="pl-popup"
      :style="{ width: '80%', height: 'auto'}"
      :close-on-click-overlay="false"
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('lotteryDetails') }}
        </div>
        <div class="popup-content">
          <p>{{ $t('orderNo') }} : C21030400001</p>
          <p>{{ $t('singleBetAmount') }} : 2.00{{ $t('yuan') }}</p>
          <p>{{ $t('betTime') }} : 2021-03-04 15:47:11</p>
          <p>{{ $t('noBets') }} : 1</p>
          <p>{{ $t('colorKind') }} : 澳洲五分彩[官]</p>
          <p>{{ $t('multiple') }}: 2倍</p>
          <p>{{ $t('singleBetBonus') }}: 6066.667{{ $t('yuan') }}</p>
          <p>{{ $t('doubleColorMode') }}: {{ $t('yuan') }}</p>
          <p>{{ $t('issue') }}: 20210304191</p>
          <p>{{ $t('totalBet') }}: 4{{ $t('yuan') }}</p>
          <p>{{ $t('howToPlay') }}: 组选30</p>
          <p>{{ $t('betNum') }}: 7,8|1</p>
          <p>{{ $t('rebate') }}: 未返水(0%)</p>
          <p>{{ $t('status') }}: 未开奖</p>
        </div>
        <div class="popup-btn">
          <div @click="hidePopOver()">{{ $t('cancelOrder') }}</div>
          <div @click="hidePopOver()">{{ $t('keepBetting') }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ChasePopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  @Prop({ type: Object, default: () => {} }) private itemData?: object;
  
  @Emit('hide-popup') sendClose() {};
  private hidePopOver() {
    this.sendClose();
  }
}
</script>
<style lang="less" scoped>
@import "./../../assets/css/purchase-details.less";
</style>