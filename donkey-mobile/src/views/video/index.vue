<template>
    <div class="body-content">
        <div class="video-warp">
            <van-popup v-model="showTop" position="top" :overlay="false">
                <div class="video-mask">
                    <img src="../../assets/playing/mask.png" alt />
                    <div class="mask-infos">
                        <img @click="back()" src="../../assets/playing/back_white.png" alt />
                        <div class="video-title">{{videoData.title}}</div>
                    </div>
                </div>
            </van-popup>

            <div id="mse"></div>
        </div>
        <div
            class="video-info"
            @click="gtouchstart()"
            :class="{'video-info-night':themeColor=='night'}"
        >
            <div class="vip-ad" @click="showPopup = true">
                <img src="../../assets/playing/VIP banner.png" alt />
            </div>
            <div class="title" :class="{nighttitle:themeColor=='night'}">{{videoData.title}}</div>
            <!-- {{videoData.click_num}} -->
            <van-row gutter="10">
                <van-col span="5">
                    <div class="gray-small">
                        <img class="small-img" src="../../assets/playing/play.png" alt />
                        <span>{{videoData.click_num}}</span>
                    </div>
                </van-col>
                <van-col span="5">
                    <div class="gray-small">
                        <img class="small-img" src="../../assets/playing/omment.png" alt />
                        <span>{{videoData.comment_num}}条</span>
                    </div>
                </van-col>
                <van-col span="5">
                    <div class="gray-small">
                        <span>{{Apis.format(videoData.create_time) || 'xxxx.xx.xx'}}</span>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="gray-small">
                        <span>番号：{{videoData.fan}}</span>
                    </div>
                </van-col>
            </van-row>
            <div class="tags-warp">
                <div class="tag" v-for="(item,index) in tags" :key="index">{{item}}</div>
            </div>

            <div class="btns">
                <van-row type="flex" justify="space-between">
                    <van-col span="4">
                        <div class="gray-btns" @click="changeLike">
                            <img
                                class="icon-img"
                                v-if="like"
                                src="../../assets/playing/like_pre.png"
                                alt
                            />
                            <img
                                class="icon-img"
                                v-else
                                src="../../assets/playing/like_def.png"
                                alt
                            />
                            <div v-if="!like">喜欢</div>
                            <div v-else>{{videoData.up_num}}</div>
                        </div>
                    </van-col>
                    <van-col span="4">
                        <div class="gray-btns" @click="changeDislike">
                            <img
                                class="icon-img"
                                v-if="dislike"
                                src="../../assets/playing/unlike_pre.png"
                                alt
                            />
                            <img
                                class="icon-img"
                                v-else
                                src="../../assets/playing/unlike_def.png"
                                alt
                            />
                            <div v-if="!dislike">不喜欢</div>
                            <div v-else>{{videoData.down_num}}</div>
                        </div>
                    </van-col>
                    <van-col span="4">
                        <div class="gray-btns" @click="changeFavor">
                            <img
                                class="icon-img"
                                v-if="favor"
                                src="../../assets/playing/collection_pre.png"
                                alt
                            />
                            <img
                                class="icon-img"
                                v-else
                                src="../../assets/playing/collection_def.png"
                                alt
                            />
                            <div v-if="!favor">收藏</div>
                            <div v-else>1</div>
                        </div>
                    </van-col>
                    <van-col span="4">
                        <div class="gray-btns" @click="changeDown">
                            <img
                                class="icon-img"
                                v-if="down"
                                src="../../assets/playing/download_pre.png"
                                alt
                            />
                            <img
                                class="icon-img"
                                v-else
                                src="../../assets/playing/download_def.png"
                                alt
                            />
                            <div>缓存</div>
                        </div>
                    </van-col>
                    <van-col span="4">
                        <div id="tag" style="display:none">{{copyString}}</div>
                        <div
                            data-clipboard-action="copy" data-clipboard-target="#tag"
                            class="gray-btns copy-btn"
                            @click="doShare"
                        >
                            <img class="icon-img" src="../../assets/playing/share_def.png" alt />
                            <div>分享</div>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </div>

        <div class="bottom-info">
            <van-tabs v-model="tabActive" @click="changeTab" animated :swipeable="true">
                <van-tab title="黄驴推荐" :key="0">
                    <div>
                        <ImageDropLets style="margin-top:5px;" :items="images" />
                    </div>
                </van-tab>
                <van-tab title="驴友评论" :key="1">
                    <div class="commnt-list">
                        <div
                            class="comment"
                            :class="{commentninght:themeColor=='night'}"
                            v-for="(item,index) in commentList" :key="index"
                        >
                            <div class="head">
                                <img :src="item.avatar" alt />
                            </div>
                            <div class="content" :class="{itemsnight:themeColor=='night'}">
                                <div class="name">{{item.nick_name}}</div>
                                <div class="time">{{handleDate(item.create_time)}}</div>
                                <div class="desc">{{item.content}}</div>
                            </div>
                        </div>
                        <van-empty
                            v-if="!commentList.length"
                            class="custom-image"
                            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
                            description="暂无评论"
                        />
                    </div>
                </van-tab>
                <template #nav-right>
                    <div class="right-tabs">
                        <div class="input-warp">
                            <div class="input-back">
                                <van-field placeholder="老司机也要流评论" v-model="message" />
                            </div>
                        </div>
                        <van-button round type="info" size="mini" @click="sendMessage">发送</van-button>
                    </div>
                </template>
            </van-tabs>
        </div>
        <van-popup v-model="showPopup">
            <div class="alert">
                <img v-if="themeColor=='day'" src="../../assets/playing/alert_day.png" alt />
                <img v-if="themeColor=='night'" src="../../assets/playing/alert_night.png" alt />
                <div class="infos">
                    <div class="top-title">
                        <div></div>
                        <div class="infos-title">剩余观看次数:5</div>
                        <div @click="showPopup = false">
                            <van-icon name="cross" size="20" color="#CEC2FC" />
                        </div>
                    </div>
                    <div class="items" :class="{itemsnight:themeColor=='night'}">
                        <div class="item">
                            <div class="content">成为vip 畅享全站高清影片</div>
                            <div class="itembtn" @click="golink('/recharge/index')">
                                <img src="../../assets/playing/buy1.png" alt />
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">邀请好友获取观影次数</div>
                            <div class="itembtn" @click="golink('/recharge/index')">
                                <img src="../../assets/playing/invite.png" alt />
                            </div>
                        </div>
                        <div class="item noboder">
                            <div class="content">充值购买高清观影次数</div>
                            <div class="itembtn" @click="golink('/recharge/index')">
                                <img src="../../assets/playing/recharge.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Player from "xgplayer";
