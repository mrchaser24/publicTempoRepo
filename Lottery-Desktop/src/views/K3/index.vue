<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="L_SSCJSC P_3zhs" style="">
                    <div id="main">
                        <div id="header">
                            <div class="lottery_info">
                                <div class="lottery_info_left floatleft"><span class="name" id="lotteryName">极速时时彩</span> — <span class="gameName" id="gameName">三字和数，和尾数</span><span class="result">&nbsp;今日输赢：<span id="bresult">0</span></span>
                                </div>
                                <div class="lottery_info_right floatright"><span id="drawNumber">11696097</span>期<span class="cdContainer">&nbsp;&nbsp;距离封盘：<span class="color_lv bold"><span id="cdClose">00:14</span></span>
                                    </span>
                                    <span class="cdContainer" style="display:none">&nbsp;&nbsp;距开盘：<span class="color_lv bold" style="display: none;"><span id="cdOpen">00:00</span></span>
                                    </span>
                                    &nbsp;&nbsp;距离开奖：<span class="color_lv bold"><span id="cdDraw">00:24</span></span>
                                    <span id="cdRefresh" style="float:right;width: 50px;">3秒</span>
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

                        <div id="bet_panel" class="bet_panel input_panel">

                            
                            <ul class="tab">
                                <li class="tab_title02">
                                    <a href="load?lottery=SSCJSC&amp;page=3zhs&amp;index=543">前三和数</a>
                                    <a href="load?lottery=SSCJSC&amp;page=3zhs&amp;index=432">中三和数</a>
                                    <a href="load?lottery=SSCJSC&amp;page=3zhs&amp;index=321" class="on">后三和数</a>
                                </li>
                            </ul>

                            <table class="table_ball">
                                <tbody>
                                    <tr class="head">
                                        <th colspan="15">后三和数</th>
                                    </tr>
                                    <tr>
                                        <th class="GHS321_6 name" id="t_HS321_6" title="后三和数 0~6"><input type="hidden" id="k_HS321_6" value="HS321">0~6</th>

                                        <td class="GHS321_6 odds" id="o_HS321_6">--</td>
                                        <td class="GHS321_6 amount ha" id="a_HS321_6"><input name="HS321_6" class="ba"></td>
                                        <th class="GHS321_7 name" id="t_HS321_7" title="后三和数 7"><input type="hidden" id="k_HS321_7" value="HS321">7</th>

                                        <td class="GHS321_7 odds" id="o_HS321_7">--</td>
                                        <td class="GHS321_7 amount ha" id="a_HS321_7"><input name="HS321_7" class="ba"></td>
                                        <th class="GHS321_8 name" id="t_HS321_8" title="后三和数 8"><input type="hidden" id="k_HS321_8" value="HS321">8</th>

                                        <td class="GHS321_8 odds" id="o_HS321_8">--</td>
                                        <td class="GHS321_8 amount ha" id="a_HS321_8"><input name="HS321_8" class="ba"></td>
                                        <th class="GHS321_9 name" id="t_HS321_9" title="后三和数 9"><input type="hidden" id="k_HS321_9" value="HS321">9</th>

                                        <td class="GHS321_9 odds" id="o_HS321_9">--</td>
                                        <td class="GHS321_9 amount ha" id="a_HS321_9"><input name="HS321_9" class="ba"></td>
                                        <th class="GHS321_10 name" id="t_HS321_10" title="后三和数 10"><input type="hidden" id="k_HS321_10" value="HS321">10</th>

                                        <td class="GHS321_10 odds" id="o_HS321_10">--</td>
                                        <td class="GHS321_10 amount ha" id="a_HS321_10"><input name="HS321_10" class="ba"></td>
                                    </tr>
                                    <tr>
                                        <th class="GHS321_11 name" id="t_HS321_11" title="后三和数 11"><input type="hidden" id="k_HS321_11" value="HS321">11</th>

                                        <td class="GHS321_11 odds" id="o_HS321_11">--</td>
                                        <td class="GHS321_11 amount ha" id="a_HS321_11"><input name="HS321_11" class="ba"></td>
                                        <th class="GHS321_12 name" id="t_HS321_12" title="后三和数 12"><input type="hidden" id="k_HS321_12" value="HS321">12</th>

                                        <td class="GHS321_12 odds" id="o_HS321_12">--</td>
                                        <td class="GHS321_12 amount ha" id="a_HS321_12"><input name="HS321_12" class="ba"></td>
                                        <th class="GHS321_13 name" id="t_HS321_13" title="后三和数 13"><input type="hidden" id="k_HS321_13" value="HS321">13</th>

                                        <td class="GHS321_13 odds" id="o_HS321_13">--</td>
                                        <td class="GHS321_13 amount ha" id="a_HS321_13"><input name="HS321_13" class="ba"></td>
                                        <th class="GHS321_14 name" id="t_HS321_14" title="后三和数 14"><input type="hidden" id="k_HS321_14" value="HS321">14</th>

                                        <td class="GHS321_14 odds" id="o_HS321_14">--</td>
                                        <td class="GHS321_14 amount ha" id="a_HS321_14"><input name="HS321_14" class="ba"></td>
                                        <th class="GHS321_15 name" id="t_HS321_15" title="后三和数 15"><input type="hidden" id="k_HS321_15" value="HS321">15</th>

                                        <td class="GHS321_15 odds" id="o_HS321_15">--</td>
                                        <td class="GHS321_15 amount ha" id="a_HS321_15"><input name="HS321_15" class="ba"></td>
                                    </tr>
                                    <tr>
                                        <th class="GHS321_16 name" id="t_HS321_16" title="后三和数 16"><input type="hidden" id="k_HS321_16" value="HS321">16</th>

                                        <td class="GHS321_16 odds" id="o_HS321_16">--</td>
                                        <td class="GHS321_16 amount ha" id="a_HS321_16"><input name="HS321_16" class="ba"></td>
                                        <th class="GHS321_17 name" id="t_HS321_17" title="后三和数 17"><input type="hidden" id="k_HS321_17" value="HS321">17</th>

                                        <td class="GHS321_17 odds" id="o_HS321_17">--</td>
                                        <td class="GHS321_17 amount ha" id="a_HS321_17"><input name="HS321_17" class="ba"></td>
                                        <th class="GHS321_18 name" id="t_HS321_18" title="后三和数 18"><input type="hidden" id="k_HS321_18" value="HS321">18</th>

                                        <td class="GHS321_18 odds" id="o_HS321_18">--</td>
                                        <td class="GHS321_18 amount ha" id="a_HS321_18"><input name="HS321_18" class="ba"></td>
                                        <th class="GHS321_19 name" id="t_HS321_19" title="后三和数 19"><input type="hidden" id="k_HS321_19" value="HS321">19</th>

                                        <td class="GHS321_19 odds" id="o_HS321_19">--</td>
                                        <td class="GHS321_19 amount ha" id="a_HS321_19"><input name="HS321_19" class="ba"></td>
                                        <th class="GHS321_20 name" id="t_HS321_20" title="后三和数 20"><input type="hidden" id="k_HS321_20" value="HS321">20</th>

                                        <td class="GHS321_20 odds" id="o_HS321_20">--</td>
                                        <td class="GHS321_20 amount ha" id="a_HS321_20"><input name="HS321_20" class="ba"></td>
                                    </tr>
                                    <tr>
                                        <th class="GHS321_21 name" id="t_HS321_21" title="后三和数 21~27"><input type="hidden" id="k_HS321_21" value="HS">21~27</th>

                                        <td class="GHS321_21 odds" id="o_HS321_21">--</td>
                                        <td class="GHS321_21 amount ha" id="a_HS321_21"><input name="HS321_21" class="ba"></td>
                                        <th id="e_EP0" class="GEP0 name empty"></th>
                                        <td class="GEP0 odds empty"></td>
                                        <td class="GEP0 amount ha"></td>
                                        <th id="e_EP1" class="GEP1 name empty"></th>
                                        <td class="GEP1 odds empty"></td>
                                        <td class="GEP1 amount ha"></td>
                                        <th id="e_EP2" class="GEP2 name empty"></th>
                                        <td class="GEP2 odds empty"></td>
                                        <td class="GEP2 amount ha"></td>
                                        <th id="e_EP3" class="GEP3 name empty"></th>
                                        <td class="GEP3 odds empty"></td>
                                        <td class="GEP3 amount ha"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table_ball mt10">
                                <tbody>
                                    <tr class="head">
                                        <th colspan="15">后三和数尾数</th>
                                    </tr>
                                    <tr>
                                        <th class="GHWS321_0 name" id="t_HWS321_0" title="后三和数尾数 0"><input type="hidden" id="k_HWS321_0" value="HWS321">0</th>

                                        <td class="GHWS321_0 odds" id="o_HWS321_0">--</td>
                                        <td class="GHWS321_0 amount ha" id="a_HWS321_0"><input name="HWS321_0" class="ba"></td>

                                        <th class="GHWS321_2 name" id="t_HWS321_2" title="后三和数尾数 2"><input type="hidden" id="k_HWS321_2" value="HWS321">2</th>

                                        <td class="GHWS321_2 odds" id="o_HWS321_2">--</td>
                                        <td class="GHWS321_2 amount ha" id="a_HWS321_2"><input name="HWS321_2" class="ba"></td>

                                        <th class="GHWS321_4 name" id="t_HWS321_4" title="后三和数尾数 4"><input type="hidden" id="k_HWS321_4" value="HWS321">4</th>

                                        <td class="GHWS321_4 odds" id="o_HWS321_4">--</td>
                                        <td class="GHWS321_4 amount ha" id="a_HWS321_4"><input name="HWS321_4" class="ba"></td>

                                        <th class="GHWS321_6 name" id="t_HWS321_6" title="后三和数尾数 6"><input type="hidden" id="k_HWS321_6" value="HWS321">6</th>

                                        <td class="GHWS321_6 odds" id="o_HWS321_6">--</td>
                                        <td class="GHWS321_6 amount ha" id="a_HWS321_6"><input name="HWS321_6" class="ba"></td>

                                        <th class="GHWS321_8 name" id="t_HWS321_8" title="后三和数尾数 8"><input type="hidden" id="k_HWS321_8" value="HWS321">8</th>

                                        <td class="GHWS321_8 odds" id="o_HWS321_8">--</td>
                                        <td class="GHWS321_8 amount ha" id="a_HWS321_8"><input name="HWS321_8" class="ba"></td>
                                    </tr>
                                    <tr>
                                        <th class="GHWS321_1 name" id="t_HWS321_1" title="后三和数尾数 1"><input type="hidden" id="k_HWS321_1" value="HWS321">1</th>

                                        <td class="GHWS321_1 odds" id="o_HWS321_1">--</td>
                                        <td class="GHWS321_1 amount ha" id="a_HWS321_1"><input name="HWS321_1" class="ba"></td>

                                        <th class="GHWS321_3 name" id="t_HWS321_3" title="后三和数尾数 3"><input type="hidden" id="k_HWS321_3" value="HWS321">3</th>

                                        <td class="GHWS321_3 odds" id="o_HWS321_3">--</td>
                                        <td class="GHWS321_3 amount ha" id="a_HWS321_3"><input name="HWS321_3" class="ba"></td>

                                        <th class="GHWS321_5 name" id="t_HWS321_5" title="后三和数尾数 5"><input type="hidden" id="k_HWS321_5" value="HWS321">5</th>

                                        <td class="GHWS321_5 odds" id="o_HWS321_5">--</td>
                                        <td class="GHWS321_5 amount ha" id="a_HWS321_5"><input name="HWS321_5" class="ba"></td>

                                        <th class="GHWS321_7 name" id="t_HWS321_7" title="后三和数尾数 7"><input type="hidden" id="k_HWS321_7" value="HWS321">7</th>

                                        <td class="GHWS321_7 odds" id="o_HWS321_7">--</td>
                                        <td class="GHWS321_7 amount ha" id="a_HWS321_7"><input name="HWS321_7" class="ba"></td>

                                        <th class="GHWS321_9 name" id="t_HWS321_9" title="后三和数尾数 9"><input type="hidden" id="k_HWS321_9" value="HWS321">9</th>

                                        <td class="GHWS321_9 odds" id="o_HWS321_9">--</td>
                                        <td class="GHWS321_9 amount ha" id="a_HWS321_9"><input name="HWS321_9" class="ba"></td>
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
                                        <th class="selected"><a href="javascript:void(0)">第一球</a></th>
                                        <th><a href="javascript:void(0)">第二球</a></th>
                                        <th><a href="javascript:void(0)">第三球</a></th>
                                        <th><a href="javascript:void(0)">第四球</a></th>
                                        <th><a href="javascript:void(0)">第五球</a></th>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="ballTable">
                                <tbody>
                                    <tr class="head">
                                        <th class="b0">0</th>
                                        <th class="b1">1</th>
                                        <th class="b2">2</th>
                                        <th class="b3">3</th>
                                        <th class="b4">4</th>
                                        <th class="b5">5</th>
                                        <th class="b6">6</th>
                                        <th class="b7">7</th>
                                        <th class="b8">8</th>
                                        <th class="b9">9</th>
                                    </tr>
                                    <tr>
                                        <td class="b0">27</td>
                                        <td class="b1">23</td>
                                        <td class="b2">45</td>
                                        <td class="b3">23</td>
                                        <td class="b4">30</td>
                                        <td class="b5">42</td>
                                        <td class="b6">34</td>
                                        <td class="b7">40</td>
                                        <td class="b8">41</td>
                                        <td class="b9">31</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="tabTitle">
                                <tbody>
                                    <tr>
                                        <th class="selected"><a href="javascript:void(0)" class="ball">第一球</a></th>
                                        <th><a href="javascript:void(0)">大小</a></th>
                                        <th><a href="javascript:void(0)">单双</a></th>
                                        <th><a href="javascript:void(0)">总和大小</a></th>
                                        <th><a href="javascript:void(0)">总和单双</a></th>
                                        <th><a href="javascript:void(0)">龙虎和</a></th>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="tabContents">
                                <tbody>
                                    <tr>
                                        <td class="even">0</td>
                                        <td>4<br>4</td>
                                        <td class="even">7</td>
                                        <td>2</td>
                                        <td class="even">8</td>
                                        <td>2</td>
                                        <td class="even">9</td>
                                        <td>8</td>
                                        <td class="even">2</td>
                                        <td>8<br>8</td>
                                        <td class="even">7</td>
                                        <td>2</td>
                                        <td class="even">7</td>
                                        <td>0</td>
                                        <td class="even">6</td>
                                        <td>8</td>
                                        <td class="even">2</td>
                                        <td>6</td>
                                        <td class="even">5</td>
                                        <td>7</td>
                                        <td class="even">5</td>
                                        <td>8</td>
                                        <td class="even">1</td>
                                        <td>5</td>
                                        <td class="even">3</td>
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
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DS2_S">第二球 - 双</a></th>
                                <td>3 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DS1_D">第一球 - 单</a></th>
                                <td>3 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DX3_D">第三球 - 大</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DX4_D">第四球 - 大</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DS4_D">第四球 - 单</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#DS5_D">第五球 - 单</a></th>
                                <td>2 期</td>
                            </tr>
                            <tr>
                                <th><a href="load?lottery=SSCJSC&amp;page=lm#ZDX_D">总和大</a></th>
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
export default class K3 extends Vue {
    get colorSetting() {
  console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
}
</script>
