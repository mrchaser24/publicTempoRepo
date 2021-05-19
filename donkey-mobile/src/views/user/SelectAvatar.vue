<template>
  <div class="select-avatar">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :confirmText="'确定'"
      :pageTitle="'选择头像'"
      @confirm="confirmAvatar"
    />
    <div class="content">
      <div class="content-wrapper">

        <div class="image-block">
          <van-cell-group class="title-block">
            <van-cell title="男神" :clickable="false"></van-cell>
          </van-cell-group>
          <div class="image-list">
            <van-grid :border="true" :column-num="6" :gutter="10">
              <van-grid-item
                v-for="(item, index) in 24"
                :key="index"
                :class="{selected: selectedAvatarMen === index}"
                @click="avatarMen(index)">
                <van-icon v-if="selectedAvatarMen === index" class="icon-check" name="success" size="13" color="#fff" />
                <img width="100%" height="100%" :src="require(`@/assets/icons/profile/men${index}.png`)" alt="">
              </van-grid-item>
            </van-grid>
          </div>
        </div>

        <div class="image-block">
          <van-cell-group class="title-block">
            <van-cell title="女生" :clickable="false"></van-cell>
          </van-cell-group>
          <div class="image-list">
            <van-grid :border="true" :column-num="6" :gutter="10">
              <van-grid-item
                v-for="(item, index) in 24"
                :key="index"
                :class="{selected: selectedAvatarGirl === index}"
                @click="avatarGirl(index)">
                <van-icon v-if="selectedAvatarGirl === index" class="icon-check" name="success" size="13" color="#fff" />
                <img width="100%" height="100%" :src="require(`@/assets/icons/profile/girl${index}.png`)" alt="">
              </van-grid-item>
            </van-grid>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from '@/components/common/Nav.vue'

@Component({
  components: {
    Nav,
  },
})
export default class SelectAvatar extends Vue {
  private selectedAvatarMen?: any = 0;
  private selectedAvatarGirl?: any = -1;
  private userID?: any = null;

  get userDetails() {
    return this.$store.state.userDetails;
  }

  private avatarMen(index: number) {
    this.selectedAvatarGirl = -1;
    this.selectedAvatarMen = index;
  }

  private avatarGirl(index: number) {
    this.selectedAvatarMen = -1;
    this.selectedAvatarGirl = index;
  }

  private confirmAvatar() {
    this.UpdateMemberInfo();
  }

  private async UpdateMemberInfo() {
    let params = {
      Equal_member_info_id: this.userID,
      avatar: this.selectedAvatarMen > -1 ? 'men'+this.selectedAvatarMen+'.png' : 'girl'+this.selectedAvatarGirl+'.png',
    };

    await this.Apis.UpdateMemberInfo(params).then((data: any) => {
      // console.log('updated', data);
    });
  
  }

  private memberInfo() {
    let params = {
     
    };

    this.Apis.MemberInfo(params).then((data: any) => {
       if (data.state == 0) {
                this.$store.dispatch("setUserDetails", data.data);
                this.userID = data.data.id
            } else {
                localStorage.removeItem("userinfo");
            }
    });

  }

  private async created() {
    await this.memberInfo();
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/selectavatar.less";
</style>