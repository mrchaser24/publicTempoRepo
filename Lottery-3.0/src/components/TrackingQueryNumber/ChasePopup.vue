<template>
  <div class="pl-popup">
    <van-popup
      v-model="showPopup"  
      class="pl-popup"
      :style="{ width: '80%', height: 'auto'}"
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('trackDetails') }}
        </div>
        <div class="popup-content">
          <p>{{ $t('issue') }}</p>
          <p>{{ $t('betTrackNum') }} : C21022400002</p>
          <p>{{ $t('timeAward') }} : 2021-02-24 22:34:00</p>
          <p>{{ $t('user') }} : chat05</p>
          <p>{{ $t('issueNum') }} : 重庆时时彩[官]</p>
          <p>{{ $t('howToBet') }} : 组选30</p>
          <p>{{ $t('awardContent') }} : 7,8|1</p>
          <p>{{ $t('betAmount') }} : 2元</p>
          <p>{{ $t('chaseNum') }} : C21022400002</p>
          <p>{{ $t('awardStatus') }} : 未开奖</p>
        </div>
        <div class="popup-btn" @click="hidePopOver()">
          {{ $t('cancelOrder') }}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ChasePopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  private showPopup?: any = ''
  
  private mounted() {
    this.showPopup = this.isShow
  }
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
}
</script>
<style lang="less" scoped>
@import "./../../assets/css/chase-popup.less";
</style>