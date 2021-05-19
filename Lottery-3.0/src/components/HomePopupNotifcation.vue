<template>
  <div class="home-popup-notification">
    <van-popup v-model="show" :style="{ height: '343px', width: '343px' }">
      <div>
        <img src="@/assets/homepopup.png" width="100%" />
      </div>
      <div class="text">
        <p>
          {{ text }}
        </p>
      </div>
      <van-icon name="close" size="40px" color="white" @click="close" />
    </van-popup>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { myFn } from "@/utils/fn";

@Component({})
export default class HomePopupNotifcation extends Vue {
  @Prop({ type: String, default: ''}) public readonly text!: string;
  private show: any = false;

  get showPopupHome() {
    return this.$store.state.showPopupHome;
  }

  private close() {
    this.show = false;
    this.$store.dispatch('setShowPopupHome', false);
    if (myFn.getCookie()?.userid) {
      localStorage.setItem('showPopupHome', JSON.stringify(false));
    }
  }

  mounted() {
    if (myFn.getCookie()?.userid) {
      localStorage.setItem('showPopupHome', JSON.stringify(this.showPopupHome));
      let item = JSON.parse(localStorage.getItem('showPopupHome') as any);
      this.show = item == null ? true : false;
    } else {
      this.show = this.showPopupHome;
    }

  }
}
</script>

<style scoped>
.home-popup-notification .van-popup {
  background-color: transparent;
}

.home-popup-notification .text {
  height: 145px;
  width: 145px;
  border-radius: 50%;
  position: absolute;
  top: 73px;
  left: 51%;
  color: white;
  font-size: 14px;
  font-weight: 600;
  transform: translateX(-50%);
}
</style>