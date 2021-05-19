<template>
    <div>
        <van-pull-refresh class="don-recommended" v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :immediate-check="false"
                :offset="10"
                finished-text="我是有底线的"
                @load="loadData"
            >
                <div v-if="index == 0">
                    <div class="notice">
                        <van-notice-bar scrollable :text="noticeText">
                            <template #left-icon>
                                <span class="notice-icon"></span>
                            </template>
                        </van-notice-bar>
                    </div>

                    <div class="swipe-image">
                        <van-swipe :autoplay="3000" indicator-color="white">
                            <van-swipe-item v-for="(image, index) in banners" :key="index">
                                <a :href="image.url">
                                    <van-image height="150px" width="100%" :src="image.pic" />
                                </a>
                            </van-swipe-item>
                        </van-swipe>
                    </div>

                    <div class="image-block" v-for="(item,index) in cateList" :key="index">
                        <div>
                            <van-cell-group class="title-block">
                                <van-cell :title="item.title" :clickable="false">
                                    <template #default>
                                        <span @click="goVideoList(index)">更多</span>
                                    </template>
                                    <template #right-icon>
                                        <van-icon name="arrow" size="16" color="#b0b0b0" />
                                    </template>
                                </van-cell>
                            </van-cell-group>
                            <div class="image-list">
                                <ImageDropLets :items="item.list" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="image-list">
                    <ImageDropLets :items="images" :empty="isempty" />
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ImageDropLets from "@/components/home/ImageDropLets.vue";
@Component({
    components: {
        ImageDropLets
    }
})
export default class DonRecommended extends Vue {
    private noticeText?: string =
        "【下载最新小黄驴App】精彩福利享不停！无码福利免费看，邀请";
    @Prop() private index: any;
    @Prop() private data: any;
    @Prop() private category: any;
    private loading?: boolean = false;
    private finished?: boolean = false;
    private refreshing?: boolean = false;
    private images?: any = [];
    private isempty: boolean = false;
    private banners: any[] = [require("@/assets/icons/banner.png")];
    private page: number = 0;
    private cateList: any = [];
    mounted() {
        if (this.index == 0) {
            this.Apis.AppAdv({
                Equal_app_adv_belong_area: "banner",
                Equal_app_adv_status: 1
            }).then((data: any) => {
                this.banners = data;
            });
        }

        this.getMain();
        this.loadData();
    }
    private async getMain() {
        if (this.index != 0) {
            return;
        }
        for (let i = 0; i < this.category.length; i++) {
            let data = await this.Apis.MovieList({
                category_id: this.category[i].id,
                count: 6,
                page: 1
            });
            if (data.data.length) {
                let temp: any = {};
                temp.id = this.category[i].id;
                temp.title = this.category[i].title;
                temp.list = data.data;
                this.cateList.push(temp);
                this.loading = false;
                this.refreshing = false;
            }
        }
    }
    private loadData() {
        if (this.index == 0) {
            this.loading = false;
            this.finished = true;
            return;
        }
        this.page++;
        this.Apis.MovieList({
            category_id: this.data.id,
            count: 10,
            page: this.page
        }).then((data: any) => {
            if (this.refreshing) {
                this.images = [];
                this.refreshing = false;
            }
            this.images = this.images.concat(data.data);
            this.loading = false;
            if (data.data.length < 10) {
                this.isempty = this.images <= 0;
                this.finished = true;
            }
        });
    }
    private onRefresh(): void {
        this.finished = false;
        this.loading = false;
        this.page = 0;
        this.getMain();
        this.loadData();
    }
    private goPage(url: string) {
        this.$router.push(url);
    }
    private goVideoList(index: number) {
        localStorage.setItem(
            "jumpvideo",
            JSON.stringify({
                title: this.cateList[index].title,
                category_id: this.cateList[index].id
            })
        );

        this.$router.push({
            name: "videolist"
        });
    }
}
</script>

<style lang="less" scoped>
.image-list {
    padding-top: 10px;
}
@import "../../assets/styles/global.less";
@import "../../assets/styles/components/DonRecommended.less";
</style>