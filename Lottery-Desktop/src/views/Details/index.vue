<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="main report">
                    <div class="search">
                    </div>
                    <table class="list table">
                        <thead>
                            <tr>
                                <th>注单号</th>
                                <th>时间</th>
                                <th>类型</th>
                                <th>玩法</th>
                                <th>盘口</th>
                                <th>下注金额</th>
                                <th>退水(%)</th>
                                <th>可赢金额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td class="nodata" colspan="8">暂无数据!</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>总计</th>
                                <td>0</td>
                                <td></td>
                                <td class="result color">0</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="page_info">
                    </div>
                </div>
            </div>
        </div>
        <Notice />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Layouts/Header.vue"
import Left from "@/components/Layouts/Left.vue"
import Footer from "@/components/Layouts/Footer.vue"
// import { UserService } from '@/core/UserCore/Service/UserServer';
import Notice from '@/components/Layouts/Notice.vue'

@Component({
    components: {
        Header,
        Left,
        Footer,
        Notice
    }
})
export default class Details extends Vue {
        private details?: any[] = []
get colorSetting() {
//   console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
    get token() {
    return this.$store.state['_token'] ? this.$store.state['_token'] : localStorage.getItem("_token");
  }
  
  // private GetTodayAutre(){
  //     UserService.GetTodayAutre({_token: this.token })
  //       .then( (data) => {
  //       this.details=data
  //       });
  // }
 mounted() {
     console.log(this.token)
    // this.GetTodayAutre()
  }
}
</script>
