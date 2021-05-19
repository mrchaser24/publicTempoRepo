<template>
  <div class="user-info authentication">
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
          </div>
          <van-field
            v-model="username"
            label=""
            show-word-limit
            center
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
          <div class="title">
            请输入图形验证码
          </div>
          <van-row class="van-cell">
            <van-col span="17">
              <van-field
                v-model="code"
                label=""
                maxlength="6"
                center
                placeholder="请输入图形验证码"
                :rules="[{ required: true, message: '请输入图形验证码' }]"
              />
            </van-col>
            <van-col span="8">
              <van-button
                :style="{ margin: 'auto' }"
                class="get-code"
                size="small"
                round
                block
                type="info"
                @click="onGetCodes"
                >{{ codes }}</van-button
              >
            </van-col>
          </van-row>
          <div class="title">
            请输入验证码
          </div>
          <van-row>
            <van-col span="18">
              <van-field
                v-model="password"
                label=""
                maxlength="6"
                center
                placeholder="请输入验证码"
                :rules="[{ required: true, message: '请输入验证码' }]"
              />
            </van-col>
            <van-col span="6">
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
import Nav from '@/components/common/Nav.vue'
import ADialog from '@/components/common/ADialog.vue'

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
  private codes: any = null
  private code: any = null
  // @Prop({ type: String, default: '' }) readonly title!: string;

  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private onSubmit(values: any) {
    if (this.username === '') {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入手机号码')
      return
    }

    if (this.password === '') {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入验证码')
      return
    }

    if (this.code === '') {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '请输入图形验证码')
      return
    }

    if (this.title == '身份验证') {
      this.$router.push({ name: 'ChangePwd' })
    }
  }

  private onGetCode() {
    console.log('获取验证码')
    if (this.code !== this.codes) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog(
        '',
        '图形验证码错误,无法获取手机验证码，请刷新后重新输入'
      )
      return
    }
    this.setCrono(60)
  }

  //获得随机树
  private onGetCodes() {
    this.codes = this.getRandomArbitrary(-4) //随机四位数
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
        this.password = this.getRandomArbitrary(-6)
      }
    }, 1000)
  }

  private getRandomArbitrary(num: number) {
    return Math.random()
      .toString()
      .slice(num)
  }

  private async created() {
    this.codes = this.getRandomArbitrary(-4) //随机四位数
    this.Crono = '获取验证码'
    let ipone = this.$route.params.ipone.replace(
      /(\d{3})\d{4}(\d{4})/,
      '$1****$2'
    )
    this.username = ipone
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/authentication.less";
</style>