<template>
  <div class="vid-count">
    <van-popup
      v-model="showCount"
      :closeable="false"
      :click-overlay="false"
      @close="closeCount"
      :close-on-click-overlay="false"
      :overlay-style="{ backgroundColor: 'transparent' }"
      :safe-area-inset-bottom="true"
      position="bottom"
      :style="{ height: '50px' }">
      <div class="vid-count-content">
        <div class="left">
          <input type="radio" id="radio" v-model="checked" @click="select()">
          <label for="radio">全选</label>
        </div>
        <div class="right">删除   ({{ vidData ? vidData.length : 0 }})</div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class VidCount extends Vue {
  @Prop({ type: Boolean, default: true }) readonly showCount!: boolean;
  @Prop({ type: Array, default: () => { [] } }) readonly vidData!: any[];
  private checked?: any = false;
  private activeIcon?: string = 'https://img01.yzcdn.cn/vant/user-active.png';
  private inactiveIcon?:  string = 'https://img01.yzcdn.cn/vant/user-inactive.png';

  @Emit('closeCount') send(value: any) {}
  private closeCount() {
    this.send(false);
    this.checked = false;
  }

  private select() {
    this.checked = !this.checked;
  }

}
</script>

<style lang="less">
@import "../../assets/styles/global.less";
@import "../../assets/styles/components/vidcount.less";
</style>