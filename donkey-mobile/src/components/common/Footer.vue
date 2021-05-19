<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item
                class="items"
                v-for="(item, key) in footerItems"
                :key="key"
                :name="item.name"
                @click="goPage(item.link)"
            ><span>{{item.text}}</span> 
                <template #icon>
                     <div v-if="getThemeColor == 'day'">
                    <img
                        v-if="activeNumber!=key"
                        :src="require(`@/assets/icons/${item.icon}_def_day.png`)"
                    />
                    <img v-else :src="require(`@/assets/icons/${item.icon}_pre.png`)" />
                </div>
                <div v-else>
                    <img
                        v-if="activeNumber!=key"
                        :src="require(`@/assets/icons/${item.icon}_def_night.png`)"
                    />
                    <img v-else :src="require(`@/assets/icons/${item.icon}_pre.png`)" />
                </div>
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <!-- <div class="btns" :class="{'night-color':getThemeColor=='night'}">
            <div
                class="items"
                v-for="(item, key) in footerItems"
                :key="key"
                :name="item.name"
                @click="goPage(item.link)"
            >
               
            </div>
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Footer extends Vue {
    @Prop({ type: String, default: "Home" }) readonly activeFooterItem!: string;
    private active?: string = "Home";
    private activeNumber: number = 0;
    private footerItems?: any[] = [
        {
            name: "Home",
            text: "首页",
            icon: "home",
            link: "Home"
        },
        {
            name: "Topic",
            text: "专题",
            icon: "topic",
            link: "Topic"
        },
        {
            name: "DonkeyPen",
            text: "驴圈",
            icon: "lvzone",
            link: "DonkeyPen"
        },
        {
            name: "User",
            text: "我的",
            icon: "my",
            link: "User"
        }
    ];

    private goPage(url: string) {
        if (this.$route.name == url) return;
        if(url == 'DonkeyPen'){
            if(localStorage.getItem('userinfo')){
            this.$router.push({ name: url })
            }
            else{
                this.$router.push({ name: 'Login' });
            }
        }else{
            this.$router.push({ name: url });
        }
    }
    get getThemeColor() {
        return this.$store.state.themeColor;
    }
    private mounted() {
        this.active = this.activeFooterItem;
        this.activeNumber = ["Home", "Topic", "DonkeyPen", "User"].indexOf(
            this.activeFooterItem
        );
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/common/footer.less";

.btns {
    -webkit-overflow-scroll: touch;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    transform: translateZ(0);
    bottom: 0;

    width: 100%;
    height: @footer-H;
    background: #fff;

    display: flex;
    align-items: center;
    .items {
        width: 25%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 1.8rem;
        }
    }
}
.night-color {
    background: @primary-content-bg-color;
}
</style>