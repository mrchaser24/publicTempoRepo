<template>
  <div class="user-info change-pwd">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :pageTitle="'设置登陆密码'"
    />
    <div class="content">
      <div class="content-wrapper">
        <van-cell-group class="link_user top">
          <div class="title">
            新密码
          </div>
          <van-field
            v-model="pasd1"
            label=""
            maxlength="12"
            type="password"
            center
            placeholder="请输入6-12位字母或数字"
            :rules="[{ required: true, message: '请输入6-12位字母或数字' }]"
          />
          <div class="title">
            确认新密码
          </div>
          <van-field
            v-model="pasd2"
            label=""
            maxlength="12"
            type="password"
            center
            placeholder="请再次输入新密码"
            :rules="[{ required: true, message: '请再次输入新密码' }]"
          />
        </van-cell-group>
        <div class="btn-submit">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="onSubmit"
            >确定</van-button
          >
        </div>
      </div>
    </div>
    <a-dialog ref="dialog" class="prompt" :width="70" @onSure="onSure" :height="25"></a-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from '@/components/common/Nav.vue'
import ADialog from '@/components/common/ADialog.vue'

@Component({
  components: {
    Nav,
    ADialog,
  },
})
export default class ChangePwd extends Vue {
  private pasd1: string = ''
  private pasd2: string = ''

  get getThemeColor() {
    return this.$store.state.themeColor
  }
  private onSure(type: String) {
    if (type == 'UserInfo') {
      this.$router.push({ name: 'UserInfo' })
    }
  }
  private onSubmit(values: any) {
    if (this.pasd1.length < 6 || this.pasd1.length > 12) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '密码输入格式不正确')
      return
    }

    if (this.pasd2.length < 6 || this.pasd2.length > 12) {
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('警告', '密码输入格式不正确')
      return
    }

    let pra = {
      OldPass:this.pasd1,
      Password:this.pasd2
    }

    this.Apis.changePassword(pra).then((data: any) => {
      if(data.state === 1 && data.message == "用户未登录"){
        let aDialog: any = this.$refs['dialog']
        aDialog.showDialog('警告', data.message,1)
        return;
      }
      else if(data.state === 1){
        let aDialog: any = this.$refs['dialog']
        aDialog.showDialog('警告', data.message)
        return;
      }
      let aDialog: any = this.$refs['dialog']
      aDialog.showDialog('恭喜', '修改成功','UserInfo')
    });
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/changepwd.less";
</style>