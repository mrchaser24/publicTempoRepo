<template>
  <div id="header" class="header">
    <div class="logo">
      <span>{{ '大晟' }}</span>
    </div>
    <div class="top">
      <div class="menu">
        <div class="menu1">
          <div v-if="lotteryInfo.name" id="result_info" class="draw_number">
            <div>
              {{ lotteryInfo.name }}
            </div>
            <div>
              {{ lotteryInfo.currentIssue }}期开奖
            </div>
          </div>
          <a
            v-if="lotteryInfo.currentDrawNumber"
            id="result_balls"
            target="_blank"
            class="T_PK10 "
            :class="'L_' + 'XYNC'"
          >
            <span
              v-for="(item, index) in lotteryInfo.currentDrawNumber.split(',')"
              :key="index"
            >
              <b :class="'b' + item">{{ item }}</b>
            </span>
          </a>
        </div>
        <div class="menu2">
          <span><a href="#/Details">未结明细</a></span> |
          <span><a href="#/Today">今天已结</a></span> |
          <span><a href="#/Twoweek">两周报表</a></span> |
          <span><a href="#/Lottoryhistory">开奖结果</a></span> <br />
          <span><a href="#/Mineinfo">个人资讯</a></span> |
          <span><a href="#/ChangePassword">修改密码</a></span> |
          <span><a href="#/GameRule">游戏规则</a></span> |
          <span id="skinPanel">
            <!-- <input
              type="checkbox"
              name="color_setting"
              id="color_setting"
              v-for="(item, key) in themeColorList"
              :key="key"
              :class="[item, colorSetting == item ? 'checked' : '']"
              @click="changeColorSettig(item)"
              :value="item"
              v-model="colorSetting"
              :checked="colorSetting == item"
            /> -->
          </span>
        </div>
        <div class="menu3"><a href="#/" class="logout" @click="logOut">退出</a></div>
        <div class="switch-local-box pos-menu">
          <LangSwitcher />
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="lotterys">
        <div id="lotterys">
          <!-- 
            /*
            * @Author: chase 
            * @LastAuthor: null
            * @Param null
            * @Return null
            * @Date: 2021-04-18
            * @Description: Show 8 tabs only
          */
           -->
          <li v-for="(item, key) in tabsShow" :key="key">
            <a
              @click="goPage(item)"
              :id="item.mark"
              lang="PK10_0"
              :class="itemActive == item.id ? 'activeMenu' : ''"
              ><span>{{ item.name }}</span></a
            >
          </li>
          <li class="drop-down-item">
          <Dropdown  @on-click="changeMenu">
            <a href="javascript:void(0)">
              {{ activeDropdownItem ? activeDropdownItem : '更多游戏' }}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <!-- 
                /*
                * @Author: chase 
                * @LastAuthor: null
                * @Param null
                * @Return null
                * @Date: 2021-04-18
                * @Description: Show 2 tabs in dropdown
              */
              -->
              <DropdownItem
                v-for="(item, key) in tabsDropDown"
                :key="key"
                :name="JSON.stringify(item)">{{ item.name }}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </li>
          <li>
            <a class="setting" @click="OpensettingsTop()">设置</a>
          </li>
          <!-- <div class="show "></div> -->

          <!-- <a class="more_game"><span>更多游戏</span></a> -->
          <!-- <a class="setting" @click="OpensettingsTop()">设置</a> -->
        </div>
      </div>

      <div class="sub">
        <div id="sub_SGFT">
          <a
            v-for="(item, key) in selectArr"
            :key="'selectArr' + key"
            :id="item.name"
            lang="PK10_0"
            :class="{'active-sub-item': subItemActive == key}"
            @click="goSub(item, key)"
            ><span>{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
    <div id="notice1" :class="settingsTop == true ? 'show' : 'Noshow'">
      <div class="back_body"></div>
      <div class="back_body"></div>
      <div id="settings" class="notice_div">
        <div class="header_settings">
          <span>{{ $t('chooseDisplayColor') }}</span>
          <img
            class="settings_image_close"
            :src="require(`@/assets/images/close.png`)"
            alt=""
            @click="settingsTop = false"
          />
        </div>
        <div class="content_settings">
          <draggable
            :list="AllLotteries"
            :disabled="!enabled"
            class="list-group"
            ghost-class="ghost"
            @start="dragging = true"
            @end="dragging = false"
          >

            <!-- /*
              * @Author: chase
              * @LastAuthor: null
              * @Param: null
              * @Return: 
              * @Date: 2021-04-19
              * @Description: add gameinfo api
            */ -->
            <div
              class="list-group-item"
              v-for="element in gameInfoAll"
              :key="element.Name"
            >
              <input
                type="checkbox"
                @click="changeStatus(element.Id)"
                :checked="element.Status == 0"
              />
              <label>{{ element.name }}</label>
            </div>
          </draggable>
          <p>{{ $t('noteDragColor') }}</p>
        </div>
        <div class="footer_settings">
          <input
            type="button"
            @click="validate()"
            :value="$t('determine')"
            class="button"
          />
          <input type="button" @click="cancel()" :value="$t('cancel')" class="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { GameInfoCoreService } from "@/core/GameCore/Service/GameInfoCoreService"
import { GameInfoSearchCoreMessage } from "@/core/GameCore/Message/GameInfoSearchCoreMessage"
import {GamePlayingClassificationCoreService} from "@/core/GameCore/Service/GamePlayingClassificationCoreService"
import {GamePlayingClassificationSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationSearchCoreMessage"

import { searchLottoryPlaying } from '../../api/lottoryInfo'
import draggable from 'vuedraggable'
import '@/assets/css/balls.css'
import LangSwitcher from '@/components/LangSwitcher.vue'

@Component({
  components: {
    draggable,
    LangSwitcher
  }
})
export default class Home extends Vue {
  private activeLocale: any = this.$i18n.locale;
  private activeDropdownItem: any = '';
  private lotteryInfo: any = {};
  private itemActive: any = '';
  private AllLotteries: any[] = [];
  private enabled: boolean = true;
  private dragging: Boolean = false;
  private subItemActive: any = 0;
  private SettingsLotteries: any[] = [];
  private selectArr: any = [];
  private settingsTop: Boolean = false;
  private oldAllLotteries: any[] = [];
  private LottoryResult: any[] = [];
  private tabsShow:any = [];
  private tabsDropDown:any = [];
  private gameInfoAll:any = [];
  private themeColorList: any = [
    'red',
    'blue',
    'orange',
    'green'
  ];
  private langList: any = [
    { 
      title: 'zh',
      name: 'zn' 
    },
    { 
      title: 'en', 
      name: 'en' 
    },
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-15 17:16:55
    * @Description: switch language
  */
  private switchLocale (locale: any){
    this.$i18n.locale = locale;
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-12 15:34:43
    * @Description: get current color theme
  */
  get colorSetting() {
    return this.$store.state.colorSetting
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-12 15:34:43
    * @Description: get game info data
  */
  private async GameInfo() {
    let params: any = new GameInfoSearchCoreMessage()
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.AllLotteries = data;
      

      for (let i = 0; i < 8; i++) {
        this.tabsShow.push(data[i])
      }
      for (let i = 8; i <= 9; i++) {
        this.tabsDropDown.push(data[i])
      }

    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: id: any
    * @Return: array || []
    * @Date: 2021-04-12 16:58:11
    * @Description: get game lottery info data
  */
  private async SingleGameInfo(id: any) {
    let params: any = new GameInfoSearchCoreMessage();
    params.equal_id_gameInfo = id;
    await GameInfoCoreService.Search(params).then((data: any) => {
      this.lotteryInfo = data[0];
      this.setCurrentGame(data[0]);
      this.itemActive = this.lotteryInfo.id;
      this.GamePlayingClassification(id);
    })
  }

  /*
    * @Author: chase
    * @LastAuthor: null
    * @Param: null
    * @Return: 
    * @Date: 2021-04-19
    * @Description: add gameinfo
  */
  private async gameInfoAPI() {
    let params: any = new GameInfoSearchCoreMessage()
    params.greater_id_gameInfo=0;
    await GameInfoCoreService.Search(params).then((data: any)=> {
      this.gameInfoAll = data;
      console.log(data, 'Game API')

    })
  }

  private async GamePlayingClassification(id: any) {
    let params: any = new GamePlayingClassificationSearchCoreMessage()
    params.equal_gameInfo_gamePlayingClassification=id;
    await GamePlayingClassificationCoreService.Search(params).then((data: any)=> {
      this.selectArr = data;
      // console.log(data)

      // console.log(arrIto)
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: id: any
    * @Return: array || []
    * @Date: 2021-04-12 11:45:32
    * @Description: logout user, remove all local storage and jump page to login page
  */
  private logOut() {
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('_token');
    this.$router.push({ name: 'login' })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: item: any
    * @Return: null
    * @Date: 2021-04-13 13:16:15
    * @Description: select dropdown item
  */
  changeMenu(item: any) {
    let newItem = JSON.parse(item);
    this.goPage(newItem);
    this.activeDropdownItem = newItem.name;
  }

  private OpensettingsTop() {
    this.oldAllLotteries = [...this.AllLotteries]
    this.settingsTop = true
  }

  private validate() {
    this.settingsTop = false
  }

  private cancel() {
    this.AllLotteries = [...this.oldAllLotteries]
    this.settingsTop = false
  }

  private changeStatus(id: any) {
    var _this = this
    var copyOldAllLotteries = [...this.oldAllLotteries]
    this.AllLotteries.forEach(function(item) {
      if (item.Id == id) {
        if (item.Status == 1 || item.Status == null) {
          item.Status = 0
        } else {
          item.Status = 1
          console.log(item.Status)
        }
      }
    })
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: [item: any, index: number]
    * @Return: null
    * @Date: 2021-04-13 11:59:03
    * @Description: select a lottery game playing classification item
  */
  private goSub(item: any, index = 0) {
    this.subItemActive = index
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: item: any
    * @Return: null
    * @Date: 2021-04-13 11:58:22
    * @Description: select a lottery game and replace a router
  */
  private goPage(item: any) {
    if (this.$route.params.lotteryid != item.id) {
      this.itemActive = item.id;
      this.SingleGameInfo(item.id);
      this.GamePlayingClassification(item.id);
      this.$router.replace(
        {
          name: 'home',
          params: {
            lotterytype: item.classificationModel.mark.replace(/\s+/g, ''),
            lotteryid: item.id,
          }
        }
      );
    }
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: color: any
    * @Return: null
    * @Date: 2021-04-13 11:58:22
    * @Description: change theme color
  */
  // private changeColorSettig(color: String) {
  //   this.$store.dispatch('setColorSetting', color)
  // }
  get getLanguage() {
    return this.$store.state.locale;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: item: any
    * @Return: null
    * @Date: 2021-04-19 16:13:31
    * @Description: set current game to local storage
  */
  private setCurrentGame(item: any) {
    localStorage.setItem('GameInfo', JSON.stringify(item))
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-19 16:30:02
    * @Description: get current game from local storage
  */
  get getCurrentGame() {
    let item: any = localStorage.getItem('GameInfo');
    return JSON.parse(item);
  }

  private async created() {
    await this.GameInfo();
    if (this.$route.params.lotteryid) {
      await this.SingleGameInfo(this.$route.params.lotteryid);
    } else {
      await this.SingleGameInfo(this.getCurrentGame.id);
    }
    await this.gameInfoAPI()
  }
}
</script>
<style>
.menu .switch-local-box {
  position: absolute;
  top: 15px;
  right: 40px;
  display: flex;
  overflow: unset;
}

.menu .switch-local-box>div {
  cursor: pointer;
  font-size: 13px;
}

.menu .ivu-select-single .ivu-select-selection {
  background: #1b4075;
  border: none;
}

.menu .ivu-select-head-with-prefix.ivu-select-selected-value {
  color: #fff;
}

.skin_blue .header .sub a.active-sub-item {
    color: #fff;
    border: 1px solid #ff6e39;
    background: linear-gradient(to bottom, #ff8d52 0%, #ff692a 100%);
}
.skin_blue>#header {
  overflow: unset;
}

.header .top{
  overflow: unset;
}

.lotterys {
  overflow: unset;
}

#lotterys .drop-down-item li {
  display: block;
  color: #fff;
}

#lotterys .drop-down-item li:hover {
  background-color: #264167;
}


#lotterys .ivu-dropdown .ivu-select-dropdown {
  background-color: #386BAD;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

#lotterys {
  overflow: hidden;
  display: flex;
}


#lotterys a {
  cursor: pointer;
}
input#color_setting {
  margin: 0;
  margin-left: 1px;
  margin-right: 1px;
  position: relative;
  top: 3px;
}
input#color_setting:before {
  content: '';
  border: 1px solid #fff;
  width: 10px;
  height: 10px;
  position: absolute;
}

input#color_setting.blue:before {
  background: #168fcb;
}

input#color_setting.green:before {
  background: #76b000;
}
input#color_setting.red:before {
  background: #b42e41;
}
input#color_setting.checked:after {
  content: '';
  content: '\2713';
  position: absolute;
  color: #fff;
  font-size: 7pt;
  left: 2px;
  font-weight: bold;
  top: -1px;
}
input#color_setting.blue:before {
  background: #0680b9;
}

input#color_setting.orange:before {
  background: #bf4b0b;
}
#lotterys a.activeMenu {
  background: #f6f6f6;
  color: #1b4075;
}
div#settings {
  background: #fff;
  margin: 0;
  top: 142px;
  border: 3px solid blue;
}

.header_settings {
  padding: 4px 11px;
  line-height: 16px;
  text-align: left;
  background: linear-gradient(to bottom, #fff 0%, #b2d1e9 100%);
}

img.settings_image_close {
  position: absolute;
  right: 4px;
  width: 13px;
  cursor: pointer;
}

div#notice1.Noshow {
  display: none;
}

.content_settings {
  padding: 18px;
}

.content_settings .list-group-item {
  margin: 8px auto;
  text-align: left;
  max-width: calc(100% - 50px);
  cursor: move;
  display: flex;
  align-items: center;
}


.content_settings .list-group-item input {
  margin-right: 5px;
}

.content_settings p {
  color: red;
  text-align: left;
  margin: 0;
}
.footer_settings {
  padding: 4px 11px;
  line-height: 16px;
  text-align: center;
  background: linear-gradient(to top, #fff 0%, #b2d1e9 100%);
  padding-top: 9px;
}

.footer_settings input.button {
  margin-left: 7px;
}
div#lotterys li {
  display: inline;
}
</style>
