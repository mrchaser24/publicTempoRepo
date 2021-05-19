<template>
  <div class="user-info change-phone">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :pageTitle="title"
    />
    <div class="content">
      <div class="content-wrapper">
        <van-cell-group class="link_user top">
          <div class="title">
            手机号码
            <!-- <div
              :style="{
                color: 'red',
                padding: '3px',
              }"
            >
              *
            </div> -->
          </div>
          <van-field
            v-model="username"
            label=""
            show-word-limit
            center
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
          <div class="title code-title">
            请输入验证码
            <!-- <div
              :style="{
                color: 'red',
                padding: '3px',
              }"
            >
              *
            </div> -->
          </div>
          <van-row>
            <van-col span="17">
              <van-field
                v-model="password"
                label=""
                maxlength="6"
                center
                placeholder="请输入验证码"
                :rules="[{ required: true, message: '请输入验证码' }]"
              />
            </van-col>
            <van-col span="8">
              <van-button
                :style="{ margin: 'auto' }"
                size="small"
                round
                block
                type="info"
                @click="onGetCode"
                >{{ Crono }}</van-button
              >
            </van-col>
          </van-row>
        </van-cell-group>
        <div class="btn-submit">
          <van-button round block type="info" @click="onSubmit"
            >确定</van-button
          >
        </div>
      </div>
    </div>
    <a-dialog class="prompt" ref="dialog" :width="70" :height="25"></a-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ADialog from '@/components/common/ADialog.vue'
import Nav from '@/components/common/Nav.vue'

@Component({
  components: {
    Nav,
    ADialog,
  },
})
export default class ChangePhone extends Vue {
  private username: string = ''
  private password: string = ''
  private title: string = this.$route.params.title
  private cronoInterval: any = null
  private Crono: any = null
  // @Prop({ type: String, default: '' }) readonly title!: string;

  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private onSubmit(values: any) {
    console.log('submit', values)
    console.log(this.$route)
    console.log(this.title)
    if (this.username === '' || this.username.length < 11) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入手机号码')
      return
    }
  }
  private onGetCode() {
    console.log('获取验证码')
    if (this.username === '' || this.username.length < 11) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入手机号码')
      return
    }
    this.setCrono(60)
  }

  private setCrono(i: any) {
    this.Crono = i + '秒后发送'
    i = i - 1
    this.cronoInterval = setInterval(() => {
      if (i > 0) {
        this.Crono = i + '秒' + '后发送'
        i = i - 1
      } else {
        this.Crono = '获取验证码'
        clearInterval(this.cronoInterval)
        //随机一个6位数
        this.password = this.getRandomArbitrary()
      }
    }, 1000)
  }

  private getRandomArbitrary() {
    return Math.random()
      .toString()
      .slice(-6)
  }

  private async created() {
    this.Crono = '获取验证码'
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/changephone.less";
</style>