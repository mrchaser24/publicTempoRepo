<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="rule_frame">
                    <div>
                        <select  v-model="selectRule" id="selectLotteryRuleDropdown"  style="margin: 5px">
                                    <option value="SGFT">
                                        SG飞艇
                                    </option>
                                    <option value="PK10JSC">
                                        极速赛车
                                    </option>
                                    <option value="BJPK10" selected="">
                                        北京赛车(PK10)
                                    </option>
                                    <option value="SSCJSC">
                                        极速时时彩
                                    </option>
                                    <option value="CQHLSX">
                                        重庆欢乐生肖
                                    </option>
                                    <option value="XYFT">
                                        幸运飞艇
                                    </option>
                                    <option value="LUCKYSB">
                                        极速飞艇
                                    </option>
                                    <option value="AULUCKY5">
                                        澳洲幸运5
                                    </option>
                                    <option value="AULUCKY10">
                                        澳洲幸运10
                                    </option>
                            </select>
                    </div>
                    <SGFT v-if="selectRule=='SGFT'" />
                    <PK10JSC v-if="selectRule=='PK10JSC'" />
                    <BJPK10 v-if="selectRule=='BJPK10'" />
                    <SSCJSC v-if="selectRule=='SSCJSC'" />
                    <CQHLSX v-if="selectRule=='CQHLSX'" />
                    <XYFT v-if="selectRule=='XYFT'" />
                    <LUCKYSB v-if="selectRule=='LUCKYSB'" />
                    <AULUCKY5 v-if="selectRule=='AULUCKY5'" />
                    <AULUCKY10 v-if="selectRule=='AULUCKY10'" />
                    
                    
                </div>
            </div>
        </div>
        <Notice />
        <Footer />
    </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import AULUCKY5 from "./AULUCKY5.vue"
import PK10JSC from "./PK10JSC.vue"
import AULUCKY10 from "./AULUCKY10.vue"
import LUCKYSB from "./LUCKYSB.vue"
import BJPK10 from "./BJPK10.vue"
import CQHLSX from "./CQHLSX.vue"
import SSCJSC from "./SSCJSC.vue"
import XYFT from "./XYFT.vue"
import SGFT from "./SGFT.vue"
import Header from "@/components/Layouts/Header.vue"
import Left from "@/components/Layouts/Left.vue"
import Footer from "@/components/Layouts/Footer.vue"
import Notice from '@/components/Layouts/Notice.vue'

@Component({
    components: {
        AULUCKY5,
        SGFT,
        PK10JSC,
        AULUCKY10,
        LUCKYSB,
        BJPK10,
        CQHLSX,
        SSCJSC,
        XYFT,
        Header,
        Left,
        Footer,
        Notice
    }
})
export default class GameRule extends Vue {
    private selectRule: String ='SGFT'
    
     resize(iframe:any) {
            iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
            iframe.scrolling = "no";
        }
        get colorSetting() {
//   console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
}
</script>
