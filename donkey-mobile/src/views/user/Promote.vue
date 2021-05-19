<template>
    <div>
        <div class="head">
            <Nav
                :showSearch="false"
                :showUserIcon="false"
                :showMsgBtn="false"
                :showHeadIcon="false"
                :showBackIcon="true"
                :showThemeBtn="false"
            />
            <div class="yq">
                <img src="../../assets/images/yq/slogan.png" alt srcset />
            </div>
            <div class="qr">
                <div id="qrcode" ref="qrCodeUrl" class="qrcode">
                    <!-- <img src="../../assets/images/yq/zwt.png" alt srcset /> -->
                </div>
                <div class="txt">
                    <p>扫描二维码,下载小黄驴app</p>
                    <p class="rcorners3">专属邀请码:{{invaleCode}}</p>
                </div>
                <div class="link">
                    <img
                        src="../../assets/images/yq/copy.png"
                        class="copy-btn"
                        alt
                        srcset
                        v-on:click="greet"
                    />
                    <img src="../../assets/images/yq/qr_code.png" alt srcset v-on:click="ongreet" />
                </div>
            </div>
        </div>
        <div class="bottom">
            <img src="../../assets/images/yq/invite title.png" alt srcset />
            <div class="table">
                <table>
                    <tr class="th">
                        <th>用户名</th>
                        <th>注册时间</th>
                        <th>获得奖励</th>
                    </tr>
                    <tr class="datas" v-for="(item,index)  in promolist" :key="index">
                        <td>{{item.account}}</td>
                        <td>{{Apis.format(item.create_time)}}</td>
                        <td>VIP一日体验</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import { Toast } from "vant";

@Component({
    components: {
        Nav
    }
})
export default class Promote extends Vue {
    private invaleCode: string = "";
    private promolist = [];
    private greet() {
        const clipboard = new Vue.prototype.clipboard(".copy-btn", {
            text: () =>
                window.location.origin + "#/regist?code=" + this.invaleCode
        });
        clipboard.on("success", (e: any) => {
            Toast("复制成功");
        });
        clipboard.on("error", () => {
            Toast("复制失败");
        });
    }
    private qrCode(url: any): void {
        let self: any = this;

        let qrcode = new self.QRCode(this.$refs.qrCodeUrl, {
            width: 180, //图像宽度
            height: 180, //图像高度
            colorDark: "#000000", //前景色
            colorLight: "#ffffff", //背景色
            typeNumber: 4,
            correctLevel: self.QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
        });
        qrcode.clear(); //清除二维码
        qrcode.makeCode(url); //生成另一个新的二维码
    }
    private ongreet() {
        // document.getElementById()

        let div: any = this.$refs.qrCodeUrl;
        let canvas = div.getElementsByTagName("canvas")[0];
        var strDataURI = canvas.toDataURL("image/png");
     
        var a = document.createElement("a");
        a.download = "qrcode"; //下载的文件名，默认是'下载'
        a.href = strDataURI;
        document.body.appendChild(a);
        a.click();
        a.remove(); //下载之后把创建的元素删除
    }

    private async mounted() {
        let userinfo: any = localStorage.getItem("userinfo");
        if (!userinfo) {
            Toast("请先登录");
            return;
        }
        userinfo = JSON.parse(userinfo);
        this.invaleCode = userinfo.promo_code;
        let str = window.location.origin + "#/regist?code=" + this.invaleCode;
        this.qrCode(str);

        this.Apis.GetPromo({}).then((res: any) => {
            console.log(res);
            this.promolist = res.data;
        });
    }
}
</script>


<style scoped >
.table {
    display: flex;
    align-items: center;
    justify-content: center;
}
table {
    width: 90%;
    border-collapse: collapse;
    background-color: #ffaaaa;
}
.th {
    background: #f25859;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
}
.datas {
    font-family: PingFangSC-Regular;
    color: #681f1f;
    font-size: 12px;
    text-align: center;
}
.head {
    background-image: url("../../assets/images/yq/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.yq img {
    width: 100%;
}

.qr {
    text-align: center;
    background: url("../../assets/images/yq/qr_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 2rem;
}
.qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/images/yq/qr.png");
    height: 260px;
    width: 260px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 2rem;
    box-sizing: border-box;
}
.zqr {
    height: 10rem;
    width: 10rem;
    margin: 0 auto;

    background: url("../../assets/images/yq/qr.png") no-repeat;
    background-size: cover;
}

.link {
    display: flex;
    align-items: inherit;
    justify-content: space-between;
    width: 50%;
}
.link img {
    padding-top: 2rem;
}

.yq {
    margin: 0 auto;
    padding-top: 20rem;
    width: 100%;
}
.txt {
    padding-top: 2rem;
}

.rcorners3 {
    border-radius: 25px;
    background-color: #ef5588;
    background-image: linear-gradient(-77deg, #d36af6 0%, #ff4949 100%),
        linear-gradient(#1a191c, #1a191c);
    width: 10rem;
    margin: 0 auto;
    color: #ffffff;
}

.bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>