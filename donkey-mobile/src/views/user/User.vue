<template>
    <div class="user">
        <Nav :showSearch="false" :showUserIcon="false" :showMsgBtn="false" :showHeadIcon="true" />
        <van-cell center title label icon class="top_user">
            <template #right-icon>
                <van-icon name="arrow" class="arrow" @click="goLink('UserInfo')" />
            </template>
            <template #title>
                <div v-if="userDetail.account">
                    <span class="name">{{userDetail.nick_name }}</span>
                </div>
                <div class="login-btn" v-else @click="goLink('Login')">登录/注册</div>
                <van-tag v-if="userDetail.account" class="custom_info">LV4</van-tag>
            </template>
            <template #label>
                <span v-if="userDetail.account" class="w-bg">小黄驴尊贵会员</span>
                <div v-else style="margin-top:5px;margin-bottom:5px">登录后获取更多精彩内容哦</div>
                <span v-if="userDetail.account" class="donkey-val">驴币：{{userDetail.gold}}</span>
            </template>
            <template #icon>
                <img
                    v-if="userDetail.avatar"
                    alt="user_avatar"
                    class="user_avatar"
                    :src="require(`@/assets/icons/profile/${userDetail.avatar}`)"
                />
                <img
                    v-else
                    alt="user_avatar"
                    class="user_avatar"
                    :src="require(`@/assets/icons/default.png`)"
                />
            </template>
        </van-cell>
        <van-grid class="icone_info_user" :column-num="3">
            <van-grid-item
                icon
                v-for="(item, key) in list"
                :key="key"
                :text="item.name"
                @click="goLink(item.path)"
            >
                <template #icon>
                    <img
                        alt="user_avatar"
                        width="26px"
                        height="24px"
                        :src="require(`@/assets/icons/${item.icon}.png`)"
                    />
                </template>
            </van-grid-item>
        </van-grid>
        <van-cell center title label="小币币换大xing福" icon class="wallet_section" @click="noLink">
            <template #right-icon>
                <van-icon name="arrow" class="arrow" />
            </template>
            <template #title>
                <span>黄驴钱包</span>
            </template>
        </van-cell>
        <van-grid class="icone_info_user2" :column-num="3">
            <van-grid-item
                icon
                v-for="(item, key) in list2"
                :key="key"
                :text="item.name"
                @click="goLink(item.path)"
            >
                <template #icon>
                    <img
                        alt="user_avatar"
                        width="30px"
                        height="37px"
                        :src="require(`@/assets/icons/${item.icon}.png`)"
                    />
                </template>
            </van-grid-item>
        </van-grid>
        <van-cell-group class="link_user">
            <van-cell center title="App下载" icon @click="downApp" class="app">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            :class="'icon-' + getThemeColor"
                            height="20px"
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'app-icon' : 'App download_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell>
            <van-cell center title="驴友交流群" icon class="lv-zone" @click="goPotaot()">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'lv-zone-icon' : 'group_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell>
            <!-- <van-cell center title="驴友飞机群" icon class="lv-zone" @click="goPotaot()">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'telegram_day' : 'telegram_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell> -->
            <van-cell
                center
                title="系统设置"
                icon
                is-link
                :to="{ name: 'SystemSettings' }"
                class="setting"
            >
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'setting-icon' : 'setting_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell>
            <van-cell center title="意见反馈" icon is-link to="/feedback" class="feedback">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'feedback-icon' : 'feedback_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell>
            <van-cell center title="关于我们" icon is-link to class="about">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
                <template #icon>
                    <div class="img-wrap">
                        <img
                            alt="user_avatar"
                            :src="
                require(`@/assets/icons/${
                  getThemeColor == 'day' ? 'about-icon' : 'about us_night'
                }.png`)
              "
                        />
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <Footer :activeFooterItem="'User'" />
        <!-- <UserPopup
      :isShow="showSharePopup"
      v-if="showSharePopup"
      @hide-popup="showSharePopup = false"
        />-->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// @ is an alias to /src
// import Header from '@/components/common/Nav.vue'
import Footer from "@/components/common/Footer.vue";
// import UserPopup from '@/components/User/UserSharePopup.vue'
import Nav from "@/components/common/Nav.vue";
import { Toast, Dialog } from "vant";

@Component({
    components: {
        // Header,
        Footer,
        // UserPopup
        Nav
    }
})
export default class User extends Vue {
    private showSharePopup?: boolean = false;
    private userID?: any = null;
    private userDetail: any = {};
    private list?: any = [
        // {
        //     icon: "download-icon",
        //     name: "离线缓存",
        //     path: "Download"
        // },
        {
            icon: "my-collection-icon",
            name: "我的收藏",
            path: "Collection"
        },
        {
            icon: "history-record-icon",
            name: "历史记录",
            path: "HistoryRecord"
        },
        {
            icon: "share-icon",
            name: "我的帖子",
            path: "/userxxx"
        }
    ];
    private list2?: any = [
        {
            icon: "promote-icon",
            name: "我要推广",
            path: "Promote"
            // path: 'spread',
        },
        {
            icon: "recharge-icon",
            name: "充值中心",
            path: "Recharge"
        },
   
        {
            icon: "message-icon",
            name: "消息中心",
            path: "MessageCenter"
        }
    ];

    get getThemeColor() {
        return this.$store.state.themeColor;
    }

    get userDetails() {
        console.log(this.$store.state.userDetails);
        return this.$store.state.userDetails;
    }

    private showPopup() {
        this.showSharePopup = true;
    }
    private goPotaot(){
        let win:any = window
        win.location.href = 'https://lynnconway.me/joinchat/Ewje__urvmhWQU1yUV-LCw'
    }
    private downApp(){
          let win:any = window
        win.location.href = 'http://app.xhltv.vip'
    }
    private goLink(link: string) {
        // let arr = ['UserInfo',"Download","Collection","HistoryRecord","Recharge","Promote"]

        let arr = ["Download", "Collection"];
        if (arr.indexOf(link) > -1) {
            if (!this.userDetail.password) {
                this.$router.push("/regist");
                return;
            } 
        }
        arr = ["Download"];
        if (arr.indexOf(link) > -1) {
            Dialog.alert({
                title: "提示",
                message: "【本内容开通会员后可以缓存】",
                theme: "round-button",
                confirmButtonText: "去开通"
            }).then(() => {
                // on close
            });
            return;
        }
        arr = ["Download", "HistoryRecord"];
        if (arr.indexOf(link) > -1) {
            if (!this.userDetail.password) {
                this.$router.push("/regist");
                return;
            }
        }

        if (link == "UserInfo") {
            if (this.userDetail.is_visitor == "1") {
                this.$router.push({
                    name: "Regist",
                    params: { is_visitor: "1" }
                });
            }
        }
        if (link == "/user") {
            alert("暂未开放");
            return;
        }else if(link == "/userxxx"){
               this.$router.push("/MyArticle");
                return;
        }
        this.$router.push({ name: link });
    }

    private noLink() {
        alert("暂未开放");
    }
    private memberInfo() {
        let params = {};

        this.Apis.MemberInfo(params)
            .then((data: any) => {
                if (data.state == 0) {
                    this.userDetail = data.data;
                    this.$store.dispatch("setUserDetails", data.data);
                } else {
                    localStorage.removeItem("userinfo");
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    private async created() {
        await this.memberInfo();
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/user.less";
.login-btn {
    border-radius: 50px;

    border: 1px solid #905ef9;
    color: #905ef9;
    align-self: flex-start;
    justify-self: flex-start;
    width: 5rem;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.6rem;
}
</style>