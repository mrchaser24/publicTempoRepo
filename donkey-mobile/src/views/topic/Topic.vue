<template>
    <div class="topic">
        <Nav
     
            :showSearch="false"
            :showUserIcon="false"
            :pageTitle="pageTitle"
            :showThemeBtn="false"
            :showMsgBtn="false"
            :rightText="'切换'"
            :goToURL="showPopup = true"
            @changeTopic="changeTopic"
        />
        <div class="topic-con c-content" >
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="Finished"
                    error-text="no data"
                    @load="loadData()"
                >
                    <TopicListItem v-for="(item, key) in topicList" :key="key" :itemData="item" />
                      <van-empty v-if="empty" image="https://img01.yzcdn.cn/vant/custom-empty-image.png" description="没有数据" />
                </van-list>
               
            </van-pull-refresh>
        </div>
        <!-- <TopicPopup
      v-if="showPopup"
      :isShow="showPopup"
        @close-popover="closePopup($event)"/>-->
        <Footer :activeFooterItem="'Topic'" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import Footer from "@/components/common/Footer.vue";
import TopicListItem from "@/components/topic/TopicListItem.vue";
import TopicPopup from "@/components/topic/TopicPopup.vue";

@Component({
    components: {
        Nav,
        Footer,
        TopicListItem,
        TopicPopup
    }
})
export default class Topic extends Vue {
    private pageTitle?: String = "全部专题";
    private topicList?: any[] = [];
    private showPopup?: boolean = false;
    private loading?: boolean = false;
    private finished?: boolean = false;
    private refreshing?: boolean = false;
    private curData: any = {};
    private empty:boolean = false
    private async loadData() {
        let data = await this.Apis.GetTheme({
            Equal_app_theme_category_ids: this.curData.id
        });
        if (this.refreshing) {
            this.topicList = [];
            this.refreshing = false;
        }
        this.topicList = data;
        this.empty = data.length == 0
        this.loading = false;
        this.finished = true;
    }
    private closePopup(v: boolean) {
        this.showPopup = v;
    }
    private onRefresh(): void {
        this.finished = false;
        this.loading = false;
        this.loadData();
    }
    private changeTopic(data: any) {
        this.curData = data
        this.pageTitle = data.describe;
        this.refreshing = true;
        
        this.loadData();
    }
     
    
    created() {}
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/topic.less";
.c-content{
    position: fixed;
    width: 100%;
    top:47px;
    
}
</style>