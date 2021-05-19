<template>
  <div>
    <!-- <div class="header"></div> -->
    <div class="main">
      <div class="panel">
        <div class="switch-local-box pos-menu">
          <LangSwitcher />
        </div>
        <div class="login">
          <form id="loginForm" name="loginForm" action="" method="post">
            <input type="hidden" name="type" value="1" />
            <div class="form_t">
              <span class="fl user_t">用户登录</span>
            </div>
            <div class="info username">
              <label>账号</label
              ><input
                type="text"
                v-model="userName"
                placeholder="请输入您的账号"
              />
            </div>
            <div class="info password">
              <label>密码</label
              ><input
                type="password"
                v-model="userPassword"
                placeholder="您的密码"
              />
            </div>
            <div class="info code">
              <label>验证码</label>
              <input
                type="text"
                name="code"
                autocomplete="off"
                placeholder="验证码"
                v-model="qrCode"
              />
              <img
                :src="qrCodeImg"
                class="verify-code"
                @click="getAuthCode()"
                title="看不清？点击更换一张验证图片"
              />
            </div>

            <div class="control">
              <p>登录</p> 
              <input type="button" value="登录" placeholder="登录" @click="login" />
            </div>
          </form>
        </div>

        <div class="left_adv">
          <div class="appqr-wrapper">
            <div class="appqrcode">
              <img id="qr-code" src="data:image/png;base64,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" />
              <div class="text">手机扫码安装<br />苹果安卓APP</div>
            </div>
            <div id="barcodeURL" class="appdlurl"></div>
          </div>
          <div class="appqr" id="qr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { UserService } from '@/application/User/Service/UserService';
import { UserLoginMessage } from '@/application/User/Message/UserLoginMessage';

import '@/assets/css/login2.css'
import '@/assets/css/footer.css'

import LangSwitcher from '@/components/LangSwitcher.vue'

@Component({
  components: {
    LangSwitcher
  }
})
export default class Home extends Vue {
  private activeLocale: any = this.$i18n.locale;
  private qrCode?: any = ''
  private qrCodeImg?: any = ''
  private userName: String = ''
  private userPassword: String = ''
  private langList: any = [
    { 
      title: 'zh',
      name: 'zn' 
    },
    { 
      title: 'en', 
      name: 'en' 
    },
  ];

  /*
    * @Author: chase 
    * @LastAuthor: keanu
    * @Param null
    * @Return array || []
    * @Date: 2021-04-19
    * @Description: declare modal on localStorage
  */
  private login() {
    if (this.userName == '') {
       alert('账号或密码错误。')
    } else if (this.userPassword == '') {
      alert('账号或密码错误。')
    } else if (this.qrCode == '') {
      alert('验证码错误，请重新输入。')
    } else {
      if (this.userName.length < 5 || this.userName.length > 10) {
        alert("用户名必须大于3个字符且小于10个字符")
      } else if (this.userPassword.length < 6 || this.userPassword.length > 16) {
        alert('密码必须大于6个字符且小于16个字符');
      } else { 
        let params: any = new UserLoginMessage();
        params.userName = this.userName;
        params.userPassword = this.userPassword;

        UserService.UserLoginMessage(params).then((data: any) => {
          if (data.status == true) {
            localStorage.setItem('login-notice1','true')
            this.$router.push(
              {
                name: 'home',
                params: { lotterytype: 'EveryColor', lotteryid: '1' } 
              })
            localStorage.setItem('UserInfo', JSON.stringify(data.data))
          } else {
            alert(data.message);
          }
        })

      }

    }

  }
  private created(){
    localStorage.setItem('login-notice1','false')
  }

  /*
    * @Author: keanu 
    * @LastAuthor: reggie
    * @Param: null
    * @Return: null
    * @Date: 2021-04-19 17:16:55
    * @Description: switch language
  */
  private switchLocale (locale: any){
    this.$i18n.locale = locale;
  }

}
</script>
<style>
.login .code img {
  cursor: pointer;
  float: right;
  margin: 9px 15px 0 0;
  width: 83px;
  height: 28px;
}
.panel {
  position: relative;
}
.panel .switch-local-box {
  position: absolute;
  top: 15px;
  right: 40px;
  display: flex;
  overflow: unset;
}
.panel .switch-local-box>div {
  cursor: pointer;
  font-size: 13px;
}
.panel .ivu-select-single .ivu-select-selection {
  background: #1b4075;
  border: none;
}
.panel .ivu-select-head-with-prefix.ivu-select-selected-value {
  color: #fff;
}
</style>
