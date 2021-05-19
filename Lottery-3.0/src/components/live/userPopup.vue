<template>
  <van-popup
    v-model="showPopup"
    round
    class="user-popup half-pop"
    :close-on-click-overlay="false"
    closeable
    @close="hidePopOver()"
  >
    <div class="pop-up-container">
      <div class="top-wrap">
        <div class="image-wrap">
          <div class="prof-img">
            <img
              height="90"
              width="78"
              class="user"
              src="@/assets/user/face_001.png"
            />
            <img
              class="bg"
              src="@/assets/user/frame-wings.png"
            />
          </div>
          <div class="icon-num">
            <img
              class="icone"
              width="19"
              height="18"
              src="@/assets/customerservice/icon_mic.png"
            />
            <p>10</p>
          </div>
        </div>
      </div>
      <div class="bottom-wrap">
        <div class="name-description">
          <!-- <h3>{{ anchorDetails.name }}</h3> -->
          <div class="icon-wrap">
            <img
              class="gender"
              width="20"
              height="20"
              :src="
                gender == 1
                  ? require('@/assets/user/icon_sex_female_1.png')
                  : require('@/assets/user/icon_sex_male_1.png')
              "
            />
          </div>
          <div class="details">
            <p>{{ $t('Name') }}: {{anchorDetails.name}}</p>
          </div>
        </div>
        <div class="btn-group">
          <van-button class="green" type="primary" size="small">{{
            tags
          }}</van-button>
        </div>
        <!-- <div class="val-group">
          <span
            >{{ follow }}
            <p>关注</p></span
          >
          <span
            >{{ fans }}
            <p>粉丝</p></span
          >
        </div> -->
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

import { AnchorInfoCoreService } from "@/core/AnchorCore/Service/AnchorInfoCoreService"; 
import { AnchorInfoSearchCoreMessage } from '@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage';
// import { UserInfoCoreService } from '@/core/UserCore/Service/UserInfoCoreService';
// import { LiveFollowCoreService } from "../../core/LiveCore/Service/LiveFollowCoreService";
// import { LiveAnchorTypeCoreService } from "../../core/LiveCore/Service/LiveAnchorTypeCoreService";
// import { LiveRecordCoreService } from '@/core/LiveCore/Service/LiveRecordCoreService';
// import { UserRecordCoreService } from "@/core/UserCore/Service/UserRecordCoreService";
import { myFn } from "@/utils/fn";

@Component({
  components: {},
})
export default class userPopup extends Vue {
  @Prop({ type: Boolean, default: false }) private isShow?: boolean;
  @Prop({ type: String, default: null }) private userid?: string;
  private anchorDetails: any = {};

  private image?: string = ""
  private name?: string = ""
  private id?: number = 0
  private showPopup?: any = ""
  private gender?: any = ""
  private follow?: any = ""
  private fans?: any = ""
  private sendAomunt?: any = ""
  private recieveAoumnt?: any = ""
  private tags?: any = ""
  private anchorId?: any = ""
  private UserInfoData: any[] = [];

  private hidePopOver() {
    this.$emit("hide-popup", false)
  }

  private AnchorInfo() {
    let params: any = new AnchorInfoSearchCoreMessage();
    params.equal_id_anchorInfo = this.$route.params.id;
    AnchorInfoCoreService.Search(params).then((data) => {
      this.anchorDetails = data[0];
    })
  }

  private mounted() {
    this.showPopup = this.isShow
    this.AnchorInfo();
  }

}
</script>

<style scoped>
.half-pop {
  /* width: 40%;
    top: 50%;
    left: 75%; */
  height: 475px;
  transform: translateX(-50%) translateY(-50%);
}
</style>
