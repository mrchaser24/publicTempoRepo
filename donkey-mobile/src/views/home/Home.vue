<template>
    <div class="home">
        <Nav style="position:fixed;top:0;width:100%" :userDetails="userDetails" />
        <div class="content c-content">
            <van-tabs v-model="tabActive" @change="change" @click="changeTab" animated :swipeable="true">
                <van-tab
                    v-for="(tabItem, tabIndex) in tabItems"
                    :title="tabItem.describe"
                    :key="tabIndex"
                >
                    <DonRecommended :category="tabItems" :index="tabIndex" :data="tabItem"></DonRecommended>
                </van-tab>
                <!-- <template #nav-right>
                    <span class="icon-right">
                        <van-image
                            height="16px"
                            width="16px"
                            :src="require('@/assets/icons/home_more.png')"
                        />
                    </span>
                </template>-->
            </van-tabs>
        </div>
        <Footer :activeFooterItem="'Home'" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import Footer from "@/components/common/Footer.vue";
import DonRecommended from "@/components/home/DonRecommended.vue";
// import Blockbusters from "@/components/home/Blockbusters.vue";
// import Uncoded from "@/components/home/Uncoded.vue";
// import HomeMadeSelfie from "@/components/home/HomeMadeSelfie.vue";
// import JapaneseAV from "@/components/home/JapaneseAV.vue";

@Component({
    components: {
        Nav,
        Footer,
        DonRecommended
        // Blockbusters,
        // Uncoded,
        // HomeMadeSelfie,
        // JapaneseAV
    }
})
export default class Home extends Vue {
    private tabActive?: number = 0;
    private tabItems?: any[] | any = [];

    private userDetails: any = {};

    private changeTab(index: number) {
        this.tabActive = index;
    }

    private memberInfo() {
        let params = {};

        this.Apis.MemberInfo(params).then((data: any) => {
            if (data.state == 0) {
                this.userDetails = data.data;
              
                this.$store.dispatch("setUserDetails",data.data);
                 localStorage.setItem("userinfo",JSON.stringify(data.data));
            } else {
                localStorage.removeItem("userinfo");
            }
        });
    }
    private change(e:any){
       
         this.$store.dispatch('setcurrentIndex', e)
    }
    private async created() {
        await this.memberInfo();
        this.tabActive = this.$store.state.currentIndex
        this.Apis.Category({
            Equal_app_category_category_type: "movie",
            Equal_app_category_status: 1
        }).then((data: any) => {
            this.tabItems = data;
        });
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/home.less";
.c-content{
    position: fixed;
    width: 100%;
    top:47px;

}
</style>