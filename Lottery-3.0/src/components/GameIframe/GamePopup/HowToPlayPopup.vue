<template>
  <div class="how-to-play-popup">
    <van-popup
      v-model="showPopup"  
      :overlay-style="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
      :close-on-click-overlay="false"
      get-container="game-iframe"
      class="how-to-play-popup"
      closeable
      @close="hidePopOver()"
    >
      <div class="pop-up-container">
        <div class="popup-header">
          {{ $t('howToPlay') }}
        </div>
        <div class="popup-content">
          <span>{{ $t('oldChongqing') }} <van-icon name="arrow" class="arrow" /></span>
          <table class="table">
            <tr>
              <th>{{ $t('gameplayGroup') }}</th>
              <td>{{ $t('howToPlay') }}</td>
              <td>{{ $t('howToPlay') }}</td>
            </tr>
            <tr>
              <th rowspan="3">{{ $t('renEr') }}</th>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
            <tr>
              <th rowspan="3">{{ $t('renEr') }}</th>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('renErDuplex') }}</td>
              <td class="long-text">{{ $t('renErDesc') }}
              </td>
            </tr>
        </table>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})

export default class HowToPlayPopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShowPopup?: boolean;
  private showPopup?: any = '';
  private hidePopOver() {
    this.$emit('hide-popup', false);
  }
  private mounted() {
    this.showPopup = this.isShowPopup
  }
}
</script>

<style lang="less" scoped>
@import "./../../../assets/css/how-to-play.less";
</style>

