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
        />-->
        <div class="item-bg">
            <div class="item-left" @click="onClickReturn">
                <img :src="require(`@/assets/images/login/account.png`)" alt />
                <div class="item-left-txt">返回登陆</div>
            </div>
            <div class="item-right">
                <div class="item-right-title">注册</div>
                <div class="content-wrapper">
                    <div class="item-input">
                        <img
                            :style="{ padding: '0px 0px 0px 10px' }"
                            :src="require(`@/assets/images/login/account.png`)"
                            alt
                        />
                        <van-field class="item-field" v-model="account" label placeholder="用户名" />
                    </div>
                    <div class="item-input">
                        <img
                            :style="{ padding: '0px 0px 0px 10px' }"
                            :src="require(`@/assets/images/login/password.png`)"
                            alt
                        />
                        <van-field
                            class="item-field"
                            v-model="password"
                            label
                            type="password"
                            placeholder="密码"
                        />
                    </div>
                    <div class="item-input">
                        <img
                            :style="{ padding: '0px 0px 0px 10px' }"
                            :src="require(`@/assets/images/login/password.png`)"
                            alt
                        />
                        <van-field
                            class="item-field"
                            v-model="password1"
                            label
                            type="password"
                            placeholder="确认密码"
                        />
                    </div>
                    <div class="item-input">
                        <img
                            :style="{ padding: '0px 0px 0px 10px' }"
                            :src="require(`@/assets/images/login/tuiguang.png`)"
                            alt
                        />
                        <van-field class="item-field" v-model="tgKey" label placeholder="推广码（可不填）" />
                    </div>
                    <van-button
                        class="item-btn"
                        round
                        block
                        type="info"
                        native-type="submit"
                        @click="onSubmit"
                    >确定</van-button>
                </div>
            </div>
        </div>
        <div class="item-foot"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import { Dialog, Toast } from "vant";

@Component({
    components: {
        Nav
    }
})
export default class Regist extends Vue {
    private message?: String = "";
    private account: String = "";
    private password: string = "";
    private password1: string = "";
    private tgKey: String = "";
    private is_visitor: string = "2";
    private onClickReturn() {
        console.log("onClickReturn");
        this.$router.push({ name: "Login" });
    }

    private getQueryVariable(variable: any) {
       let  query:any =  window.location.href.split("?")
       if(query.length> 1){
          var vars = query[1].split("&");
           for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
       }
       
       
        return false;
    }
    private onSubmit() {
        console.log("onSubmit");
        
        if (this.password != this.password1) {
            Toast.fail("两次密码输入不一致");
            return;
        }
        let pData = {
            userName: this.account,
            userPassword: this.password,
            is_visitor: this.is_visitor
        };
        this.Apis.userRegister(pData).then((data: any) => {
            // this.$store.dispatch('setUserDetails', data[0])
            console.log(data);
            if (data.state == 1) {
                Toast.fail(data.message);
                return;
            }
            Toast.success(data.message);
            this.$router.push({ name: "Login" });
        });
    }

    private async created() {
        console.log(this.$route.params);
        if (this.$route.params && this.$route.params.is_visitor) {
            this.is_visitor = this.$route.params.is_visitor;
        }
        let code: any = this.getQueryVariable("code");
        console.log(code);
        if (code) {
            this.tgKey = code;
        }
    }
}
</script>

<style scoped>
.item-box {
    background-image: url("../../assets/images/login/BG.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.item-bg {
    width: 330px;
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
    background-color: rgb(0, 0, 0, 0.2);
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
    background-color: rgb(0, 0, 0, 0.5);
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
    margin-top: 30px;
    margin-bottom: 20px;
    opacity: 0.5;
}
.theme-color-night .nav /deep/ {
    background: rgba(0, 0, 0, 0);
}
.van-button--info{
  background-color:#6a6af6;
  border-color: #6a6af6;
}
.item-foot {
    background-image: url("../../assets/images/login/logo.png");
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
.van-toast.van-toast--middle{
    width: 80%!important;
}
</style>
