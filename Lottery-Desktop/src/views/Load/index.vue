<template>
  <div :class="'skin_' + colorSetting">
    <Header
      @getNextTimeResult="''"
      @selectPage="onSelectPage"
      @selectSub="onSelectSub"
    ></Header>
    <div id="main">
      <Left />
      <div id="iframe" class="frame">
        <div class="L_PK10JSC P_lm">
          <div id="main">
            <div id="header">
              <div class="lottery_info">
                <div class="lottery_info_left floatleft">
                  <span class="name" id="lotteryName">{{ Name }}</span> &mdash;
                  <span class="gameName" id="gameName"></span>
                  <span class="result">
                    &nbsp;今日输赢：
                    <span id="bresult">0.0</span>
                  </span>
                </div>
                <div class="lottery_info_right floatright">
                  <span id="drawNumber">{{ nextTimeResult.next_issue }}</span
                  >期
                  <span class="cdContainer">
                    &nbsp;&nbsp;距离封盘：
                    <span class="color_lv bold">
                      <span id="cdClose">{{ CronoEndTime }}</span>
                    </span>
                  </span>
                  <span class="cdContainer" style="display: none">
                    &nbsp;&nbsp;距开盘：
                    <span class="color_lv bold">
                      <span id="cdOpen"></span>
                    </span>
                  </span>
                  &nbsp;&nbsp;距离开奖：
                  <span class="color_lv bold">
                    <span id="cdDraw">{{ CronoNextTime }}</span>
                  </span>
                  <span id="cdRefresh" style="float: right; width: 50px">
                    <span>{{ Crono }}</span>
                  </span>
                </div>
                <div class="clearfloat"></div>
              </div>
              <div class="control n_anniu">
                <div class="buttons">
                  <label class="checkdefault">
                    <input type="checkbox" class="checkbox" />
                    <span class="color_lv bold">预设</span> </label
                  >&nbsp;&nbsp;
                  <label id="quickAmount" class="quickAmount">
                    <span class="color_lv bold">金额</span>
                    <input />
                  </label>
                  <input
                    type="button"
                    @click="bet()"
                    value="确定"
                    class="button"
                  />
                  <input
                    type="button"
                    onclick="resetBets()"
                    value="重置"
                    class="button"
                  />
                </div>
              </div>
            </div>

            <div id="bet_panel" class="bet_panel input_panel">
              <table class="table_lm">
                <tr class="head">
                  <th colspan="12">冠、亚军和</th>
                </tr>
                <tr>
                  <th class="GGDX_D name" id="t_GDX_D" title=" 冠亚大">
                    <input type="hidden" id="k_GDX_D" />冠亚大
                  </th>

                  <td class="GGDX_D odds" id="o_GDX_D">{{ LMPData.GDX_D }}</td>
                  <td class="GGDX_D amount ha" id="a_GDX_D">
                    <input
                      name="GDX_D"
                      class="ba"
                      v-model="LMPInputData.GDX_D"
                    />
                  </td>

                  <th class="GGDX_X name" id="t_GDX_X" title=" 冠亚小">
                    <input type="hidden" id="k_GDX_X" />冠亚小
                  </th>

                  <td class="GGDX_X odds" id="o_GDX_X">{{ LMPData.GDX_X }}</td>
                  <td class="GGDX_X amount ha" id="a_GDX_X">
                    <input
                      name="GDX_X"
                      class="ba"
                      v-model="LMPInputData.GDX_X"
                    />
                  </td>
                  <th class="GGDS_D name" id="t_GDS_D" title=" 冠亚单">
                    <input type="hidden" id="k_GDS_D" />冠亚单
                  </th>

                  <td class="GGDS_D odds" id="o_GDS_D">{{ LMPData.GDS_D }}</td>
                  <td class="GGDS_D amount ha" id="a_GDS_D">
                    <input
                      name="GDS_D"
                      class="ba"
                      v-model="LMPInputData.GDS_D"
                    />
                  </td>
                  <th class="GGDS_S name" id="t_GDS_S" title=" 冠亚双">
                    <input type="hidden" id="k_GDS_S" />冠亚双
                  </th>

                  <td class="GGDS_S odds" id="o_GDS_S">{{ LMPData.GDS_S }}</td>
                  <td class="GGDS_S amount ha" id="a_GDS_S">
                    <input
                      name="GDS_S"
                      class="ba"
                      v-model="LMPInputData.GDS_S"
                    />
                  </td>
                </tr>
              </table>

              <div class="split_panel">
                <table>
                  <tr class="head">
                    <th colspan="3">冠军</th>
                  </tr>
                  <tr>
                    <th class="GDX1_D name" id="t_DX1_D" title="冠军 大">
                      <input type="hidden" id="k_DX1_D" />大
                    </th>
                    <td class="GDX1_D odds" id="o_DX1_D">
                      {{ LMPData.DX1_D }}
                    </td>
                    <td class="GDX1_D amount ha" id="a_DX1_D">
                      <input
                        name="DX1_D"
                        class="ba"
                        v-model="LMPInputData.DX1_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX1_X name" id="t_DX1_X" title="冠军 小">
                      <input type="hidden" id="k_DX1_X" />小
                    </th>

                    <td class="GDX1_X odds" id="o_DX1_X">
                      {{ LMPData.DX1_X }}
                    </td>
                    <td class="GDX1_X amount ha" id="a_DX1_X">
                      <input
                        name="DX1_X"
                        class="ba"
                        v-model="LMPInputData.DX1_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS1_D name" id="t_DS1_D" title="冠军 单">
                      <input type="hidden" id="k_DS1_D" />单
                    </th>

                    <td class="GDS1_D odds" id="o_DS1_D">
                      {{ LMPData.DS1_D }}
                    </td>
                    <td class="GDS1_D amount ha" id="a_DS1_D">
                      <input
                        name="DS1_D"
                        class="ba"
                        v-model="LMPInputData.DS1_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS1_S name" id="t_DS1_S" title="冠军 双">
                      <input type="hidden" id="k_DS1_S" />双
                    </th>

                    <td class="GDS1_S odds" id="o_DS1_S">
                      {{ LMPData.DS1_S }}
                    </td>
                    <td class="GDS1_S amount ha" id="a_DS1_S">
                      <input
                        name="DS1_S"
                        class="ba"
                        v-model="LMPInputData.DS1_S"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH1_L name" id="t_LH1_L" title="冠军 龙">
                      <input type="hidden" id="k_LH1_L" />龙
                    </th>

                    <td class="GLH1_L odds" id="o_LH1_L">
                      {{ LMPData.LH1_L }}
                    </td>
                    <td class="GLH1_L amount ha" id="a_LH1_L">
                      <input
                        name="LH1_L"
                        class="ba"
                        v-model="LMPInputData.LH1_L"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH1_H name" id="t_LH1_H" title="冠军 虎">
                      <input type="hidden" id="k_LH1_H" />虎
                    </th>

                    <td class="GLH1_H odds" id="o_LH1_H">
                      {{ LMPData.LH1_H }}
                    </td>
                    <td class="GLH1_H amount ha" id="a_LH1_H">
                      <input
                        name="LH1_H"
                        class="ba"
                        v-model="LMPInputData.LH1_H"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">亚军</th>
                  </tr>
                  <tr>
                    <th class="GDX2_D name" id="t_DX2_D" title="亚军 大">
                      <input type="hidden" id="k_DX2_D" />大
                    </th>

                    <td class="GDX2_D odds" id="o_DX2_D">
                      {{ LMPData.DX2_D }}
                    </td>
                    <td class="GDX2_D amount ha" id="a_DX2_D">
                      <input
                        name="DX2_D"
                        class="ba"
                        v-model="LMPInputData.DX2_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX2_X name" id="t_DX2_X" title="亚军 小">
                      <input type="hidden" id="k_DX2_X" />小
                    </th>

                    <td class="GDX2_X odds" id="o_DX2_X">
                      {{ LMPData.DX2_X }}
                    </td>
                    <td class="GDX2_X amount ha" id="a_DX2_X">
                      <input
                        name="DX2_X"
                        class="ba"
                        v-model="LMPInputData.DX2_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS2_D name" id="t_DS2_D" title="亚军 单">
                      <input type="hidden" id="k_DS2_D" />单
                    </th>

                    <td class="GDS2_D odds" id="o_DS2_D">
                      {{ LMPData.DS2_D }}
                    </td>
                    <td class="GDS2_D amount ha" id="a_DS2_D">
                      <input
                        name="DS2_D"
                        class="ba"
                        v-model="LMPInputData.DS2_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS2_S name" id="t_DS2_S" title="亚军 双">
                      <input type="hidden" id="k_DS2_S" />双
                    </th>

                    <td class="GDS2_S odds" id="o_DS2_S">
                      {{ LMPData.DS2_S }}
                    </td>
                    <td class="GDS2_S amount ha" id="a_DS2_S">
                      <input
                        name="DS2_S"
                        class="ba"
                        v-model="LMPInputData.DS2_S"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH2_L name" id="t_LH2_L" title="亚军 龙">
                      <input
                        type="hidden"
                        id="k_LH2_L"
                        :value="LMPInputData.LH2_L"
                      />龙
                    </th>

                    <td class="GLH2_L odds" id="o_LH2_L">
                      {{ LMPData.LH2_L }}
                    </td>
                    <td class="GLH2_L amount ha" id="a_LH2_L">
                      <input
                        name="LH2_L"
                        class="ba"
                        v-model="LMPInputData.LH2_L"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH2_H name" id="t_LH2_H" title="亚军 虎">
                      <input type="hidden" id="k_LH2_H" />虎
                    </th>

                    <td class="GLH2_H odds" id="o_LH2_H">
                      {{ LMPData.LH2_H }}
                    </td>
                    <td class="GLH2_H amount ha" id="a_LH2_H">
                      <input
                        name="LH2_H"
                        class="ba"
                        v-model="LMPInputData.LH2_H"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第三名</th>
                  </tr>
                  <tr>
                    <th class="GDX3_D name" id="t_DX3_D" title="第三名 大">
                      <input type="hidden" id="k_DX3_D" />大
                    </th>

                    <td class="GDX3_D odds" id="o_DX3_D">
                      {{ LMPData.DX3_D }}
                    </td>
                    <td class="GDX3_D amount ha" id="a_DX3_D">
                      <input
                        name="DX3_D"
                        class="ba"
                        v-model="LMPInputData.DX3_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX3_X name" id="t_DX3_X" title="第三名 小">
                      <input type="hidden" id="k_DX3_X" />小
                    </th>

                    <td class="GDX3_X odds" id="o_DX3_X">
                      {{ LMPData.DX3_X }}
                    </td>
                    <td class="GDX3_X amount ha" id="a_DX3_X">
                      <input
                        name="DX3_X"
                        class="ba"
                        v-model="LMPInputData.DX3_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS3_D name" id="t_DS3_D" title="第三名 单">
                      <input type="hidden" id="k_DS3_D" />单
                    </th>

                    <td class="GDS3_D odds" id="o_DS3_D">
                      {{ LMPData.DS3_D }}
                    </td>
                    <td class="GDS3_D amount ha" id="a_DS3_D">
                      <input
                        name="DS3_D"
                        class="ba"
                        v-model="LMPInputData.DS3_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS3_S name" id="t_DS3_S" title="第三名 双">
                      <input type="hidden" id="k_DS3_S" />双
                    </th>

                    <td class="GDS3_S odds" id="o_DS3_S">
                      {{ LMPData.DS3_S }}
                    </td>
                    <td class="GDS3_S amount ha" id="a_DS3_S">
                      <input
                        name="DS3_S"
                        class="ba"
                        v-model="LMPInputData.DS3_S"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH3_L name" id="t_LH3_L" title="第三名 龙">
                      <input type="hidden" id="k_LH3_L" />龙
                    </th>

                    <td class="GLH3_L odds" id="o_LH3_L">
                      {{ LMPData.LH3_L }}
                    </td>
                    <td class="GLH3_L amount ha" id="a_LH3_L">
                      <input
                        name="LH3_L"
                        class="ba"
                        v-model="LMPInputData.LH3_L"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH3_H name" id="t_LH3_H" title="第三名 虎">
                      <input type="hidden" id="k_LH3_H" />虎
                    </th>

                    <td class="GLH3_H odds" id="o_LH3_H">
                      {{ LMPData.LH3_H }}
                    </td>
                    <td class="GLH3_H amount ha" id="a_LH3_H">
                      <input
                        name="LH3_H"
                        class="ba"
                        v-model="LMPInputData.LH3_H"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第四名</th>
                  </tr>
                  <tr>
                    <th class="GDX4_D name" id="t_DX4_D" title="第四名 大">
                      <input type="hidden" id="k_DX4_D" />大
                    </th>

                    <td class="GDX4_D odds" id="o_DX4_D">
                      {{ LMPData.DX4_D }}
                    </td>
                    <td class="GDX4_D amount ha" id="a_DX4_D">
                      <input
                        name="DX4_D"
                        class="ba"
                        v-model="LMPInputData.DX4_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX4_X name" id="t_DX4_X" title="第四名 小">
                      <input type="hidden" id="k_DX4_X" />小
                    </th>

                    <td class="GDX4_X odds" id="o_DX4_X">
                      {{ LMPData.DX4_X }}
                    </td>
                    <td class="GDX4_X amount ha" id="a_DX4_X">
                      <input
                        name="DX4_X"
                        class="ba"
                        v-model="LMPInputData.DX4_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS4_D name" id="t_DS4_D" title="第四名 单">
                      <input type="hidden" id="k_DS4_D" />单
                    </th>

                    <td class="GDS4_D odds" id="o_DS4_D">
                      {{ LMPData.DS4_D }}
                    </td>
                    <td class="GDS4_D amount ha" id="a_DS4_D">
                      <input
                        name="DS4_D"
                        class="ba"
                        v-model="LMPInputData.DS4_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS4_S name" id="t_DS4_S" title="第四名 双">
                      <input type="hidden" id="k_DS4_S" />双
                    </th>

                    <td class="GDS4_S odds" id="o_DS4_S">
                      {{ LMPData.DS4_S }}
                    </td>
                    <td class="GDS4_S amount ha" id="a_DS4_S">
                      <input
                        name="DS4_S"
                        class="ba"
                        v-model="LMPInputData.DS4_S"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH4_L name" id="t_LH4_L" title="第四名 龙">
                      <input type="hidden" id="k_LH4_L" />龙
                    </th>

                    <td class="GLH4_L odds" id="o_LH4_L">
                      {{ LMPData.LH4_L }}
                    </td>
                    <td class="GLH4_L amount ha" id="a_LH4_L">
                      <input
                        name="LH4_L"
                        class="ba"
                        v-model="LMPInputData.LH4_L"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH4_H name" id="t_LH4_H" title="第四名 虎">
                      <input type="hidden" id="k_LH4_H" />虎
                    </th>

                    <td class="GLH4_H odds" id="o_LH4_H">
                      {{ LMPData.LH4_H }}
                    </td>
                    <td class="GLH4_H amount ha" id="a_LH4_H">
                      <input
                        name="LH4_H"
                        class="ba"
                        v-model="LMPInputData.LH4_H"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第五名</th>
                  </tr>
                  <tr>
                    <th class="GDX5_D name" id="t_DX5_D" title="第五名 大">
                      <input type="hidden" id="k_DX5_D" />大
                    </th>

                    <td class="GDX5_D odds" id="o_DX5_D">
                      {{ LMPData.DX5_D }}
                    </td>
                    <td class="GDX5_D amount ha" id="a_DX5_D">
                      <input
                        name="DX5_D"
                        class="ba"
                        v-model="LMPInputData.DX5_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX5_X name" id="t_DX5_X" title="第五名 小">
                      <input type="hidden" id="k_DX5_X" />小
                    </th>

                    <td class="GDX5_X odds" id="o_DX5_X">
                      {{ LMPData.DX5_X }}
                    </td>
                    <td class="GDX5_X amount ha" id="a_DX5_X">
                      <input
                        name="DX5_X"
                        class="ba"
                        v-model="LMPInputData.DX5_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS5_D name" id="t_DS5_D" title="第五名 单">
                      <input type="hidden" id="k_DS5_D" />单
                    </th>

                    <td class="GDS5_D odds" id="o_DS5_D">
                      {{ LMPData.DX5_X }}
                    </td>
                    <td class="GDS5_D amount ha" id="a_DS5_D">
                      <input
                        name="DS5_D"
                        class="ba"
                        v-model="LMPInputData.DS5_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS5_S name" id="t_DS5_S" title="第五名 双">
                      <input type="hidden" id="k_DS5_S" />双
                    </th>

                    <td class="GDS5_S odds" id="o_DS5_S">
                      {{ LMPData.DS5_S }}
                    </td>
                    <td class="GDS5_S amount ha" id="a_DS5_S">
                      <input
                        name="DS5_S"
                        class="ba"
                        v-model="LMPInputData.DS5_S"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH5_L name" id="t_LH5_L" title="第五名 龙">
                      <input type="hidden" id="k_LH5_L" />龙
                    </th>

                    <td class="GLH5_L odds" id="o_LH5_L">
                      {{ LMPData.LH5_L }}
                    </td>
                    <td class="GLH5_L amount ha" id="a_LH5_L">
                      <input
                        name="LH5_L"
                        class="ba"
                        v-model="LMPInputData.LH5_L"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GLH5_H name" id="t_LH5_H" title="第五名 虎">
                      <input type="hidden" id="k_LH5_H" />虎
                    </th>

                    <td class="GLH5_H odds" id="o_LH5_H">
                      {{ LMPData.LH5_H }}
                    </td>
                    <td class="GLH5_H amount ha" id="a_LH5_H">
                      <input
                        name="LH5_H"
                        class="ba"
                        v-model="LMPInputData.LH5_H"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第六名</th>
                  </tr>
                  <tr>
                    <th class="GDX6_D name" id="t_DX6_D" title="第六名 大">
                      <input type="hidden" id="k_DX6_D" />大
                    </th>

                    <td class="GDX6_D odds" id="o_DX6_D">
                      {{ LMPData.DX6_D }}
                    </td>
                    <td class="GDX6_D amount ha" id="a_DX6_D">
                      <input
                        name="DX6_D"
                        class="ba"
                        v-model="LMPInputData.DX6_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX6_X name" id="t_DX6_X" title="第六名 小">
                      <input type="hidden" id="k_DX6_X" />小
                    </th>

                    <td class="GDX6_X odds" id="o_DX6_X">
                      {{ LMPData.DX6_X }}
                    </td>
                    <td class="GDX6_X amount ha" id="a_DX6_X">
                      <input
                        name="DX6_X"
                        class="ba"
                        v-model="LMPInputData.DX6_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS6_D name" id="t_DS6_D" title="第六名 单">
                      <input type="hidden" id="k_DS6_D" />单
                    </th>

                    <td class="GDS6_D odds" id="o_DS6_D">
                      {{ LMPData.DS6_D }}
                    </td>
                    <td class="GDS6_D amount ha" id="a_DS6_D">
                      <input
                        name="DS6_D"
                        class="ba"
                        v-model="LMPInputData.DS6_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS6_S name" id="t_DS6_S" title="第六名 双">
                      <input type="hidden" id="k_DS6_S" />双
                    </th>

                    <td class="GDS6_S odds" id="o_DS6_S">
                      {{ LMPData.DS6_S }}
                    </td>
                    <td class="GDS6_S amount ha" id="a_DS6_S">
                      <input
                        name="DS6_S"
                        class="ba"
                        v-model="LMPInputData.DS6_S"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第七名</th>
                  </tr>
                  <tr>
                    <th class="GDX7_D name" id="t_DX7_D" title="第七名 大">
                      <input type="hidden" id="k_DX7_D" />大
                    </th>

                    <td class="GDX7_D odds" id="o_DX7_D">
                      {{ LMPData.DX7_D }}
                    </td>
                    <td class="GDX7_D amount ha" id="a_DX7_D">
                      <input
                        name="DX7_D"
                        class="ba"
                        v-model="LMPInputData.DX7_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX7_X name" id="t_DX7_X" title="第七名 小">
                      <input type="hidden" id="k_DX7_X" />小
                    </th>

                    <td class="GDX7_X odds" id="o_DX7_X">
                      {{ LMPData.DX7_X }}
                    </td>
                    <td class="GDX7_X amount ha" id="a_DX7_X">
                      <input
                        name="DX7_X"
                        class="ba"
                        v-model="LMPInputData.DX7_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS7_D name" id="t_DS7_D" title="第七名 单">
                      <input type="hidden" id="k_DS7_D" />单
                    </th>

                    <td class="GDS7_D odds" id="o_DS7_D">
                      {{ LMPData.DS7_D }}
                    </td>
                    <td class="GDS7_D amount ha" id="a_DS7_D">
                      <input
                        name="DS7_D"
                        class="ba"
                        v-model="LMPInputData.DS7_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS7_S name" id="t_DS7_S" title="第七名 双">
                      <input type="hidden" id="k_DS7_S" />双
                    </th>

                    <td class="GDS7_S odds" id="o_DS7_S">
                      {{ LMPData.DS7_S }}
                    </td>
                    <td class="GDS7_S amount ha" id="a_DS7_S">
                      <input
                        name="DS7_S"
                        class="ba"
                        v-model="LMPInputData.DS7_S"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第八名</th>
                  </tr>
                  <tr>
                    <th class="GDX8_D name" id="t_DX8_D" title="第八名 大">
                      <input type="hidden" id="k_DX8_D" />大
                    </th>

                    <td class="GDX8_D odds" id="o_DX8_D">
                      {{ LMPData.DX8_D }}
                    </td>
                    <td class="GDX8_D amount ha" id="a_DX8_D">
                      <input
                        name="DX8_D"
                        class="ba"
                        v-model="LMPInputData.DX8_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX8_X name" id="t_DX8_X" title="第八名 小">
                      <input
                        type="hidden"
                        id="k_DX8_X"
                        :value="LMPInputData.DX8_X"
                      />小
                    </th>

                    <td class="GDX8_X odds" id="o_DX8_X">
                      {{ LMPData.DX8_X }}
                    </td>
                    <td class="GDX8_X amount ha" id="a_DX8_X">
                      <input
                        name="DX8_X"
                        class="ba"
                        v-model="LMPInputData.DX8_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS8_D name" id="t_DS8_D" title="第八名 单">
                      <input type="hidden" id="k_DS8_D" />单
                    </th>

                    <td class="GDS8_D odds" id="o_DS8_D">
                      {{ LMPData.DS8_D }}
                    </td>
                    <td class="GDS8_D amount ha" id="a_DS8_D">
                      <input
                        name="DS8_D"
                        class="ba"
                        v-model="LMPInputData.DS8_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS8_S name" id="t_DS8_S" title="第八名 双">
                      <input type="hidden" id="k_DS8_S" />双
                    </th>

                    <td class="GDS8_S odds" id="o_DS8_S">
                      {{ LMPData.DS8_S }}
                    </td>
                    <td class="GDS8_S amount ha" id="a_DS8_S">
                      <input
                        name="DS8_S"
                        class="ba"
                        v-model="LMPInputData.DS8_S"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第九名</th>
                  </tr>
                  <tr>
                    <th class="GDX9_D name" id="t_DX9_D" title="第九名 大">
                      <input type="hidden" id="k_DX9_D" />大
                    </th>

                    <td class="GDX9_D odds" id="o_DX9_D">
                      {{ LMPData.DX9_D }}
                    </td>
                    <td class="GDX9_D amount ha" id="a_DX9_D">
                      <input
                        name="DX9_D"
                        class="ba"
                        v-model="LMPInputData.DX9_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX9_X name" id="t_DX9_X" title="第九名 小">
                      <input type="hidden" id="k_DX9_X" />小
                    </th>

                    <td class="GDX9_X odds" id="o_DX9_X">
                      {{ LMPData.DX9_X }}
                    </td>
                    <td class="GDX9_X amount ha" id="a_DX9_X">
                      <input
                        name="DX9_X"
                        class="ba"
                        v-model="LMPInputData.DX9_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS9_D name" id="t_DS9_D" title="第九名 单">
                      <input type="hidden" id="k_DS9_D" />单
                    </th>

                    <td class="GDS9_D odds" id="o_DS9_D">
                      {{ LMPData.DS9_D }}
                    </td>
                    <td class="GDS9_D amount ha" id="a_DS9_D">
                      <input
                        name="DS9_D"
                        class="ba"
                        v-model="LMPInputData.DS9_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS9_S name" id="t_DS9_S" title="第九名 双">
                      <input type="hidden" id="k_DS9_S" />双
                    </th>

                    <td class="GDS9_S odds" id="o_DS9_S">
                      {{ LMPData.DS9_S }}
                    </td>
                    <td class="GDS9_S amount ha" id="a_DS9_S">
                      <input
                        name="DS9_S"
                        class="ba"
                        v-model="LMPInputData.DS9_S"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr class="head">
                    <th colspan="3">第十名</th>
                  </tr>
                  <tr>
                    <th class="GDX10_D name" id="t_DX10_D" title="第十名 大">
                      <input type="hidden" id="k_DX10_D" />大
                    </th>

                    <td class="GDX10_D odds" id="o_DX10_D">
                      {{ LMPData.DX10_D }}
                    </td>
                    <td class="GDX10_D amount ha" id="a_DX10_D">
                      <input
                        name="DX10_D"
                        class="ba"
                        v-model="LMPInputData.DX10_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDX10_X name" id="t_DX10_X" title="第十名 小">
                      <input type="hidden" id="k_DX10_X" />小
                    </th>

                    <td class="GDX10_X odds" id="o_DX10_X">
                      {{ LMPData.DX10_X }}
                    </td>
                    <td class="GDX10_X amount ha" id="a_DX10_X">
                      <input
                        name="DX10_X"
                        class="ba"
                        v-model="LMPInputData.DX10_X"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS10_D name" id="t_DS10_D" title="第十名 单">
                      <input type="hidden" id="k_DS10_D" />单
                    </th>

                    <td class="GDS10_D odds" id="o_DS10_D">
                      {{ LMPData.DS10_D }}
                    </td>
                    <td class="GDS10_D amount ha" id="a_DS10_D">
                      <input
                        name="DS10_D"
                        class="ba"
                        v-model="LMPInputData.DS10_D"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="GDS10_S name" id="t_DS10_S" title="第十名 双">
                      <input type="hidden" id="k_DS10_S" />双
                    </th>

                    <td class="GDS10_S odds" id="o_DS10_S">
                      {{ LMPData.DS10_S }}
                    </td>
                    <td class="GDS10_S amount ha" id="a_DS10_S">
                      <input
                        name="DS10_S"
                        class="ba"
                        v-model="LMPInputData.DS10_S"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="control bcontrol">
              <div class="lefts" style="display: none">
                已经选中
                <span id="betcount"></span> 注
              </div>
              <div class="buttons">
                <input
                  type="button"
                  class="button2"
                  value="快选金额"
                  onclick="parent.showsetting()"
                />
                <label class="checkdefault">
                  <input type="checkbox" class="checkbox" />
                  <span class="color_lv bold">预设</span> </label
                >&nbsp;&nbsp;
                <label id="quickAmount" class="quickAmount">
                  <span class="color_lv bold">金额</span>
                  <input />
                </label>
                <input
                  type="button"
                  class="button"
                  value="确定"
                  @click="bet()"
                />
                <input
                  type="button"
                  class="button"
                  value="重置"
                  onclick="resetBets()"
                />
              </div>
            </div>
            <div id="resultPanel">
              <table class="tabTitle">
                <tbody>
                  <tr>
                    <th
                      v-for="(item, index) in level"
                      :key="index"
                      :class="{ selected: index == levelIndex }"
                    >
                      <a
                        @click="changeLevel(index)"
                        href="javascript:void(0)"
                        >{{ item }}</a
                      >
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="ballTable">
                <tbody>
                  <tr class="head">
                    <td
                      v-for="(item, index) in Object.keys(upNumbers).length"
                      :key="index"
                      class="b1"
                    >
                      {{ index }}
                    </td>
                  </tr>
                  <tr>
                    <td 
                      v-for="(item, index) in upCurNumber"
                      :key="index" class="b1">
                      {{ item }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="tabTitle">
                <tbody>
                  <tr>
                    <th
                      v-for="(item, index) in downNumbers"
                      :key="index"
                      :class="{ selected: index == downIndex }"
                    >
                      <a @click="changeDown(index)" href="javascript:void(0)">{{
                        index
                      }}</a>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="tabContents">
                <tbody>
                  <tr>
                    <td
                      class="even"
                      v-for="(item, index) in downCurNumber"
                      :key="index"
                      v-html="item.join('<br />')"
                    ></td>
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
              <tr v-for="(item, index) in changlong" :key="index">
                <th>
                  <a>第{{ item.title }}球 - {{ item.value }}</a>
                </th>
                <td>{{ item.num }} 期</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Notice />
    <Footer />
    <!-- 
    /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-19
    * @Description: login notice when first logged in
    */
     -->
    <!-- MODAL --> 
    <Modal 
      v-model="modal1"
      class="log-notice"
      width="300px"
      @on-cancel="cancel">
        <p slot="header">
            <Icon type="information-circled"></Icon>
            <span><i-button class="left-arrow">&lt;&lt;</i-button> 1/2 <i-button class="right-arrow">&gt;&gt;</i-button></span>
        </p>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laboriosam ratione fuga ex maxime veniam nostrum consequatur facilis necessitatibus, sapiente sequi corrupti consectetur, corporis fugiat.</p>
        </div>
        <div slot="footer">
          <i-button class="modal-btn" long @click="ok">OK</i-button>
        </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Layouts/Header.vue'
import Left from '@/components/Layouts/Left.vue'
import Footer from '@/components/Layouts/Footer.vue'
import Notice from '@/components/Layouts/Notice.vue'
import '@/assets/css/bet.css?v=0115'
import { searchLottoryPlayingOdd } from '../../api/lottoryInfo'
import { searchResultPanel } from '../../api/lottoryInfo'
import { searchLottoryChangLong } from '../../api/lottoryInfo'
import { DoBet } from '../../api/lottoryInfo'
// import { LottoryResultCoreService } from '@/core/LottoryCore/Service/LottoryResultCoreService'
import Modals from 'iview'


/*
* @Author: chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-18
* @Description: import Sweet Alert
*/
import sweetAlert from 'sweetalert2/*/sweetalert2.all.js'
import Swal from 'sweetalert2'

@Component({
  components: {
    Header,
    Left,
    Notice,
    Footer
  }
})
export default class Load extends Vue {
  private Name: String = ''
  private changlong: any = []
  private CronoEndTimeInterval: any
  private CronoNextTimeInterval: any
  private iSetCronoEndTime: number = 0
  private iSetCronoNextTime: number = 0
  private nextTimeResult: any = []
  private CronoEndTime: String = ''
  private CronoNextTime: String = ''
  private Crono: String = ''
  private modal1:any = localStorage.getItem('login-notice1') == 'true'? true : false;
  private level: any = [
    '冠军',
    '亚军',
    '第三名',
    '第四名',
    '第五名',
    '第六名',
    '第七名',
    '第八名',
    '第九名',
    '第十名'
  ]
  private levelIndex: number = 0
  private upNumbers: [] = []
  private upCurNumber: [] = []

  private downIndex: any = ''
  private downNumbers: [] = []
  private downCurNumber: [] = []
  private LMPInputData: any = {
    GDX_X: '',
    GDS_S: '',
    GDS_D: '',
    GDX_D: '',
    DX1_D: '',
    DX1_X: '',
    DS1_D: '',
    DS1_S: '',
    DX2_D: '',
    DX2_X: '',
    DS2_D: '',
    DS2_S: '',
    DX3_D: '',
    DX3_X: '',
    DS3_D: '',
    DS3_S: '',
    DX4_D: '',
    DX4_X: '',
    DS4_D: '',
    DS4_S: '',
    DX5_D: '',
    DX5_X: '',
    DS5_D: '',
    DS5_S: '',
    DX6_D: '',
    DX6_X: '',
    DS6_D: '',
    DS6_S: '',
    DX7_D: '',
    DX7_X: '',
    DS7_D: '',
    DS7_S: '',
    DX8_D: '',
    DX8_X: '',
    DS8_D: '',
    DS8_S: '',
    DX9_D: '',
    DX9_X: '',
    DS9_D: '',
    DS9_S: '',
    DX10_D: '',
    DX10_X: '',
    DS10_D: '',
    DS10_S: '',
    LH1_L: '',
    LH1_H: '',
    LH2_L: '',
    LH2_H: '',
    LH3_L: '',
    LH3_H: '',
    LH4_L: '',
    LH4_H: '',
    LH5_L: '',
    LH5_H: '',
    lottery: 'SGFT'
  }
  private LMPData: any = {
    GDX_X: '',
    GDS_S: '',
    GDS_D: '',
    GDX_D: '',
    DX1_D: '',
    DX1_X: '',
    DS1_D: '',
    DS1_S: '',
    DX2_D: '',
    DX2_X: '',
    DS2_D: '',
    DS2_S: '',
    DX3_D: '',
    DX3_X: '',
    DS3_D: '',
    DS3_S: '',
    DX4_D: '',
    DX4_X: '',
    DS4_D: '',
    DS4_S: '',
    DX5_D: '',
    DX5_X: '',
    DS5_D: '',
    DS5_S: '',
    DX6_D: '',
    DX6_X: '',
    DS6_D: '',
    DS6_S: '',
    DX7_D: '',
    DX7_X: '',
    DS7_D: '',
    DS7_S: '',
    DX8_D: '',
    DX8_X: '',
    DS8_D: '',
    DS8_S: '',
    DX9_D: '',
    DX9_X: '',
    DS9_D: '',
    DS9_S: '',
    DX10_D: '',
    DX10_X: '',
    DS10_D: '',
    DS10_S: '',
    LH1_L: '',
    LH1_H: '',
    LH2_L: '',
    LH2_H: '',
    LH3_L: '',
    LH3_H: '',
    LH4_L: '',
    LH4_H: '',
    LH5_L: '',
    LH5_H: '',
    lottery: 'SGFT'
  }

  /*
  * @Author: chase 
  * @LastAuthor: null
  * @Param null
  * @Return null
  * @Date: 2021-04-19
  * @Description: login notice condition
  */
  private ok () {
      localStorage.setItem('login-notice1', 'false');
  }
  private cancel () {
      localStorage.setItem('login-notice1', 'false');
  }

  private async onSelectPage(item: any) {}
  private setCronoEndTime() {
    var _this = this
    this.CronoEndTimeInterval = setInterval(function() {
      if (_this.iSetCronoEndTime > 0) {
        _this.CronoEndTime = _this.secondsToHms(_this.iSetCronoEndTime)
        _this.iSetCronoEndTime--
      } else {
        _this.CronoEndTime = _this.secondsToHms(_this.nextTimeResult.end_time)
        _this.iSetCronoEndTime = _this.nextTimeResult.end_time
      }
    }, 1000)
  }
  private bet() {
    let arr = []
    for (let i in this.LMPInputData) {
      let cArr = i.split('_')
      let amonut = parseFloat(this.LMPInputData[i]) || 0
      if (amonut == 0) {
        continue
      }
      let temp = {
        amount: amonut,
        title: 'sg飞艇',
        content: cArr[1],
        game: cArr[0],
        odds: this.LMPData[i]
      }
      arr.push(temp)
    }
    let params = {
      _token: this.token,
      lottery: 'SGFT',
      curissue: this.nextTimeResult.next_issue,
      bet: JSON.stringify(arr)
    }
    DoBet(params).then(res => {
      if (res.data.state == 0) {
        alert('下注成功')
        for (let i in this.LMPInputData) {
          this.LMPInputData[i] = ''
        }
        this.$store.dispatch('setUserInfo', res.data.data.user)
      }
    })
  }
  private setCronoNextTime() {
    var _this = this
    this.CronoNextTimeInterval = setInterval(function() {
      if (_this.iSetCronoNextTime > 0) {
        _this.CronoNextTime = _this.secondsToHms(_this.iSetCronoNextTime)
        _this.iSetCronoNextTime--
      } else {
        _this.CronoNextTime = _this.secondsToHms(_this.nextTimeResult.next_time)
        _this.iSetCronoNextTime = _this.nextTimeResult.next_time
      }
    }, 1000)
  }
  private setCrono() {
    var i = 10
    this.Crono = i + '秒'
    i = i - 1
    setInterval(() => {
      if (i > 0) {
        this.Crono = i + '秒'
        i = i - 1
      } else {
        this.Crono = '加载中…'
        i = 10
      }
    }, 1000)
  }
  get token() {
    return this.$store.state['_token']
      ? this.$store.state['_token']
      : localStorage.getItem('_token')
  }
  private secondsToHms(d: any) {
    d = Number(d)
    if (d > 0) {
      var h = Math.floor(d / 3600)
      var m = Math.floor((d % 3600) / 60)
      var s = Math.floor((d % 3600) % 60)

      var hDisplay = h
      var mDisplay = m
      var sDisplay = s
      if (hDisplay > 0) {
        return (
          ('0' + h).slice(-2) +
          ':' +
          ('0' + m).slice(-2) +
          ':' +
          ('0' + s).slice(-2)
        )
      } else {
        return ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
      }
    } else {
      return ''
    }
  }
  // private getNextTimeResult(EnName: String) {
  //   this.nextTimeResult = []
  //   LottoryResultCoreService.getNextTime({
  //     _token: this.token,
  //     EnName: EnName
  //   }).then((data: any) => {
  //     this.nextTimeResult = data.data

  //     clearInterval(this.CronoEndTimeInterval)
  //     this.iSetCronoEndTime = this.nextTimeResult.end_time
  //     this.setCronoEndTime()
  //     clearInterval(this.CronoNextTimeInterval)
  //     this.iSetCronoNextTime = this.nextTimeResult.next_time
  //     this.setCronoNextTime()
  //   })
  // }
  private async onSelectSub(item: any) {
    this.Name = item.Name
    await searchLottoryPlayingOdd({
      Equal_LottoryPlayingOdd_LottoryPlayingId: item.Id
    })
      .then(res => {
        if (res.status == 200) {
          let data = res.data
          let tempArr: any = []
          let tempData = this.LMPData
          for (let key in tempData) {
            for (let i = 0; i < data.length; i++) {
              if (data[i].Name == key) {
                tempData[key] = data[i].Odd
                break
              }
            }
            this.LMPData = tempData
          }
          // for (let i = 0; i < data.length; i++) {
          //   let isAdd = true
          //   for (let j = 0; j < tempArr.length; j++) {
          //     if (tempArr[j].EnName == data[i].EnName) {
          //       try {
          //         tempArr[j].data.push(JSON.parse(data[i].Json))
          //         isAdd = false
          //         break
          //       } catch (error) {
          //         console.log(error)
          //       }
          //     }
          //   }
          //   if (true == isAdd) {
          //     try {
          //       tempArr.push({
          //         EnName: data[i].EnName,
          //         Name: data[i].Name,
          //         data: [JSON.parse(data[i].Json)],
          //       })
          //     } catch (error) {
          //       console.log(error)
          //     }
          //   }
          // }
          // console.log(tempArr)
          // for (let i = 0; i < tempArr.length; i++) {
          //   if (this.Name == tempArr[i].EnName) {
          //     console.log(tempArr[i].data[0])
          //     this.LMPData = tempArr[i].data[0]
          //   }
          // }
          //   commit('setLottoryInfo', data);
        }
      })
      .catch((e: string) => console.error(e))
  }
  get colorSetting() {
    return this.$store.state.colorSetting
  }


  /*
  * @Author: chase 
  * @LastAuthor: null
  * @Param null
  * @Return null
  * @Date: 2021-04-18
  * @Description: added Sweet Alert
  */
  private alertServerDown(){
    Swal.fire('游戏维护中', '', 'error')
  }
  private async created() {
    // this.getNextTimeResult('SGFT')
    this.setCrono()

    let token = this.$store.state['_token']
    let params = {
      _token: token,
      EnName: 'SGFT'
    }

    /*
    * @Author: chase 
    * @LastAuthor: null
    * @Param null
    * @Return null
    * @Date: 2021-04-18
    * @Description: Show Alert when server down
    */
    let res: any = await searchLottoryChangLong(params)
      .catch(() => this.alertServerDown());

    this.changlong = res.data.data
    console.log(token)
    let panel = await searchResultPanel(params)
    // this.upNumbers = panel.data.data.up
    // let key: any = Object.keys(this.upNumbers)
    // this.upCurNumber = this.upNumbers[key[this.levelIndex]]

    // this.downNumbers = panel.data.data.down
    // key = Object.keys(this.downNumbers)
    // this.downIndex = key[0]

    // this.downCurNumber = this.downNumbers[this.downIndex]
    // if (null != token) {
    //   this.$store.dispatch('setToken', token)
    //   this.$store.dispatch('sendSearchLottoryInfo')
    // } else {
    //   this.$router.push({ name: 'Login' })
    // }
  }

  private changeLevel(index: number) {
    this.levelIndex = index

    let key: any = Object.keys(this.upNumbers)
    this.upCurNumber = this.upNumbers[key[this.levelIndex]]
  }
  private changeDown(index: string) {
    this.downIndex = index
    this.downCurNumber = this.downNumbers[this.downIndex]
  }
}
</script>

<!-- 
/*
* @Author: chase 
* @LastAuthor: null
* @Param null
* @Return null
* @Date: 2021-04-19
* @Description: modal css design
*/
-->
<style lang="less" scoped>
@import url("//unpkg.com/iview/dist/styles/iview.css");
.log-notice {
  text-align: center;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
 ::v-deep .ivu-modal {
    .ivu-modal-content {
      height: 400px;
      border-radius: 6px;
      background: linear-gradient(to top, #39b7f1 0%, #51bff7 100%);
      
      .ivu-modal-close i{
        color: #fff;
        margin-top: -4px;
      }
      .ivu-modal-header {
        border-bottom: none;
        padding:2px;
        color: #fff;
        .ivu-btn{
          background-color: transparent;
          border: none;
          color: #fff;
          font-size: 12px;
          line-height: 1px;
          padding:0 20px;
          font-weight: lighter;
        }
        p {
          font-size: 12px;
          color: #fff;
          font-weight: lighter;
        }
      }
      .ivu-modal-body {
        color: #fff;
        // TEMPORARY VALUE REMOVE WHEN ICON READY AT BOTTOM
        padding-bottom: 20vh;
        // TEMPORARY VALUE REMOVE WHEN ICON READY AT TOP
      }
      .ivu-modal-footer {
        color: #fff;
        border-top: none;
        margin: auto;
        width: fit-content;

        .ivu-btn{
          background-color: orange;
          border: none;
          color: #fff;
          width: 120px;
          height: 40px;
          font-size: 12px;
          line-height: 1px;
          text-align: center;
          padding:0 20px;
          font-weight: lighter;
          border-radius: 0;
          border-bottom: 5px solid rgb(182, 118, 0);
        }
      }
    }
  }
}
</style>