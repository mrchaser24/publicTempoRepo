<template>
    <div class="user-info change-name">
        <Nav
            :showSearch="false"
            :showUserIcon="false"
            :showMsgBtn="false"
            :showHeadIcon="false"
            :showBackIcon="true"
            :showThemeBtn="false"
            :pageTitle="'修改昵称'"
            :confirmText="'确定'"
            @confirm="confirmAvatar"
        />
        <div class="content">
            <div class="content-wrapper">
                <van-cell-group class="link_user top">
                    <div class="title">
                        昵称
                        <div class="asterisk">*</div>
                    </div>
                    <van-field
                        v-model="username"
                        label
                        maxlength="10"
                        show-word-limit
                        center
                        placeholder="请输入昵称"
                        :rules="[{ required: true, message: '请输入昵称' }]"
                    />
                </van-cell-group>
                <div class="rule-note">
                    <div>昵称规则：</div>
                    <div>1. 昵称不支持数字 字母以及特殊字符</div>
                    <div>2. 昵称仅支持修改一次</div>
                </div>
            </div>
        </div>
        <a-dialog ref="dialog" width="70" @onSure="onSure" height="25"></a-dialog>
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
export default class ChangeName extends Vue {
    private username: string = "";
    private password: string = "";
    private userID?: any = null;

    get getThemeColor() {
        return this.$store.state.themeColor;
    }

    private confirmAvatar() {
        console.log("点击操作");
        this.UpdateMemberInfo();
    }

    private UpdateMemberInfo() {
        let params = {
            Equal_member_info_id: this.userID,
            nick_name: this.username
        };

        this.Apis.UpdateMemberInfo(params).then((data: any) => {
            console.log("updated", data);
            let aDialog: any = this.$refs["dialog"];
            aDialog.showDialog("恭喜", "更新成功");
        });
    }

    private memberInfo() {
        let params = {};

        this.Apis.MemberInfo(params).then((data: any) => {
            if (data.state == 0) {
                this.$store.dispatch("setUserDetails", data.data);
                this.userID = data.data.id
            } else {
                localStorage.removeItem("userinfo");
            }
        });
    }

    private async created() {
        await this.memberInfo();
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/changename.less";
</style>