<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="main password">
                    <table class="table user_info pass_panel input_panel">

                        <thead>
                            <tr>
                                <th colspan="2">修改密码</th>
                            </tr>
                        </thead>
                        <form></form>
                        <tbody>
                            <tr>
                                <th>旧密码</th>
                                <td><input v-model="oldPassword" id="oldPassword" type="password"></td>
                            </tr>
                            <tr>
                                <th>新密码</th>
                                <td><input id="password" v-model="NewPassword" type="password">＊6-20字符必须由大小写字母和数字组合组成</td>
                            </tr>
                            <tr>
                                <th>确认密码</th>
                                <td><input id="ckPassword" v-model="ConfirmNewPassword" type="password"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="control"><input type="button" class="button" value="确定" @click="UpdatePassword()"> <input type="reset" class="button" value="重置"></div>

                </div>
            </div>
        </div>
        <Notice />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Layouts/Header.vue"
import Footer from "@/components/Layouts/Footer.vue"
import Left from "@/components/Layouts/Left.vue"
// import { UserService } from '@/core/UserCore/Service/UserServer';
import Notice from '@/components/Layouts/Notice.vue'

@Component({
    components: {
        Header,
        Footer,
        Left,
        Notice
    }
})
export default class ChangePassword extends Vue {
    get colorSetting() {
  // console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
  private  oldPassword: String = '';
  private  NewPassword: String = '';
  private  ConfirmNewPassword: String = '';
     private UpdatePassword() {
    if (this.oldPassword == '') {
      console.log("old password is incorrect");
    } else if (this.NewPassword == '') {
      alert("new password is empty");
    } else if (this.ConfirmNewPassword !=this.NewPassword) {
      alert("confirm password not correct");
    } else {
      let params: any = {
        OldPass: this.oldPassword,
        Password: this.NewPassword,
        _token: this.token,
      };
      
      // UserService.UpdatePass(params).then((response=> {
      //   if (response.state == 0) {
      //     alert(response.message);
      //     this.oldPassword=''
      //     this.NewPassword=''
      //     this.ConfirmNewPassword=''
      //   }
      //   else{
      //    alert(response.message);
      //   }
      // }))
    }
  }
    get token() {
    return this.$store.state['_token'] ? this.$store.state['_token'] : localStorage.getItem("_token");
  }
}
</script>
