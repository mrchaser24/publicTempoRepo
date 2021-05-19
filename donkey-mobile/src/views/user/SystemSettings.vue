<template>
    <div class="system-settings">
        <Nav
            :showSearch="false"
            :showUserIcon="false"
            :showMsgBtn="false"
            :showHeadIcon="false"
            :showBackIcon="true"
            :showThemeBtn="false"
            :pageTitle="'系统设置'"
        />
        <div class="content">
            <div class="content-wrapper">
                <van-cell-group class="link_user top">
                    <van-cell center title="语言设置" @click="showLang = true">
                        <template #right-icon>
                            <span class="value">{{ currLang }}</span>
                            <van-icon name="arrow" class="arrow" />
                        </template>
                    </van-cell>

                    <van-cell center title="官方邮箱">
                        <template #right-icon>
                            <span class="value">{{ userDetails.email }}</span>
                            <span class="btn">{{ '复制' }}</span>
                        </template>
                    </van-cell>

                    <van-cell center title="清除缓存" @click="showClearCache()">
                        <template #right-icon>
                            <span class="value no-arrow">{{ '0.00K' }}</span>
                        </template>
                    </van-cell>

                    <van-cell center title="版本号">
                        <template #right-icon>
                            <span class="value no-arrow">{{ '1.0.0' }}</span>
                        </template>
                    </van-cell>
                </van-cell-group>

                <div class="btn-submit">
                    <van-button
                        round
                        block
                        type="info"
                        native-type="submit"
                        @click="onLoginOut"
                    >退出登录</van-button>
                </div>
            </div>
        </div>

        <van-popup v-model="showLang" round position="bottom">
            <div class="lang-settings">
                <van-picker
                    show-toolbar
                    :columns="langItems"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                    @change="onChange"
                    item-height="45"
                >
                    <template #cancel>
                        <div class="left-text">取消</div>
                    </template>
                    <template #title>
                        <div class="center-text">选择语言</div>
                    </template>
                    <template #confirm>
                        <div class="right-text">确定</div>
                    </template>
                </van-picker>
            </div>
        </van-popup>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import Footer from "@/components/common/Footer.vue";
import { Dialog, Toast } from "vant";

@Component({
    components: {
        Nav,
        Footer
    }
})
export default class SystemSettings extends Vue {
    private showLang?: boolean = false;
    private showCLearCache?: boolean = false;
    private currLang?: string = "";
    private selectedLang?: string = "";
    private userDetails?: any = {
        email: "XXXXXXXX@gmail.com"
    };
    private langItems?: any = ["简体中文", "English"];

    get getThemeColor() {
        return this.$store.state.themeColor;
    }

    private mounted() {
        this.currLang = this.langItems[0];
    }

    private onCancel() {
        this.currLang = this.currLang;
        this.showLang = false;
    }

    private onConfirm() {
        this.currLang = this.selectedLang;
        this.showLang = false;
    }

    private onChange(picker: any, values: any) {
        this.selectedLang = values;
    }

    private showClearCache() {
        Dialog.confirm({
            title: "提示",
            message: "是否清除缓存？",
            cancelButtonText: "取消",
            confirmButtonText: "清除",
            className: `clear-cache ${this.getThemeColor}`,
            width: "calc(100% - 120px)"
        })
            .then(() => {
                // on confirm
            })
            .catch(() => {
                // on cancel
            });
    }

    private onLoginOut() {
        Dialog.confirm({
            title: "提示",
            message: "是否退出登录？",
            cancelButtonText: "取消",
            confirmButtonText: "确定",
            className: `clear-cache ${this.getThemeColor}`,
            width: "calc(100% - 120px)"
        })
            .then(() => {
                // on confirm
                this.Apis.userLoginOut({}).then(async(data: any) => {
                    console.log(data);
                    if (data.state == 0) {
                        Toast.success(data.message);
                       
                    }
                     this.$store.dispatch("setUserDetails", {});
                     localStorage.removeItem('userinfo')
                       this.Apis.deleteToken();
                       await this.Apis.changeToken();
                     this.$router.push({ name: "User" });
                      
                    // : "退出成功"
                    // state: 0
                });
            })
            .catch(() => {
                // on cancel
            });
    }
}
</script>

<style lang="less">
@import "../../assets/styles/global.less";
@import "../../assets/styles/systemsettings.less";
</style>