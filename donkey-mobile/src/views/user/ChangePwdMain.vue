<template>
  <div class="user-info change-pwd">
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
            用户名
          </div>
          <van-field
            v-model="username"
            label=""
            show-word-limit
            center
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <div class="title">
            手机号码
          </div>
          <van-row>
            <van-col span="18">
              <van-field
                v-model="ipone"
                label=""
                maxlength="12"
                center
                placeholder="请输入手机号码"
                :rules="[{ required: true, message: '请输入手机号码' }]"
              />
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
import Nav from '@/components/common/Nav.vue'
import ADialog from '@/components/common/ADialog.vue'
@Component({
  components: {
    Nav,
    ADialog,
  },
})
export default class ChangePwdMain extends Vue {
  private username: string = ''
  private ipone: string = ''
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
    if (this.username === '') {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入用户账号')
      return
    }

    if (this.ipone === '' || this.ipone.length < 11) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入手机号或者手机号不对')
      return
    }
    console.log('ipone is ' + this.ipone)
    //通过验证进入到身份验证界面
    this.$router.push({
      name: 'Authentication',
      params: { title: '身份验证', ipone: this.ipone },
    })
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
    console.log(this.$route.params.title)
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/changepwd.less";
</style>