import ImageDropLets from "@/components/home/ImageDropLets.vue";
import { Toast } from "vant";
@Component({
    components: {
        ImageDropLets
    }
})
export default class Video extends Vue {
    private tabActive?: number = 0;
    private tabItems?: any[] | any = [
        { text: "黄驴推荐", name: "DonRecommended" },
        { text: "高清无码", name: "Uncoded" }
    ];
    private images?: any[] = ["img1", "img2", "img3"];
    private changeTab(index: number) {
        this.tabActive = index;
    }
    private showTop: boolean = true;
    private showPopup: boolean = false;
    private themeColor: string = "";
    private message: string = "";
    private like: boolean = false;
    private favor: boolean = false;
    private dislike: boolean = false; 
    private down: boolean = false;
    private videoData: any = {};
    private tags: any = [];
    private commentList: any[] = [{ content: "" }];
    private copyString: string = "s5awd51w1s1sa236s";
    private userinfo: any = {};
    @Watch("$route")
    change(to: any, from: any) {
        this.$router.go(0);
    }

    private back() {
        this.$router.back();
    }
    private changeLike() {
        if (!this.userinfo.id) {
            Toast("请先登录");
            return;
        }

        this.Apis.MemberLikeDown({
            member_id: this.userinfo.id,
            movie_id: this.$route.params.id,
            up_down: 1
        }).then((data: any) => {
            if (data.state == 0) {
                this.like = true;
                this.dislike = false;
            } else {
                Toast(data.message);
            }
        });
    }

