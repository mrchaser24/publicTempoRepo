<template>
  <div class="item-box">
    <!-- <img :src="require(`@/assets/images/login/BG.png`)" alt="" /> -->
    <!-- <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :pageTitle="''"
    /> -->
    <div class="item-bg">
      <div class="item-left" @click="onClickReturn">
        <img :src="require(`@/assets/images/login/account.png`)" alt="" />
        <div class="item-left-txt">新用户注册</div>
      </div>
      <div class="item-right">
        <div class="item-right-title">登陆</div>
        <div class="content-wrapper">
          <div class="item-input">
            <img
              :style="{ padding: '0px 0px 0px 10px' }"
              :src="require(`@/assets/images/login/account.png`)"
              alt=""
            />
            <!-- <input value="account" /> -->
            <van-field
              class="item-field"
              v-model="account"
              label=""
              placeholder="请输入用户名"
            />
          </div>
          <div class="item-input">
            <img
              :style="{ padding: '0px 0px 0px 10px' }"
              :src="require(`@/assets/images/login/password.png`)"
              alt=""
            />
            <van-field
              class="item-field"
              v-model="password"
              type="password"
              label=""
              placeholder="请输入密码"
            />
          </div>
          <div class="item-pwd">
            <van-checkbox v-model="isSavePwd">
              记住密码
              <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
              </template>
            </van-checkbox>
            <div class="item-forgetbtn" @click="onForget">忘记密码</div>
          </div>
          <van-button
            class="item-btn"
            round
            block
            type="info"
            native-type="submit"
            @click="onSubmit"
            >确定</van-button
          >
          <div class="item-forgetbtn" :style="{'text-align': 'center', 'margin-bottom': '10px'}" @click="onYK">我先逛逛</div>
        </div>
      </div>
    </div>
    <div class="item-foot"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/common/Nav.vue'
import { Dialog, Toast } from 'vant';
@Component({
  components: {
    Nav,
  },
})
export default class Login extends Vue {
  private message?: string = ''
  private account: string = ''
  private password: string = localStorage.getItem('_password') || ''
  private tgKey: String = ''
  private isSavePwd: Boolean = false

  private activeIcon: String = require(`@/assets/images/login/isSavePwd0.png`)
  private inactiveIcon: String = require(`@/assets/images/login/isSavePwd1.png`)
  private onClickReturn() {
    console.log('onClickReturn')
    this.$router.push({ name: 'Regist' })
  }
  private onSubmit() {
    console.log('onSubmit')
    let pData = {
      userName : this.account,
      userPassword: this.password
    }
    this.Apis.userLogin(pData).then((data: any) => {
      // this.$store.dispatch('setUserDetails', data[0])
      console.log(data);
      if(data.state == 1){
        Toast.fail(data.message);
        return;
      }
    let dz = data.dz_data

    localStorage.setItem('dzdata',JSON.stringify(dz))


      Toast.success(data.message);
      if(this.isSavePwd == true){
        localStorage.setItem('_account', pData.userName);
        localStorage.setItem('_password', pData.userPassword);
      }else{
          localStorage.removeItem('_account');
        localStorage.removeItem('_password');
      }
      this.$router.push({ name: 'Home' })
    });
  }
  private onForget(){
    console.log('onForget')
    this.$router.push({ name: 'changePwdMain' })
  }

  private onYK(){
    this.$router.push({ name: 'Home' })
  }

  private async created() {
    this.account = localStorage.getItem('_account')||'';
    this.password = localStorage.getItem('_password')||'';
    if(this.account){
      this.isSavePwd = true
    }
  }

  

}
</script>

<style scoped>
.item-box {
  background-image: url('../../assets/images/login/BG.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.item-bg {
  width: 330px;
  /* height: 300px; */
  border-radius: 15px;
  display: flex;
  /* background-color: rgb(0, 0, 0, 0.5); */
}

.item-left {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-radius: 15px 0px 0px 15px;
  background-color: rgb(0, 0, 0, 0.5);
}
.item-left-txt {
  color: white;
  font-weight: 400;
  font-size: 18px;
  width: 20px;
  text-align: center;
}

.item-right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  height: 100%;
  border-radius: 0px 15px 15px 0px;
  background-color: rgb(0, 0, 0, 0.2);
}
.item-right-title {
  color: white;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.item-input {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 25px;
  margin: 10px;
  background: rgb(256, 256, 256, 0.3);
}
.item-field {
  background: rgb(256, 256, 256, 0);
}
.item-btn {
  width: 92%;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  opacity: 0.5;
}
.theme-color-night .nav /deep/ {
  background: rgba(0, 0, 0, 0);
}

.item-foot {
  background-image: url('../../assets/images/login/logo.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 300px;
  height: 100px;
  margin-top: 100px;
  margin-bottom: 100px;
}

::v-deep .van-field__control {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 15px;
  font-weight: 300;
  line-height: inherit;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: none;
}

::v-deep ::-webkit-input-placeholder {
  color: #ffffff;
  font-weight: 300;
}

.img-icon {
  width: 18px;
}
::v-deep .van-checkbox__label {
  margin-left: 8px;
  color: white;
  line-height: 20px;
  font-size: 10px;
  font-weight: 300;
}
.item-forgetbtn {
  color: white;
  font-size: 10px;
  font-weight: 300;
}
.item-pwd {
  display: flex;
  /* width: 90%; */
  justify-content: space-between;
  margin: 10px 15px 10px 20px;
}
</style>
