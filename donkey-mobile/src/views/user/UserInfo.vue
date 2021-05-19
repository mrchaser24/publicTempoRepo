<template >
    <div class="user-info">
        <Nav
            @myEvent="doSomething"
            :showSearch="false"
            :showUserIcon="false"
            :showMsgBtn="false"
            :showHeadIcon="false"
            :showBackIcon="true"
            :showThemeBtn="false"
            :pageTitle="'个人信息'"
            :isCallBack="true"
        />
        <div class="content">
            <div class="content-wrapper">
                <van-cell-group class="link_user top">
                    <van-cell center title="头像" is-link :to="{ name: 'SelectAvatar' }">
                        <template #right-icon>
                            <div class="avatar-con">
                                <img
                                    v-if="userDetails.avatar"
                                    alt="user_avatar"
                                    class="user_avatar"
                                    :src="require(`@/assets/icons/profile/${userDetails.avatar}`)"
                                />
                            </div>
                            <van-icon name="arrow" class="arrow" />
                        </template>
                    </van-cell>
                    <!-- this.$router.push({ name: url }); -->
                    <van-cell center title="昵称" is-link to="ChangeName">
                        <template #right-icon>
                            <span
                                class="value"
                                v-if="userDetails.nick_name"
                            >{{ userDetails.nick_name }}</span>
                            <van-icon name="arrow" class="arrow" />
                        </template>
                    </van-cell>

                    <van-cell center is-link to class="age">
                        <template #right-icon>
                            <!-- <span class="value">{{ '18' }}</span> -->
                            <van-field
                                readonly
                                clickable
                                label="年龄"
                                :value="age"
                                placeholder="选择年龄"
                                @click="showPicker = true"
                            />
                            <van-icon name="arrow" class="arrow" />
                            <van-popup v-model="showPicker" round position="bottom">
                                <van-picker
                                    title="选择年龄"
                                    show-toolbar
                                    confirm="确定"
                                    cancel="取消"
                                    :columns="ageColumns"
                                    @cancel="showPicker = false"
                                    @confirm="onConfirm"
                                />
                            </van-popup>
                        </template>
                    </van-cell>

                    <van-cell center title is-link to class="gender">
                        <!-- <span class="value">{{ '保密' }}</span> -->
                        <template #right-icon>
                            <van-field
                                readonly
                                clickable
                                label="性别"
                                :value="userDetails.sex ? genderColumns[userDetails.sex - 1] : ''"
                                placeholder="选择性别"
                                @click="showGenderPicker = true"
                            />
                            <van-icon name="arrow" class="arrow" />
                            <van-popup v-model="showGenderPicker" round position="bottom">
                                <van-picker
                                    title="选择性别"
                                    show-toolbar
                                    confirm="确定"
                                    cancel="取消"
                                    :columns="genderColumns"
                                    @cancel="showGenderPicker = false"
                                    @confirm="onGenderConfirm"
                                />
                            </van-popup>
                        </template>
                    </van-cell>
                </van-cell-group>

                <div class="bottom-title">
                    <span>账户与安全</span>
                </div>

                <van-cell-group class="link_user bottom">
                    <van-cell center title="我的账号" is-link to>
                        <template #right-icon>
                            <span class="value no-arrow">{{ userinfo.account }}</span>
                        </template>
                    </van-cell>

                    <van-cell
                        center
                        title="手机号"
                        is-link
                        :to="{ name: 'ChangePhone', params: { title: '绑定手机号' } }"
                    >
                        <template #right-icon>
                            <div class="text-g">
                                <span v-if="!userinfo.mobile" class="pos-top">{{ '绑定手机号获观影次数' }}</span>
                                <span class="value">{{userinfo.mobile?userinfo.mobile: '未绑定' }}</span>
                            </div>
                            <van-icon name="arrow" class="arrow" />
                        </template>
                    </van-cell>

                    <van-cell
                        center
                        title="密码修改"
                        is-link
                        :to="{ name: 'changePwdMain', params: { title: '密码修改' } }"
                    >
                        <template #right-icon>
                            <van-icon name="arrow" class="arrow" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>
        <a-dialog ref="dialog" :width="70" @onSure="onSure" :height="25"></a-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import ADialog from "@/components/common/ADialog.vue";

@Component({
    components: {
        Nav,
        ADialog
    }
})
export default class UserInfo extends Vue {
    private age?: number = 18;
    private gender?: String = "男";
    private userinfo:any = {}
    private ageColumns?: any[] = [
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        28,
        29,
        30
    ];
    private genderColumns?: any[] = ["男", "女"];
    private showPicker?: boolean = false;
    private showGenderPicker?: boolean = false;
    private userID?: any = null;

    get userDetails() {
        return this.$store.state.userDetails;
    }

    private onSure() {
        this.$router.push({ name: "Login" });
    }

    private onConfirm(value: any) {
        this.age = value;
        this.showPicker = false;
        let params = {
            Equal_member_info_id: this.userinfo.id,
            age: value
        };
        this.UpdateMemberInfo(params);
    }

    private onGenderConfirm(value: any) {
        this.gender = value;
        this.showGenderPicker = false;
        let params = {
            Equal_member_info_id: this.userinfo.id,
            sex: value == "男" ? 1 : 2
        };
        this.UpdateMemberInfo(params);
    }

    private doSomething() {
        this.$router.push({ name: "User" });
    }

    private UpdateMemberInfo(params: any) {
        this.Apis.UpdateMemberInfo(params).then((data: any) => {
            if (data.state === 1) {
                let aDialog: any = this.$refs["dialog"];
                aDialog.showDialog("警告", data.message, 1);
                return;
            }
            this.memberInfo();
        });
    }

    private memberInfo() {
        let params = {};

        this.Apis.MemberInfo(params).then((data: any) => {
            if (data.state == 0) {
                this.$store.dispatch("setUserDetails", data.data);
                this.age = data.data.age;
                this.userinfo = data.data
            } else {
                localStorage.removeItem("userinfo");
            }
        });
    }

    private mounted() {
        console.log(this.userDetails);
    }

    private async created() {
       
        await this.memberInfo();
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/userinfo.less";
</style>