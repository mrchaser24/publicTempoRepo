<template>
  <div class="message-center">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :pageTitle="'消息中心'"
    />
    <div class="content">
      <div class="content-wrapper">
        <van-tabs v-model="activeTab" animated @click="changeTab">
          <van-tab v-for="(tabItem, tabIndex) in tabItems"
            :key="tabIndex"
            :title="tabItem">

            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-if="tabIndex === 2"
                v-model="loading"
                :finished="finished"
                finished-text=""
                @load="onLoad">
                  <div class="content-wrap"
                    v-for="(content, index) in messageData"
                    :key="index"
                    @click="goPage('Message', content)">
                    <div class="cont-left">
                      <van-image
                        width="45"
                        height="45"
                        :src="require('@/assets/icons/System_default.png')"/>
                    </div>
                    <div class="cont-right">
                      <div class="top-label">
                        <span class="title" :class="{ active: content.status == 'unread' }">系统消息</span>
                        <span class="date">{{content.date}}</span>
                      </div>
                      <div class="mes-type">{{content.type}}:</div>
                      <div class="message">{{content.message}}</div>
                      <span class="check-details-btn">查看详情</span>
                    </div>
                  </div>
              </van-list>
            </van-pull-refresh>

          </van-tab>
        </van-tabs>
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
export default class MessageCenter extends Vue {
  private activeTab?: number = 2;
  private list?: any = [];
  private loading?: boolean = false;
  private finished?: boolean = false;
  private refreshing?: boolean = false;
  private tabItems?: any[] = [
    '回复',
    '点赞',
    '系统'
  ];
  private messageData?: any = [];

  private changeTab(val: any) {
    // select tab
  }

  private onLoad() {
      setTimeout(() => {

        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
      
        this.messageData = [
          { date: '2021.01.26 18:24:31', type:'尊敬的小黄用户', message:'您购买的一个月黄会员已经生效, 万部高清影片任君', status: 'unread' },
          { date: '2021.01.26 18:24:31', type:'邀请成功, 福利到账!', message:'尊敬的小黄用户, 您邀请的好友【二狗狗】已成功注', status: 'read' },
          { date: '2021.01.26 18:24:31', type:'开业大吉, 小黄邀您看片!', message:'为回馈广大用户, 小黄特赠送您一月尊贵会员, 全站', status: 'read' },
          { date: '2021.01.26 18:24:31', type:'邀请成功, 福利到账!', message:'尊敬的小黄用户, 您邀请的好友【二狗狗】已成功注', status: 'read' },
          { date: '2021.01.26 18:24:31', type:'开业大吉, 小黄邀您看片!', message:'为回馈广大用户, 小黄特赠送您一月尊贵会员, 全站', status: 'read' },
        ];

        this.loading = false;
        this.finished = true;
      }, 1000)
  }

  private onRefresh() {
    this.finished = false;
    this.loading = true;
    this.onLoad();
  }

  private goPage(url: string, params: any) {
    this.$router.push({ name: url, params: { params }});
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/messagecenter.less";
</style>