<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="L_BJPK10 P_gy" style="">
                    <div id="main">
                        <div id="header">
                            <div class="lottery_info">
                                <div class="lottery_info_left floatleft"><span class="name" id="lotteryName">北京赛车(PK10)</span> — <span class="gameName" id="gameName">冠亚军组合</span><span class="result">&nbsp;今日输赢：<span id="bresult">0</span></span>
                                </div>
                                <div class="lottery_info_right floatright"><span id="drawNumber"></span>期<span class="cdContainer">&nbsp;&nbsp;距离封盘：<span class="color_lv bold"><span id="cdClose">00:00</span></span>
                                    </span>
                                    <span class="cdContainer" style="display:none">&nbsp;&nbsp;距开盘：<span class="color_lv bold" style="display: none;"><span id="cdOpen">00:00</span></span>
                                    </span>
                                    &nbsp;&nbsp;距离开奖：<span class="color_lv bold"><span id="cdDraw">00:00</span></span>
                                    <span id="cdRefresh" style="float:right;width: 50px;">5秒</span>
                                </div>
                                <div class="clearfloat"></div>
                            </div>
                            <div class="control n_anniu">
                                <div class="buttons">
                                    <label class="checkdefault"><input type="checkbox" class="checkbox"><span class="color_lv bold">预设</span></label>&nbsp;&nbsp;<label id="quickAmount" class="quickAmount"><span class="color_lv bold">金额</span> <input></label>
                                    <input type="button" onclick="bet()" value="确定" class="button">
                                    <input type="button" onclick="resetBets()" value="重置" class="button">
                                </div>
                            </div>
                        </div>

                        <div id="bet_panel" class="bet_panel input_panel bet_closed">
                            <table class="table_lm">
                                <tbody>
                                    <tr class="head">
                                        <th colspan="12">冠、亚军和</th>
                                    </tr>
                                    <tr>
                                        <th class="GGYH_3 name" id="t_GYH_3" title=" 3"><input type="hidden" id="k_GYH_3" value="GYH">3</th>

                                        <td class="GGYH_3 odds" id="o_GYH_3">--</td>
                                        <td class="GGYH_3 amount ha" id="a_GYH_3"><input name="GYH_3" class="ba" disabled=""></td>
                                        <th class="GGYH_4 name" id="t_GYH_4" title=" 4"><input type="hidden" id="k_GYH_4" value="GYH">4</th>

                                        <td class="GGYH_4 odds" id="o_GYH_4">--</td>
                                        <td class="GGYH_4 amount ha" id="a_GYH_4"><input name="GYH_4" class="ba" disabled=""></td>
                                        <th class="GGYH_5 name" id="t_GYH_5" title=" 5"><input type="hidden" id="k_GYH_5" value="GYH">5</th>

                                        <td class="GGYH_5 odds" id="o_GYH_5">--</td>
                                        <td class="GGYH_5 amount ha" id="a_GYH_5"><input name="GYH_5" class="ba" disabled=""></td>
                                        <th class="GGYH_6 name" id="t_GYH_6" title=" 6"><input type="hidden" id="k_GYH_6" value="GYH">6</th>

                                        <td class="GGYH_6 odds" id="o_GYH_6">--</td>
                                        <td class="GGYH_6 amount ha" id="a_GYH_6"><input name="GYH_6" class="ba" disabled=""></td>
                                    </tr>
                                    <tr>
                                        <th class="GGYH_7 name" id="t_GYH_7" title=" 7"><input type="hidden" id="k_GYH_7" value="GYH">7</th>

                                        <td class="GGYH_7 odds" id="o_GYH_7">--</td>
                                        <td class="GGYH_7 amount ha" id="a_GYH_7"><input name="GYH_7" class="ba" disabled=""></td>
                                        <th class="GGYH_8 name" id="t_GYH_8" title=" 8"><input type="hidden" id="k_GYH_8" value="GYH">8</th>

                                        <td class="GGYH_8 odds" id="o_GYH_8">--</td>
                                        <td class="GGYH_8 amount ha" id="a_GYH_8"><input name="GYH_8" class="ba" disabled=""></td>
                                        <th class="GGYH_9 name" id="t_GYH_9" title=" 9"><input type="hidden" id="k_GYH_9" value="GYH">9</th>

                                        <td class="GGYH_9 odds" id="o_GYH_9">--</td>
                                        <td class="GGYH_9 amount ha" id="a_GYH_9"><input name="GYH_9" class="ba" disabled=""></td>
                                        <th class="GGYH_10 name" id="t_GYH_10" title=" 10"><input type="hidden" id="k_GYH_10" value="GYH">10</th>

                                        <td class="GGYH_10 odds" id="o_GYH_10">--</td>
                                        <td class="GGYH_10 amount ha" id="a_GYH_10"><input name="GYH_10" class="ba" disabled=""></td>
                                    </tr>
                                    <tr>
                                        <th class="GGYH_11 name" id="t_GYH_11" title=" 11"><input type="hidden" id="k_GYH_11" value="GYH">11</th>

                                        <td class="GGYH_11 odds" id="o_GYH_11">--</td>
                                        <td class="GGYH_11 amount ha" id="a_GYH_11"><input name="GYH_11" class="ba" disabled=""></td>
                                        <th class="GGYH_12 name" id="t_GYH_12" title=" 12"><input type="hidden" id="k_GYH_12" value="GYH">12</th>

                                        <td class="GGYH_12 odds" id="o_GYH_12">--</td>
                                        <td class="GGYH_12 amount ha" id="a_GYH_12"><input name="GYH_12" class="ba" disabled=""></td>
                                        <th class="GGYH_13 name" id="t_GYH_13" title=" 13"><input type="hidden" id="k_GYH_13" value="GYH">13</th>

                                        <td class="GGYH_13 odds" id="o_GYH_13">--</td>
                                        <td class="GGYH_13 amount ha" id="a_GYH_13"><input name="GYH_13" class="ba" disabled=""></td>
                                        <th class="GGYH_14 name" id="t_GYH_14" title=" 14"><input type="hidden" id="k_GYH_14" value="GYH">14</th>

                                        <td class="GGYH_14 odds" id="o_GYH_14">--</td>
                                        <td class="GGYH_14 amount ha" id="a_GYH_14"><input name="GYH_14" class="ba" disabled=""></td>
                                    </tr>
                                    <tr>
                                        <th class="GGYH_15 name" id="t_GYH_15" title=" 15"><input type="hidden" id="k_GYH_15" value="GYH">15</th>

                                        <td class="GGYH_15 odds" id="o_GYH_15">--</td>
                                        <td class="GGYH_15 amount ha" id="a_GYH_15"><input name="GYH_15" class="ba" disabled=""></td>
                                        <th class="GGYH_16 name" id="t_GYH_16" title=" 16"><input type="hidden" id="k_GYH_16" value="GYH">16</th>

                                        <td class="GGYH_16 odds" id="o_GYH_16">--</td>
                                        <td class="GGYH_16 amount ha" id="a_GYH_16"><input name="GYH_16" class="ba" disabled=""></td>
                                        <th class="GGYH_17 name" id="t_GYH_17" title=" 17"><input type="hidden" id="k_GYH_17" value="GYH">17</th>

                                        <td class="GGYH_17 odds" id="o_GYH_17">--</td>
                                        <td class="GGYH_17 amount ha" id="a_GYH_17"><input name="GYH_17" class="ba" disabled=""></td>
                                        <th class="GGYH_18 name" id="t_GYH_18" title=" 18"><input type="hidden" id="k_GYH_18" value="GYH">18</th>

                                        <td class="GGYH_18 odds" id="o_GYH_18">--</td>
                                        <td class="GGYH_18 amount ha" id="a_GYH_18"><input name="GYH_18" class="ba" disabled=""></td>
                                    </tr>
                                    <tr>
                                        <th class="GGYH_19 name" id="t_GYH_19" title=" 19"><input type="hidden" id="k_GYH_19" value="GYH">19</th>

                                        <td class="GGYH_19 odds" id="o_GYH_19">--</td>
                                        <td class="GGYH_19 amount ha" id="a_GYH_19"><input name="GYH_19" class="ba" disabled=""></td>
                                        <th id="e_EP0" class="GEP0 name empty"></th>
                                        <td class="GEP0 odds empty"></td>
                                        <td class="GEP0 amount ha"></td>
                                        <th id="e_EP1" class="GEP1 name empty"></th>
                                        <td class="GEP1 odds empty"></td>
                                        <td class="GEP1 amount ha"></td>
                                        <th id="e_EP2" class="GEP2 name empty"></th>
                                        <td class="GEP2 odds empty"></td>
                                        <td class="GEP2 amount ha"></td>
                                    </tr>
                                    <tr>
                                        <th class="GGDX_D name" id="t_GDX_D" title=" 冠亚大"><input type="hidden" id="k_GDX_D" value="GDX">冠亚大</th>

                                        <td class="GGDX_D odds" id="o_GDX_D">--</td>
                                        <td class="GGDX_D amount ha" id="a_GDX_D"><input name="GDX_D" class="ba" disabled=""></td>

                                        <th class="GGDX_X name" id="t_GDX_X" title=" 冠亚小"><input type="hidden" id="k_GDX_X" value="GDX">冠亚小</th>

                                        <td class="GGDX_X odds" id="o_GDX_X">--</td>
                                        <td class="GGDX_X amount ha" id="a_GDX_X"><input name="GDX_X" class="ba" disabled=""></td>
                                        <th class="GGDS_D name" id="t_GDS_D" title=" 冠亚单"><input type="hidden" id="k_GDS_D" value="GDS">冠亚单</th>

                                        <td class="GGDS_D odds" id="o_GDS_D">--</td>
                                        <td class="GGDS_D amount ha" id="a_GDS_D"><input name="GDS_D" class="ba" disabled=""></td>
                                        <th class="GGDS_S name" id="t_GDS_S" title=" 冠亚双"><input type="hidden" id="k_GDS_S" value="GDS">冠亚双</th>

                                        <td class="GGDS_S odds" id="o_GDS_S">--</td>
                                        <td class="GGDS_S amount ha" id="a_GDS_S"><input name="GDS_S" class="ba" disabled=""></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="control bcontrol">
                            <div class="lefts" style="display:none">已经选中 <span id="betcount"></span> 注</div>
                            <div class="buttons">
                                <input type="button" class="button2" value="快选金额" onclick="parent.showsetting()">
                                <label class="checkdefault"><input type="checkbox" class="checkbox"><span class="color_lv bold">预设</span></label>&nbsp;&nbsp;<label id="quickAmount" class="quickAmount"><span class="color_lv bold">金额</span> <input></label>
                                <input type="button" class="button" value="确定" onclick="bet()"><input type="button" class="button" value="重置" onclick="resetBets()">
                            </div>
                        </div>
                        <div id="resultPanel">
                            <table class="tabTitle">
                                <tbody>
                                    <tr>
                                        <th class="selected"><a href="javascript:void(0)">冠军</a></th>
                                        <th><a href="javascript:void(0)">亚军</a></th>
                                        <th><a href="javascript:void(0)">第三名</a></th>
                                        <th><a href="javascript:void(0)">第四名</a></th>
                                        <th><a href="javascript:void(0)">第五名</a></th>
                                        <th><a href="javascript:void(0)">第六名</a></th>
                                        <th><a href="javascript:void(0)">第七名</a></th>
                                        <th><a href="javascript:void(0)">第八名</a></th>
                                        <th><a href="javascript:void(0)">第九名</a></th>
                                        <th><a href="javascript:void(0)">第十名</a></th>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="ballTable">
                                <tbody>
                                    <tr class="head">
                                        <th class="b1">1</th>
                                        <th class="b2">2</th>
                                        <th class="b3">3</th>
                                        <th class="b4">4</th>
                                        <th class="b5">5</th>
                                        <th class="b6">6</th>
                                        <th class="b7">7</th>
                                        <th class="b8">8</th>
                                        <th class="b9">9</th>
                                        <th class="b10">10</th>
                                    </tr>
                                    <tr>
                                        <td class="b1">0</td>
                                        <td class="b2">0</td>
                                        <td class="b3">0</td>
                                        <td class="b4">0</td>
                                        <td class="b5">0</td>
                                        <td class="b6">0</td>
                                        <td class="b7">0</td>
                                        <td class="b8">0</td>
                                        <td class="b9">0</td>
                                        <td class="b10">0</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="tabTitle">
                                <tbody>
                                    <tr>
                                        <th class="selected"><a href="javascript:void(0)" class="ball">冠军</a></th>
                                        <th><a href="javascript:void(0)">冠、亚军和</a></th>
                                        <th><a href="javascript:void(0)">冠、亚军和 大小</a></th>
                                        <th><a href="javascript:void(0)">冠、亚军和 单双</a></th>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="tabContents">
                                <tbody>
                                    <tr>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="even">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <table id="changlong">
                        <thead>
                            <tr>
                                <th colspan="2" class="table_side">两面长龙排行</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#LH1_H">冠军 - 虎</a></th>
                                <td>8 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS10_S">第十名 - 双</a></th>
                                <td>5 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX1_X">冠军 - 小</a></th>
                                <td>5 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#GDX_X">冠亚 - 小</a></th>
                                <td>5 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS3_D">第三名 - 单</a></th>
                                <td>4 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX3_X">第三名 - 小</a></th>
                                <td>4 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX9_D">第九名 - 大</a></th>
                                <td>3 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS1_D">冠军 - 单</a></th>
                                <td>3 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX8_X">第八名 - 小</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS6_S">第六名 - 双</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS7_S">第七名 - 双</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX7_X">第七名 - 小</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX10_D">第十名 - 大</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX4_D">第四名 - 大</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#LH4_L">第四名 - 龙</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DS5_D">第五名 - 单</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=BJPK10&amp;page=lm#DX2_D">亚军 - 大</a></th>
                                <td>2 期</td>
                            </tr>
                        </tbody>
                    </table>


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
import "@/assets/css/bet.css?v=0115";
import Notice from '@/components/Layouts/Notice.vue'

@Component({
    components: {
        Header,
        Left,
        Footer,
        Notice
    }
})
export default class Guanya extends Vue {
    get colorSetting() {
  console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
}
</script>
