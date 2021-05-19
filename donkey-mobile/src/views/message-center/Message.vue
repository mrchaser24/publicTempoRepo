<template>
  <div class="message">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :pageTitle="'消息详情'"
    />
    <div class="content">
      <div class="content-wrapper">
        <span class="title">邀请成功, 福利到账!</span>
        <span class="date">2021.01.26 18:24:31</span>
        <p class="message">尊敬的小黄用户, 您邀请的好友【二狗】已成功注册, 为了感谢您的概分享, 小黄特送您3次观影体验, 请愉快的看片吧!</p>
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
export default class Message extends Vue {
  private messageData?: any = {};
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/message.less";
</style>