    private doShare() {
        this.copyString = window.location.href
        const clipboard = new Vue.prototype.clipboard(".copy-btn",{ text: () => this.copyString });
        clipboard.on("success", (e:any) => {
            Toast("复制成功,去分享给朋友吧");
        });
        clipboard.on("error", () => {
            Toast("复制失败");
        });
    }
    private changeDislike() {
        
        if (!this.userinfo.id) {
            Toast("请先登录");
            return;
        }
        this.Apis.MemberLikeDown({
            member_id: this.userinfo.id,
            movie_id: this.$route.params.id,
            up_down: 2
        }).then((data: any) => {
            
            if (data.state == 0) {
                this.like = false;
                this.dislike = true;
                 
            } else {
                if(data.message)
                Toast(data.message);
               
            }
        });
    }
    private changeFavor() {
       
        if (!this.userinfo.id) {
            Toast("请先登录");
            return;
        }
        this.Apis.AddLike({
            member_id: this.userinfo.id,
            movie_id: this.$route.params.id
        }).then((data: any) => {
           
            if (data.state == 0) {
                this.favor = !this.favor;
            } else {
                if(data.message)
                Toast(data.message);
            }
        });
    }
    private changeDown() {
        if (!this.userinfo.id) {
            Toast("请先登录");
            return;
        }

        this.Apis.MemberCache({
            member_id: this.userinfo.id,
            movie_id: this.$route.params.id
        }).then((data: any) => {
            if (data.state == 0) {
                this.down = !this.down;
                if(data.message)
                 Toast(data.message);
            } else {
                if(data.message)
                Toast(data.message);
            }
        });
    }
    private gtouchstart() {
        this.showTop = !this.showTop;
    }
    private sendMessage() {
        if (!this.userinfo.id) {
            Toast("请先登录");
            return;
        }
        if (!this.message) {
            Toast("请输入想说的骚话哟");
            return;
        }
        
        this.Apis.AddComment({
            member_id: this.userinfo.id,
            create_time: (new Date().getTime() / 1000).toFixed(0),
            movie_id: this.$route.params.id,
            content: this.message,
            up_num: 0
        }).then((data: any) => {
           
            if (data.state == 0) {
                Toast("评论成功");
                this.Apis.GetComment({
                    id: this.$route.params.id
                }).then((data: any) => {
                    this.commentList = data.data.list;
                });
            } else {
       
                if(data.message)

                Toast(data.message);
            }
        });
    }
    async mounted() {
        let josn: string = localStorage.getItem("userinfo") || "";
        if (josn) {
            this.userinfo = JSON.parse(josn);
        }

        this.themeColor = this.$store.state.themeColor;
        await this.loadData();
    }

    private golink(url: string) {
        this.$router.push(url);
    }
    async loadData() {
        this.Apis.VideoPlay({
            id: this.$route.params.id,
            user_id: this.userinfo.id,
        }).then((data: any) => {
           
            this.videoData = data.data;
            
            let player = new Player({
                id: "mse",
                autoplay: false,
                volume: 0.3,
                url: this.videoData.url,
                poster: this.videoData.cover_vertical,
                playsinline: true,
                height: 203,
                width: window.innerWidth
            });
            if (data.data.tag_arr.length) {
                this.tags = data.data.tag_arr;
            } else {
                this.tags = ["暂无标签"];
            }
            this.like = data.data.is_up;
            this.favor = data.data.is_like;
            this.down = data.data.is_cache;
            this.dislike = data.data.is_down;
        });

        this.Apis.GetComment({
            id: this.$route.params.id
        }).then((data: any) => {
            this.commentList = data.data.list;
        });
        this.Apis.GurssLike({
            id: this.$route.params.id,
            page_size: 15
        }).then((data: any) => {
            this.images = data.data;
        });
    }
    handleDate(dateTimeStamp: string) {
        if (!dateTimeStamp) return "null";
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var result = "";
        var now = new Date().getTime();
        var diffValue = now - parseInt(dateTimeStamp);
        if (diffValue < 0) {
            // console.log("时间不对劲,服务器创建时间与当前时间不同步");
            return (result = "刚刚");
        }
        var dayC: number = diffValue / day;
        var hourC: number = diffValue / hour;
        var minC: number = diffValue / minute;
        if (parseInt(dayC.toFixed(0)) > 30) {
            var timestamp: number = parseInt(dateTimeStamp);
            var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
            var date =
                d.getFullYear() +
                "-" +
                (d.getMonth() + 1) +
                "-" +
                d.getDate() +
                " " +
                d.getHours() +
                ":" +
                d.getMinutes() +
                ":" +
                d.getSeconds();
            result = "" + date;
        } else if (parseInt(dayC.toFixed(0)) > 1) {
            result = "" + parseInt(dayC.toFixed(0)) + "天前";
        } else if (parseInt(dayC.toFixed(0)) == 1) {
            result = "昨天";
        } else if (hourC >= 1) {
            result = "" + parseInt(hourC.toFixed(0)) + "小时前";
        } else if (minC >= 5) {
            result = "" + parseInt(minC.toFixed(0)) + "分钟前";
        } else result = "刚刚";
        return result;
    }
}
</script>

