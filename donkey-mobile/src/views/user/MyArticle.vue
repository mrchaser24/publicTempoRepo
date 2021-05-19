<template>
    <div class="donkey-pen">
        <!-- <Nav /> -->
        <div class="content">
            <iframe
                class="ifream"
                id="show-iframe"
                ref="showIframe"
                frameborder="0"
                name="showHere"
                scrolling="auto"
                :src="url"
            ></iframe>
        </div>
        <Footer :activeFooterItem="'User'" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import Footer from "@/components/common/Footer.vue";

@Component({
    components: {
        Nav,
        Footer
    }
})
export default class DonkeyPen extends Vue {
    private account?: any = null;
    private password?: any = null;
    private url = "";
    mounted() {
        const win: any = window;
        win.addEventListener("message", (e: any) => {
            if (e.origin.indexOf(win.document.domain) > -1) {
            } else {
                let dz: any = localStorage.getItem("dzdata");
                if (dz) {
                    dz = JSON.parse(dz);
                    dz.isnight = this.$store.state.themeColor == "night";
                    e.currentTarget.frames[0].postMessage(dz, "*");
                }
            }
        });
    }
    private created() {
        let userinfo: any = localStorage.getItem("userinfo");
        if (!userinfo || userinfo === undefined) {
            this.$router.push({ name: "Regist" });
        }
        let dz: any = localStorage.getItem("dzdata");
        if (dz) {
            dz = JSON.parse(dz);
            this.url = `http://quan.xhlsp.tv/pages/profile/index?current=${dz.id}&userId=${dz.id}`;
        }
        else{
            this.$router.push('login')
        }
    }
    private load() {}
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/donkeypen.less";
</style>