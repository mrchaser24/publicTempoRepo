<template>
  <div class="nav">
    <div class="nav-wrapper">

      <div class="left">
        <div class="user-icon" v-if="showUserIcon">
          <img
            v-if="userDetails.avatar"
            @click="goPage('User')"
            height="34px"
            width="35px"
            :src="require(`@/assets/icons/profile/${userDetails.avatar}`)" />

             <img
            v-else
            @click="goPage('User')"
            height="34px"
            width="35px"
            :src="require(`@/assets/icons/default.png`)" />
        </div>
        <div v-if="showBackIcon" class="back-icon">
          <van-icon name="arrow-left" @click="goBackPage()" size="22"/>
        </div>
      </div>

      <div class="center">
        <div v-if="showSearch" class="is-input">
          <van-search
            v-model="searchValue"
            shape="round"
            placeholder="搜索您感兴趣的内容">
              <template #left-icon>
                <van-icon @click="goVideoList" name="search" size="22" color="#bbbbbf"/>
              </template>
            </van-search>
        </div>
        <div v-else class="is-text">
          <span>{{ pageTitle }}</span>
        </div>
      </div>

      <div class="right">
        <div v-if="showThemeBtn">
          <van-image
            v-if="getThemeColor == 'day'"
            class="theme-icon day"
            height="23px"
            width="23px"
            @click="changeTheme()"
            :src="require('@/assets/icons/night-icon.png')" />
          <van-image
            v-if="getThemeColor == 'night'"
            class="night"
            height="23px"
            width="23px"
            @click="changeTheme()"
            :src="require('@/assets/icons/night-icon.png')" />
        </div>
        <div v-if="showMsgBtn">
          <van-image
            height="23px"
            width="23px"
            @click="message()"
            :src="require('@/assets/icons/message.png')" />
        </div>
        <div v-if="showHeadIcon">
          <van-image
            height="23px"
            width="23px"
            @click="customerService()"
            :src="require('@/assets/icons/customer-service-icon.png')" />
        </div>
        <div v-if="rightText" class="dropdown">
          <van-dropdown-menu>
            <van-dropdown-item :title="rightText" ref="item">
              <van-grid :border="true" :column-num="4" :gutter="10">
                <van-grid-item
                  v-for="(topicItem, topicKey) in topicOptions"
                  :key="topicKey"
                  @click="changeTopic(topicKey)"
                  :class="{active: activeTopicItem == topicKey}">
                  <span>{{ topicItem.describe }}</span>
                </van-grid-item>
              </van-grid>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
        <div v-if="confirmText" >
          <span class="right-text" @click="confirm()">{{ confirmText }}</span>
        </div>
        <div class="delete-icon" v-if="showDelete">
          <van-image
            v-if="showDeleteIcon"
            @click="deleteItems()"
            height="22px"
            width="21px"
            :src="require('@/assets/icons/download/delete.png')" />
          <span v-if="!showDeleteIcon" @click="deleteItems()">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Toast } from 'vant';

@Component({
  components: {},
})

export default class Nav extends Vue {
  @Prop({ type: Boolean, default: true }) readonly showSearch!: boolean;
  @Prop({ type: Boolean, default: true }) readonly showUserIcon!: boolean;
  @Prop({ type: Boolean, default: true }) readonly showThemeBtn!: boolean;
  @Prop({ type: Boolean, default: true }) readonly showMsgBtn!: boolean;
  @Prop({ type: Boolean, default: false }) readonly showHeadIcon!: boolean;
  @Prop({ type: Boolean, default: false }) readonly showBackIcon!: boolean;
  @Prop({ type: String, default: '' }) readonly pageTitle!: string;
  @Prop({ default: "" }) private goToURL!: any;
  @Prop({ type: String, default: '' }) private rightText!: string;
  @Prop({ type: String, default: '' }) private confirmText!: string;
  @Prop({ type: Boolean, default: false }) readonly isCallBack!: boolean;
  @Prop({ type: Boolean, default: false }) readonly showDelete!: boolean;
  @Prop({ type: Object, default: () => { } }) readonly userDetails!: object;
  private showDeleteIcon?: boolean = true;
  private searchValue?: string = '';
  private activeTopicItem?: number = 0;
  private topicOptions?: any = []


  mounted(){
    if(this.rightText){
      this.Apis.Category({
        Equal_app_category_category_type:'movie',
        Equal_app_category_status:1
      }).then((data:any)=>{
        this.topicOptions = [{describe:'全部专题'},...data]
      })
    }
  }
  get getThemeColor() {
    return this.$store.state.themeColor;
  }

  private changeTheme() {
    if (this.getThemeColor === 'day') {
      this.$store.dispatch('setThemeColor', 'night')
    } else {
      this.$store.dispatch('setThemeColor', 'day')
    }
  }

  private message() {
    console.log("message");
  }

  private customerService() {
    console.log("customerService");
  }

  private goPage(url: string) {
    this.$router.push({ name: url })
  }

  private goBackPage() {
    if(!this.isCallBack){
      this.$router.back();
    }
    else{
      console.log("自定义点击事件出发")
      this.$emit("myEvent")
    }
    
  }

  private changeTopic(index: number) {
    this.activeTopicItem = index;
    console.log("点击")
    let _item = this.$refs.item as any;
    _item.toggle();

    this.$emit('changeTopic',this.topicOptions[index])
  }
  private goVideoList(){
    if(!this.searchValue){
      Toast('请输入感兴趣的内容')
    }
      localStorage.setItem('jumpvideo',JSON.stringify( {
                title: "搜索",
                keywords:this.searchValue
            }))

        this.$router.push({
            name: "videolist",
           
        });
  }
  @Emit('confirm')
  private confirm() {
    this.$router.back();
  }

  @Emit('deleteItems')
  private deleteItems() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/common/nav.less";

</style>