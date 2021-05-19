<template>
  <div>
    <van-overlay :show="show" @click="onSure">
      <div class="wrapper">
        <div
          class="dialog-box"
          :class="'theme-color-' + getThemeColor"
          :style="{ height: height + '%', width: width + '%' }"
          @click.stop
        >
          <div
            v-if="title"
            class="dialog-title"
            :class="'dialog-tip-color-' + getThemeColor"
          >
            {{ title }}
          </div>
          <div class="dialog-tip" :class="'dialog-tip-color-' + getThemeColor">
            {{ tip }}
          </div>
          <van-button class="dialog-btn" round block type="info" @click="onSure"
            >确定</van-button
          >
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Overlay } from 'vant'

@Component({
  components: {
    Overlay,
  },
})
export default class ADialog extends Vue {
  private show: Boolean = false
  private tip: String = ''
  private title: String = ''
  private type: String = ''
  @Prop({ type: Number, default: 120 }) readonly width!: Number
  @Prop({ type: Number, default: 120 }) readonly height!: Number

  private showDialog(title: String, tip: String, type: String = '') {
    this.show = true
    console.log(tip)
    this.title = title
    this.tip = tip
    this.type = type
  }
  private hideDialog() {
    this.show = false
  }
  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private onSure() {
    if (this.type == '') {
      this.hideDialog()
      return
    }
    this.$emit('onSure', this.type)
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.dialog-title {
  width: 90%;
  height: 20%;
  text-align: center;
  font-size: 20px;
}

.dialog-tip {
  width: 90%;
  height: 40%;
  text-align: center;
}

.dialog-box {
  border-radius: 15px;
  box-shadow: 0px 0px 10px 2px blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.dialog-btn {
  width: 80%;
}

.dialog-tip-color-day {
  color: black;
}

.dialog-tip-color-night {
  color: white;
}
</style>
