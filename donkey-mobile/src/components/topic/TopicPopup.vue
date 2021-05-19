<template>
  <div class="topic-popup">
    <van-popup
      :close-on-click-overlay="false"
      v-model="show"
      :overlay-style="{ backgroundColor:'rgba(0, 0, 0, 0.2)' }"
      round >
      <div class="pop-up-container" style="width: 250px;">
        <div class="title">
          <span>系统公告</span>
        </div>
        <div class="pop-content">
          <div v-if="newsContent" class="text">
            <span>
              {{ newsContent }}
            </span>
          </div>
        </div>
        <div class="button">
          <van-button type="default" class="submit"
            size="small"
            @click="closePopover()">确定</van-button>
        </div>
      </div>
      </van-popup>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})

export default class HomeNewsPopup extends Vue {
  private show?: boolean = true;
  private newsContent: string = '';
  @Prop({ type: Boolean, default: true}) public readonly isShow!: boolean;
  private closePopover() {
    this.show = false;
    this.$emit('close-popover', this.show);
  }
  
  private mounted() {
     this.show = this.isShow;
  }
}
</script>