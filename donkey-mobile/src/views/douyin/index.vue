<style lang="less" scoped>
.full {
    width: 100%;
    height: 100%;
}
.main {
    width: 100%;
    height: 100%;
    background: #fff;
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 0.2rem;
        text-align: center;
        background-color: #39a9ed;
        position: relative;
        .video-content {
            width: 100%;
        }
    }
}
</style>
<template>
    <div class="main">
        <van-swipe
            class="my-swipe"
            :show-indicators="false"
            :loop="false"
            @change="onChange"
            style="height: 100vh"
            vertical
            indicator-color="white"
        >
            <van-swipe-item v-for="(item, index) in swiperList" :key="index">
                <video
                    v-show="Math.abs(current -index) <1"
                    class="video-content full"
                    :id="`player${index}`"
                    :src="item.url"
                    webkit-playsinline="true"
                    controlslist="nodownload"
                    playsinline="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    preload="metadata"
                ></video>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class douyin extends Vue {
    private playing = false;
    private swiperList: any = [];
    private current: number = 0;
    created() {
        this.loadData();
    }
    private loadData() {
        this.Apis.MovieList({
            category_id: 1,
            sub_category_id: 1,
            count: 10,
            page: 1
        }).then((data: any) => {
            this.swiperList = data.data;

            this.$nextTick(() => {
                const doc: any = document;
                doc.getElementById(`player${0}`).play();
                this.swiperList[0].play = true;
            });
        });
    }
    onChange(index: number) {
        this.current = index;
        const doc: any = document;
        let player: any = doc.getElementById(`player${index}`);
        if (player.paused) {
            this.swiperList.forEach((item: any, s_index: number) => {
                if (s_index == index) {
                    doc.getElementById(`player${s_index}`).play();
                    item.play = true;
                } else {
                    doc.getElementById(`player${s_index}`).pause();
                    item.play = false;
                }
            });
        } else {
            this.swiperList.forEach((item: any, s_index: number) => {
                doc.getElementById(`player${s_index}`).pause();
                item.play = false;
            });
        }
    }
}
</script>