<style scoped>
.body-content {
    padding-bottom: 5rem;
}
.video-mask {
    position: relative;
}
.video-mask > img {
    position: absolute;
    left: 0;
    top: 0;
}
.mask-infos {
    position: relative;
    display: flex;
    align-items: center;

    padding: 1rem;
    padding-left: 10px;
}
.mask-infos > img {
    height: 1rem;
}
.mask-infos .video-title {
    color: #fff;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
}
.infos {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1rem;
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
.top-title {
    display: flex;
    justify-content: space-between;
    margin-top: -3px;
}
.items {
    margin-top: 10px;
}
.itemsnight {
    color: #989899;
}
.items .item {
    display: flex;
    justify-content: space-between;
    padding: 0.9rem 1rem;
    /* border-bottom: 1px solid #cdcdcd; */
}
.items .item .content {
    font-weight: 700;
}

.itembtn {
    width: 3.5rem;
    height: 1.5rem;
}
.itembtn > img {
    width: 100%;
    height: 100%;
}

.noboder {
    border: none !important;
}
.nighttitle {
    color: #414141;
}
.items .item .content {
}
.infos-title {
    color: #fff;
}
.alert {
    background: transparent;
    width: 20rem;
    position: relative;
}
.alert > img {
    width: 100%;
    height: 100%;
}
.van-popup {
    background: transparent;
}
.icon-img {
    width: 1.5rem;
    margin-bottom: 5px;
}
.small-img {
    width: 1rem;
    margin-right: 5px;
}

.commnt-list {
    margin-top: 5px;
}
.comment {
    display: flex;
    border-bottom: 1px solid #f4f5fa;
    padding: 0.5rem;
    box-sizing: border-box;
}
.commentninght {
    border-bottom: 1px solid #000;
}
.comment .head {
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    overflow: hidden;
    margin-left: 1.5rem;
}
.comment .head img {
    width: 100%;
    height: 100%;
}
.comment .content {
    margin-left: 1rem;
}
.comment .content .time {
    font-size: 0.5rem;
    color: #969799;
}
input {
    background: none;
    outline: none;
}
input:focus {
    border: none;
    outline: none;
}
.video-warp {
    min-height: 203px;
    background: #ccc;
}
.video-info {
    padding: 10px;
    background-color: #fff;
}
.video-info-night {
    background: #1a191c;
}
.vip-ad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
}
.vip-ad img {
    width: 100%;
    height: 100%;
}
.ad-center {
    width: 200px;
    word-break: break-all;
    line-height: 20px;
}
.title {
    margin-top: 0.3rem;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 2px;
}
.gray-small {
    font-size: 0.5rem;
    color: #969799;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tags-warp {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}
.tags-warp .tag {
    background: #e0e0e0;
    color: #9a9a9a;
    border-radius: 3px;
    margin-right: 6px;
    font-size: 0.5rem;
    padding: 1px 5px;
    margin-bottom: 5px;
}
.btns {
    margin-top: 0.3rem;
}
.gray-btns {
    text-align: center;
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.gray-btns > div {
    line-height: 0.5rem;
    color: #969799;
}
.gapes {
    background-color: #f4f5fa;
    height: 0.5rem;
    width: 100%;
}
.bottom-info {
    margin-top: 10px;
}
.right-tabs {
    width: 50%;
    padding: 0rem 1rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right-tabs .van-field__control {
    line-height: 1.3rem;
}
.input-warp {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.input-back {
    border-radius: 30px;
    background: #ebebec;
    padding: 5px 10px;
    height: 30px;
}
.input-back .van-cell {
    background: none;
    padding: 0;
}
</style>