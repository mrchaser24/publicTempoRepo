<template>
    <div class="feedback">
        <Nav
            :showSearch="false"
            :showUserIcon="false"
            :showMsgBtn="false"
            :showHeadIcon="false"
            :showBackIcon="true"
            :showThemeBtn="false"
            :pageTitle="'意见反馈'"
        />
        <div class="content">
            <div class="content-wrapper">
                <van-field
                    class="message"
                    v-model="message"
                    rows="1"
                    autosize
                    label
                    type="textarea"
                    maxlength="500"
                    placeholder="小黄驴竭诚为您服务，您的建议对我们来讲至关重要！"
                    show-word-limit
                />
                <van-button
                    @click="submit"
                    :disabled="message ? false : true"
                    class="fb-btn"
                    type="primary"
                    size="large"
                >提交</van-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import { Toast } from "vant";

@Component({
    components: {
        Nav
    }
})
export default class Feedback extends Vue {
    private message: String = "";

    private submit() {
        let userinfo: any = localStorage.getItem("userinfo");
        if (!userinfo) {
            Toast("请先登录");
            return;
        }
        userinfo = JSON.parse(userinfo);
      
        if (!this.message.length) {
            return;
        }
        this.Apis.Feedback({
          member_id:userinfo.id,
          content:this.message
        }).then((res: any) => {
             Toast("反馈成功");
        });
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/feedback.less";
</style>