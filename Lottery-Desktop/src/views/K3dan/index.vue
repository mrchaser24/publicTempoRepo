<template>
    <div :class="'skin_'+colorSetting">
        <Header />
        <div id="main">
            <Left />
            <div id="iframe" class="frame">
                <div class="L_BJPK10 P_110" style="">
                    <div id="main">
                        <div id="header">
                            <div class="lottery_info">
                                <div class="lottery_info_left floatleft"><span class="name" id="lotteryName">北京赛车(PK10)</span> — <span class="gameName" id="gameName">单号1 ~ 10</span><span class="result">&nbsp;今日输赢：<span id="bresult">0</span></span>
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
                            <div class="split_panel table_ball">
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">冠军</th>
                                        </tr>
                                        <tr>
                                            <th class="GB1_1 name" id="t_B1_1" title="冠军 1"><input type="hidden" id="k_B1_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB1_1 odds" id="o_B1_1">--</td>
                                            <td class="GB1_1 amount ha" id="a_B1_1"><input name="B1_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_2 name" id="t_B1_2" title="冠军 2"><input type="hidden" id="k_B1_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB1_2 odds" id="o_B1_2">--</td>
                                            <td class="GB1_2 amount ha" id="a_B1_2"><input name="B1_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_3 name" id="t_B1_3" title="冠军 3"><input type="hidden" id="k_B1_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB1_3 odds" id="o_B1_3">--</td>
                                            <td class="GB1_3 amount ha" id="a_B1_3"><input name="B1_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_4 name" id="t_B1_4" title="冠军 4"><input type="hidden" id="k_B1_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB1_4 odds" id="o_B1_4">--</td>
                                            <td class="GB1_4 amount ha" id="a_B1_4"><input name="B1_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_5 name" id="t_B1_5" title="冠军 5"><input type="hidden" id="k_B1_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB1_5 odds" id="o_B1_5">--</td>
                                            <td class="GB1_5 amount ha" id="a_B1_5"><input name="B1_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_6 name" id="t_B1_6" title="冠军 6"><input type="hidden" id="k_B1_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB1_6 odds" id="o_B1_6">--</td>
                                            <td class="GB1_6 amount ha" id="a_B1_6"><input name="B1_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_7 name" id="t_B1_7" title="冠军 7"><input type="hidden" id="k_B1_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB1_7 odds" id="o_B1_7">--</td>
                                            <td class="GB1_7 amount ha" id="a_B1_7"><input name="B1_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_8 name" id="t_B1_8" title="冠军 8"><input type="hidden" id="k_B1_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB1_8 odds" id="o_B1_8">--</td>
                                            <td class="GB1_8 amount ha" id="a_B1_8"><input name="B1_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_9 name" id="t_B1_9" title="冠军 9"><input type="hidden" id="k_B1_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB1_9 odds" id="o_B1_9">--</td>
                                            <td class="GB1_9 amount ha" id="a_B1_9"><input name="B1_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB1_10 name" id="t_B1_10" title="冠军 10"><input type="hidden" id="k_B1_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB1_10 odds" id="o_B1_10">--</td>
                                            <td class="GB1_10 amount ha" id="a_B1_10"><input name="B1_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">亚军</th>
                                        </tr>
                                        <tr>
                                            <th class="GB2_1 name" id="t_B2_1" title="亚军 1"><input type="hidden" id="k_B2_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB2_1 odds" id="o_B2_1">--</td>
                                            <td class="GB2_1 amount ha" id="a_B2_1"><input name="B2_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_2 name" id="t_B2_2" title="亚军 2"><input type="hidden" id="k_B2_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB2_2 odds" id="o_B2_2">--</td>
                                            <td class="GB2_2 amount ha" id="a_B2_2"><input name="B2_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_3 name" id="t_B2_3" title="亚军 3"><input type="hidden" id="k_B2_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB2_3 odds" id="o_B2_3">--</td>
                                            <td class="GB2_3 amount ha" id="a_B2_3"><input name="B2_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_4 name" id="t_B2_4" title="亚军 4"><input type="hidden" id="k_B2_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB2_4 odds" id="o_B2_4">--</td>
                                            <td class="GB2_4 amount ha" id="a_B2_4"><input name="B2_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_5 name" id="t_B2_5" title="亚军 5"><input type="hidden" id="k_B2_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB2_5 odds" id="o_B2_5">--</td>
                                            <td class="GB2_5 amount ha" id="a_B2_5"><input name="B2_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_6 name" id="t_B2_6" title="亚军 6"><input type="hidden" id="k_B2_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB2_6 odds" id="o_B2_6">--</td>
                                            <td class="GB2_6 amount ha" id="a_B2_6"><input name="B2_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_7 name" id="t_B2_7" title="亚军 7"><input type="hidden" id="k_B2_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB2_7 odds" id="o_B2_7">--</td>
                                            <td class="GB2_7 amount ha" id="a_B2_7"><input name="B2_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_8 name" id="t_B2_8" title="亚军 8"><input type="hidden" id="k_B2_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB2_8 odds" id="o_B2_8">--</td>
                                            <td class="GB2_8 amount ha" id="a_B2_8"><input name="B2_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_9 name" id="t_B2_9" title="亚军 9"><input type="hidden" id="k_B2_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB2_9 odds" id="o_B2_9">--</td>
                                            <td class="GB2_9 amount ha" id="a_B2_9"><input name="B2_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB2_10 name" id="t_B2_10" title="亚军 10"><input type="hidden" id="k_B2_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB2_10 odds" id="o_B2_10">--</td>
                                            <td class="GB2_10 amount ha" id="a_B2_10"><input name="B2_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第三名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB3_1 name" id="t_B3_1" title="第三名 1"><input type="hidden" id="k_B3_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB3_1 odds" id="o_B3_1">--</td>
                                            <td class="GB3_1 amount ha" id="a_B3_1"><input name="B3_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_2 name" id="t_B3_2" title="第三名 2"><input type="hidden" id="k_B3_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB3_2 odds" id="o_B3_2">--</td>
                                            <td class="GB3_2 amount ha" id="a_B3_2"><input name="B3_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_3 name" id="t_B3_3" title="第三名 3"><input type="hidden" id="k_B3_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB3_3 odds" id="o_B3_3">--</td>
                                            <td class="GB3_3 amount ha" id="a_B3_3"><input name="B3_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_4 name" id="t_B3_4" title="第三名 4"><input type="hidden" id="k_B3_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB3_4 odds" id="o_B3_4">--</td>
                                            <td class="GB3_4 amount ha" id="a_B3_4"><input name="B3_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_5 name" id="t_B3_5" title="第三名 5"><input type="hidden" id="k_B3_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB3_5 odds" id="o_B3_5">--</td>
                                            <td class="GB3_5 amount ha" id="a_B3_5"><input name="B3_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_6 name" id="t_B3_6" title="第三名 6"><input type="hidden" id="k_B3_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB3_6 odds" id="o_B3_6">--</td>
                                            <td class="GB3_6 amount ha" id="a_B3_6"><input name="B3_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_7 name" id="t_B3_7" title="第三名 7"><input type="hidden" id="k_B3_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB3_7 odds" id="o_B3_7">--</td>
                                            <td class="GB3_7 amount ha" id="a_B3_7"><input name="B3_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_8 name" id="t_B3_8" title="第三名 8"><input type="hidden" id="k_B3_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB3_8 odds" id="o_B3_8">--</td>
                                            <td class="GB3_8 amount ha" id="a_B3_8"><input name="B3_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_9 name" id="t_B3_9" title="第三名 9"><input type="hidden" id="k_B3_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB3_9 odds" id="o_B3_9">--</td>
                                            <td class="GB3_9 amount ha" id="a_B3_9"><input name="B3_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB3_10 name" id="t_B3_10" title="第三名 10"><input type="hidden" id="k_B3_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB3_10 odds" id="o_B3_10">--</td>
                                            <td class="GB3_10 amount ha" id="a_B3_10"><input name="B3_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第四名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB4_1 name" id="t_B4_1" title="第四名 1"><input type="hidden" id="k_B4_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB4_1 odds" id="o_B4_1">--</td>
                                            <td class="GB4_1 amount ha" id="a_B4_1"><input name="B4_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_2 name" id="t_B4_2" title="第四名 2"><input type="hidden" id="k_B4_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB4_2 odds" id="o_B4_2">--</td>
                                            <td class="GB4_2 amount ha" id="a_B4_2"><input name="B4_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_3 name" id="t_B4_3" title="第四名 3"><input type="hidden" id="k_B4_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB4_3 odds" id="o_B4_3">--</td>
                                            <td class="GB4_3 amount ha" id="a_B4_3"><input name="B4_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_4 name" id="t_B4_4" title="第四名 4"><input type="hidden" id="k_B4_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB4_4 odds" id="o_B4_4">--</td>
                                            <td class="GB4_4 amount ha" id="a_B4_4"><input name="B4_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_5 name" id="t_B4_5" title="第四名 5"><input type="hidden" id="k_B4_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB4_5 odds" id="o_B4_5">--</td>
                                            <td class="GB4_5 amount ha" id="a_B4_5"><input name="B4_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_6 name" id="t_B4_6" title="第四名 6"><input type="hidden" id="k_B4_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB4_6 odds" id="o_B4_6">--</td>
                                            <td class="GB4_6 amount ha" id="a_B4_6"><input name="B4_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_7 name" id="t_B4_7" title="第四名 7"><input type="hidden" id="k_B4_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB4_7 odds" id="o_B4_7">--</td>
                                            <td class="GB4_7 amount ha" id="a_B4_7"><input name="B4_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_8 name" id="t_B4_8" title="第四名 8"><input type="hidden" id="k_B4_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB4_8 odds" id="o_B4_8">--</td>
                                            <td class="GB4_8 amount ha" id="a_B4_8"><input name="B4_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_9 name" id="t_B4_9" title="第四名 9"><input type="hidden" id="k_B4_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB4_9 odds" id="o_B4_9">--</td>
                                            <td class="GB4_9 amount ha" id="a_B4_9"><input name="B4_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB4_10 name" id="t_B4_10" title="第四名 10"><input type="hidden" id="k_B4_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB4_10 odds" id="o_B4_10">--</td>
                                            <td class="GB4_10 amount ha" id="a_B4_10"><input name="B4_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第五名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB5_1 name" id="t_B5_1" title="第五名 1"><input type="hidden" id="k_B5_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB5_1 odds" id="o_B5_1">--</td>
                                            <td class="GB5_1 amount ha" id="a_B5_1"><input name="B5_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_2 name" id="t_B5_2" title="第五名 2"><input type="hidden" id="k_B5_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB5_2 odds" id="o_B5_2">--</td>
                                            <td class="GB5_2 amount ha" id="a_B5_2"><input name="B5_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_3 name" id="t_B5_3" title="第五名 3"><input type="hidden" id="k_B5_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB5_3 odds" id="o_B5_3">--</td>
                                            <td class="GB5_3 amount ha" id="a_B5_3"><input name="B5_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_4 name" id="t_B5_4" title="第五名 4"><input type="hidden" id="k_B5_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB5_4 odds" id="o_B5_4">--</td>
                                            <td class="GB5_4 amount ha" id="a_B5_4"><input name="B5_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_5 name" id="t_B5_5" title="第五名 5"><input type="hidden" id="k_B5_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB5_5 odds" id="o_B5_5">--</td>
                                            <td class="GB5_5 amount ha" id="a_B5_5"><input name="B5_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_6 name" id="t_B5_6" title="第五名 6"><input type="hidden" id="k_B5_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB5_6 odds" id="o_B5_6">--</td>
                                            <td class="GB5_6 amount ha" id="a_B5_6"><input name="B5_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_7 name" id="t_B5_7" title="第五名 7"><input type="hidden" id="k_B5_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB5_7 odds" id="o_B5_7">--</td>
                                            <td class="GB5_7 amount ha" id="a_B5_7"><input name="B5_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_8 name" id="t_B5_8" title="第五名 8"><input type="hidden" id="k_B5_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB5_8 odds" id="o_B5_8">--</td>
                                            <td class="GB5_8 amount ha" id="a_B5_8"><input name="B5_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_9 name" id="t_B5_9" title="第五名 9"><input type="hidden" id="k_B5_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB5_9 odds" id="o_B5_9">--</td>
                                            <td class="GB5_9 amount ha" id="a_B5_9"><input name="B5_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB5_10 name" id="t_B5_10" title="第五名 10"><input type="hidden" id="k_B5_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB5_10 odds" id="o_B5_10">--</td>
                                            <td class="GB5_10 amount ha" id="a_B5_10"><input name="B5_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="split_panel table_ball">
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第六名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB6_1 name" id="t_B6_1" title="第六名 1"><input type="hidden" id="k_B6_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB6_1 odds" id="o_B6_1">--</td>
                                            <td class="GB6_1 amount ha" id="a_B6_1"><input name="B6_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_2 name" id="t_B6_2" title="第六名 2"><input type="hidden" id="k_B6_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB6_2 odds" id="o_B6_2">--</td>
                                            <td class="GB6_2 amount ha" id="a_B6_2"><input name="B6_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_3 name" id="t_B6_3" title="第六名 3"><input type="hidden" id="k_B6_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB6_3 odds" id="o_B6_3">--</td>
                                            <td class="GB6_3 amount ha" id="a_B6_3"><input name="B6_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_4 name" id="t_B6_4" title="第六名 4"><input type="hidden" id="k_B6_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB6_4 odds" id="o_B6_4">--</td>
                                            <td class="GB6_4 amount ha" id="a_B6_4"><input name="B6_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_5 name" id="t_B6_5" title="第六名 5"><input type="hidden" id="k_B6_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB6_5 odds" id="o_B6_5">--</td>
                                            <td class="GB6_5 amount ha" id="a_B6_5"><input name="B6_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_6 name" id="t_B6_6" title="第六名 6"><input type="hidden" id="k_B6_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB6_6 odds" id="o_B6_6">--</td>
                                            <td class="GB6_6 amount ha" id="a_B6_6"><input name="B6_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_7 name" id="t_B6_7" title="第六名 7"><input type="hidden" id="k_B6_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB6_7 odds" id="o_B6_7">--</td>
                                            <td class="GB6_7 amount ha" id="a_B6_7"><input name="B6_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_8 name" id="t_B6_8" title="第六名 8"><input type="hidden" id="k_B6_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB6_8 odds" id="o_B6_8">--</td>
                                            <td class="GB6_8 amount ha" id="a_B6_8"><input name="B6_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_9 name" id="t_B6_9" title="第六名 9"><input type="hidden" id="k_B6_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB6_9 odds" id="o_B6_9">--</td>
                                            <td class="GB6_9 amount ha" id="a_B6_9"><input name="B6_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB6_10 name" id="t_B6_10" title="第六名 10"><input type="hidden" id="k_B6_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB6_10 odds" id="o_B6_10">--</td>
                                            <td class="GB6_10 amount ha" id="a_B6_10"><input name="B6_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第七名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB7_1 name" id="t_B7_1" title="第七名 1"><input type="hidden" id="k_B7_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB7_1 odds" id="o_B7_1">--</td>
                                            <td class="GB7_1 amount ha" id="a_B7_1"><input name="B7_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_2 name" id="t_B7_2" title="第七名 2"><input type="hidden" id="k_B7_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB7_2 odds" id="o_B7_2">--</td>
                                            <td class="GB7_2 amount ha" id="a_B7_2"><input name="B7_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_3 name" id="t_B7_3" title="第七名 3"><input type="hidden" id="k_B7_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB7_3 odds" id="o_B7_3">--</td>
                                            <td class="GB7_3 amount ha" id="a_B7_3"><input name="B7_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_4 name" id="t_B7_4" title="第七名 4"><input type="hidden" id="k_B7_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB7_4 odds" id="o_B7_4">--</td>
                                            <td class="GB7_4 amount ha" id="a_B7_4"><input name="B7_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_5 name" id="t_B7_5" title="第七名 5"><input type="hidden" id="k_B7_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB7_5 odds" id="o_B7_5">--</td>
                                            <td class="GB7_5 amount ha" id="a_B7_5"><input name="B7_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_6 name" id="t_B7_6" title="第七名 6"><input type="hidden" id="k_B7_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB7_6 odds" id="o_B7_6">--</td>
                                            <td class="GB7_6 amount ha" id="a_B7_6"><input name="B7_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_7 name" id="t_B7_7" title="第七名 7"><input type="hidden" id="k_B7_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB7_7 odds" id="o_B7_7">--</td>
                                            <td class="GB7_7 amount ha" id="a_B7_7"><input name="B7_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_8 name" id="t_B7_8" title="第七名 8"><input type="hidden" id="k_B7_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB7_8 odds" id="o_B7_8">--</td>
                                            <td class="GB7_8 amount ha" id="a_B7_8"><input name="B7_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_9 name" id="t_B7_9" title="第七名 9"><input type="hidden" id="k_B7_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB7_9 odds" id="o_B7_9">--</td>
                                            <td class="GB7_9 amount ha" id="a_B7_9"><input name="B7_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB7_10 name" id="t_B7_10" title="第七名 10"><input type="hidden" id="k_B7_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB7_10 odds" id="o_B7_10">--</td>
                                            <td class="GB7_10 amount ha" id="a_B7_10"><input name="B7_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第八名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB8_1 name" id="t_B8_1" title="第八名 1"><input type="hidden" id="k_B8_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB8_1 odds" id="o_B8_1">--</td>
                                            <td class="GB8_1 amount ha" id="a_B8_1"><input name="B8_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_2 name" id="t_B8_2" title="第八名 2"><input type="hidden" id="k_B8_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB8_2 odds" id="o_B8_2">--</td>
                                            <td class="GB8_2 amount ha" id="a_B8_2"><input name="B8_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_3 name" id="t_B8_3" title="第八名 3"><input type="hidden" id="k_B8_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB8_3 odds" id="o_B8_3">--</td>
                                            <td class="GB8_3 amount ha" id="a_B8_3"><input name="B8_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_4 name" id="t_B8_4" title="第八名 4"><input type="hidden" id="k_B8_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB8_4 odds" id="o_B8_4">--</td>
                                            <td class="GB8_4 amount ha" id="a_B8_4"><input name="B8_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_5 name" id="t_B8_5" title="第八名 5"><input type="hidden" id="k_B8_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB8_5 odds" id="o_B8_5">--</td>
                                            <td class="GB8_5 amount ha" id="a_B8_5"><input name="B8_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_6 name" id="t_B8_6" title="第八名 6"><input type="hidden" id="k_B8_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB8_6 odds" id="o_B8_6">--</td>
                                            <td class="GB8_6 amount ha" id="a_B8_6"><input name="B8_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_7 name" id="t_B8_7" title="第八名 7"><input type="hidden" id="k_B8_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB8_7 odds" id="o_B8_7">--</td>
                                            <td class="GB8_7 amount ha" id="a_B8_7"><input name="B8_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_8 name" id="t_B8_8" title="第八名 8"><input type="hidden" id="k_B8_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB8_8 odds" id="o_B8_8">--</td>
                                            <td class="GB8_8 amount ha" id="a_B8_8"><input name="B8_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_9 name" id="t_B8_9" title="第八名 9"><input type="hidden" id="k_B8_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB8_9 odds" id="o_B8_9">--</td>
                                            <td class="GB8_9 amount ha" id="a_B8_9"><input name="B8_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB8_10 name" id="t_B8_10" title="第八名 10"><input type="hidden" id="k_B8_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB8_10 odds" id="o_B8_10">--</td>
                                            <td class="GB8_10 amount ha" id="a_B8_10"><input name="B8_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第九名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB9_1 name" id="t_B9_1" title="第九名 1"><input type="hidden" id="k_B9_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB9_1 odds" id="o_B9_1">--</td>
                                            <td class="GB9_1 amount ha" id="a_B9_1"><input name="B9_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_2 name" id="t_B9_2" title="第九名 2"><input type="hidden" id="k_B9_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB9_2 odds" id="o_B9_2">--</td>
                                            <td class="GB9_2 amount ha" id="a_B9_2"><input name="B9_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_3 name" id="t_B9_3" title="第九名 3"><input type="hidden" id="k_B9_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB9_3 odds" id="o_B9_3">--</td>
                                            <td class="GB9_3 amount ha" id="a_B9_3"><input name="B9_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_4 name" id="t_B9_4" title="第九名 4"><input type="hidden" id="k_B9_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB9_4 odds" id="o_B9_4">--</td>
                                            <td class="GB9_4 amount ha" id="a_B9_4"><input name="B9_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_5 name" id="t_B9_5" title="第九名 5"><input type="hidden" id="k_B9_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB9_5 odds" id="o_B9_5">--</td>
                                            <td class="GB9_5 amount ha" id="a_B9_5"><input name="B9_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_6 name" id="t_B9_6" title="第九名 6"><input type="hidden" id="k_B9_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB9_6 odds" id="o_B9_6">--</td>
                                            <td class="GB9_6 amount ha" id="a_B9_6"><input name="B9_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_7 name" id="t_B9_7" title="第九名 7"><input type="hidden" id="k_B9_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB9_7 odds" id="o_B9_7">--</td>
                                            <td class="GB9_7 amount ha" id="a_B9_7"><input name="B9_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_8 name" id="t_B9_8" title="第九名 8"><input type="hidden" id="k_B9_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB9_8 odds" id="o_B9_8">--</td>
                                            <td class="GB9_8 amount ha" id="a_B9_8"><input name="B9_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_9 name" id="t_B9_9" title="第九名 9"><input type="hidden" id="k_B9_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB9_9 odds" id="o_B9_9">--</td>
                                            <td class="GB9_9 amount ha" id="a_B9_9"><input name="B9_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB9_10 name" id="t_B9_10" title="第九名 10"><input type="hidden" id="k_B9_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB9_10 odds" id="o_B9_10">--</td>
                                            <td class="GB9_10 amount ha" id="a_B9_10"><input name="B9_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr class="head">
                                            <th colspan="3">第十名</th>
                                        </tr>
                                        <tr>
                                            <th class="GB10_1 name" id="t_B10_1" title="第十名 1"><input type="hidden" id="k_B10_1" value="BALL"><span class="b1">1</span></th>

                                            <td class="GB10_1 odds" id="o_B10_1">--</td>
                                            <td class="GB10_1 amount ha" id="a_B10_1"><input name="B10_1" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_2 name" id="t_B10_2" title="第十名 2"><input type="hidden" id="k_B10_2" value="BALL"><span class="b2">2</span></th>

                                            <td class="GB10_2 odds" id="o_B10_2">--</td>
                                            <td class="GB10_2 amount ha" id="a_B10_2"><input name="B10_2" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_3 name" id="t_B10_3" title="第十名 3"><input type="hidden" id="k_B10_3" value="BALL"><span class="b3">3</span></th>

                                            <td class="GB10_3 odds" id="o_B10_3">--</td>
                                            <td class="GB10_3 amount ha" id="a_B10_3"><input name="B10_3" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_4 name" id="t_B10_4" title="第十名 4"><input type="hidden" id="k_B10_4" value="BALL"><span class="b4">4</span></th>

                                            <td class="GB10_4 odds" id="o_B10_4">--</td>
                                            <td class="GB10_4 amount ha" id="a_B10_4"><input name="B10_4" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_5 name" id="t_B10_5" title="第十名 5"><input type="hidden" id="k_B10_5" value="BALL"><span class="b5">5</span></th>

                                            <td class="GB10_5 odds" id="o_B10_5">--</td>
                                            <td class="GB10_5 amount ha" id="a_B10_5"><input name="B10_5" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_6 name" id="t_B10_6" title="第十名 6"><input type="hidden" id="k_B10_6" value="BALL"><span class="b6">6</span></th>

                                            <td class="GB10_6 odds" id="o_B10_6">--</td>
                                            <td class="GB10_6 amount ha" id="a_B10_6"><input name="B10_6" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_7 name" id="t_B10_7" title="第十名 7"><input type="hidden" id="k_B10_7" value="BALL"><span class="b7">7</span></th>

                                            <td class="GB10_7 odds" id="o_B10_7">--</td>
                                            <td class="GB10_7 amount ha" id="a_B10_7"><input name="B10_7" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_8 name" id="t_B10_8" title="第十名 8"><input type="hidden" id="k_B10_8" value="BALL"><span class="b8">8</span></th>

                                            <td class="GB10_8 odds" id="o_B10_8">--</td>
                                            <td class="GB10_8 amount ha" id="a_B10_8"><input name="B10_8" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_9 name" id="t_B10_9" title="第十名 9"><input type="hidden" id="k_B10_9" value="BALL"><span class="b9">9</span></th>

                                            <td class="GB10_9 odds" id="o_B10_9">--</td>
                                            <td class="GB10_9 amount ha" id="a_B10_9"><input name="B10_9" class="ba" disabled=""></td>
                                        </tr>
                                        <tr>
                                            <th class="GB10_10 name" id="t_B10_10" title="第十名 10"><input type="hidden" id="k_B10_10" value="BALL"><span class="b10">10</span></th>

                                            <td class="GB10_10 odds" id="o_B10_10">--</td>
                                            <td class="GB10_10 amount ha" id="a_B10_10"><input name="B10_10" class="ba" disabled=""></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                        <th><a href="javascript:void(0)">冠军</a></th>
                                        <th><a href="javascript:void(0)">亚军</a></th>
                                        <th class="selected"><a href="javascript:void(0)">第三名</a></th>
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
                                        <th class="selected"><a href="javascript:void(0)" class="ball">第三名</a></th>
                                        <th><a href="javascript:void(0)">大小</a></th>
                                        <th><a href="javascript:void(0)">单双</a></th>
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
export default class K3dan extends Vue {
    get colorSetting() {
  console.log(this.$store.state.colorSetting)
    return this.$store.state.colorSetting;
  }
}
</script>
