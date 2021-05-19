<template>
  <div v-if="show" class="application-mobile-ads-banner">
    <div class="close">
      <van-icon @click="close" name="cross" color="white" />
    </div>
    <div class="application-mobile-ads-banner-wrapper">
      <div class="app-content">
        <img src="@/assets/login/lazy-panda.png" width="45" height="45" />
        <p>
          {{ $t('downloadapp')}},
          <br>
          {{ $t('getyuan')}}
        </p>
      </div>
      <div class="app-cta">
        <van-button @click="gotoApp" color="rgb(221,61,57)"
          >{{ $t('downloadnow')}}</van-button
        >
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Toast } from 'vant';
import { myFn } from "@/utils/fn";

@Component({})
export default class ApplicationMobileAdsBanner extends Vue {
  private show: boolean = false;
  private text: string =
    `${this.$t('downloadapp')}, <br /> ${this.$t('getyuan')}`;
  private appImgae: string = ''

  get showPopupHome() {
    return this.$store.state.showPopupHome;
  }

  private close() {
    this.show = false;
    this.$store.dispatch('setShowAppAdsBanner', false);
    if (myFn.getCookie()?.userid) {
      localStorage.setItem('showAppAdsBanner', JSON.stringify(false));
    }
  }

  private gotoApp() {
    Toast.loading({
      message: this.$t('loading') as any,
      forbidClick: true,
    });
  }

  mounted() {
    if (myFn.getCookie()?.userid) {
      localStorage.setItem('showAppAdsBanner', JSON.stringify(this.showPopupHome));
      let item = JSON.parse(localStorage.getItem('showAppAdsBanner') as any);
      this.show = item == null ? true : false;
    } else {
      this.show = this.showPopupHome;
    }
  }
}
</script>

<style scoped>
.app-content img {
  border-radius: 5px;
}
.application-mobile-ads-banner {
  height: 75px;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: fixed;
  bottom: 50px;
}

.application-mobile-ads-banner .close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.application-mobile-ads-banner .application-mobile-ads-banner-wrapper {
  display: flex;
  width: 85%;
  height: 100%;
  margin-left: 20px;
  align-items: center;
}

.application-mobile-ads-banner .app-content {
  display: flex;
  align-items: center;
  position: relative;
}

.application-mobile-ads-banner .app-content p {
  display: block;
  font-size: 12px;
  padding-left: 7px;
  color: white;
  text-align: left;
  line-height: 1;
}

.application-mobile-ads-banner .app-cta {
  position: absolute;
  right: 10px;
  top: 30px;
}

.application-mobile-ads-banner .app-cta button {
  font-size: 11px;
  width: auto;
  height: 25px;
}
</style>