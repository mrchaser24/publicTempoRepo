<template>
  <div id="footer">
    <div class="info">
      <marquee id="notices" scrollamount="5">
        <span>{{ Announcement.content }}</span>
      </marquee>
    </div>
    <a href="javascript:void(0)" class="more" @click="show = true">更多</a>
    <div class="modal_innounce" :class="show == true ? 'show' : 'Noshow'">
      <div class="announces">
        <img
          class="announce_image_close"
          :src="require(`@/assets/images/close.png`)"
          alt=""
          @click="show = false"
        />
        <img
          class="announce_image"
          :src="require(`@/assets/images/anouncement.svg`)"
          alt=""
        />
        <div class="inf_announces">
          <div class="item">
            <h5>{{ Announcement.insertTime }}</h5>
            <h5>{{ Announcement.title }}</h5>
            <p>{{ Announcement.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AnnouncementInfoCoreService } from "@/core/AnnouncementCore/Service/AnnouncementInfoCoreService"
import { AnnouncementInfoSearchCoreMessage } from "@/core/AnnouncementCore/Message/AnnouncementInfoSearchCoreMessage"

@Component({
  components: {}
})
export default class Footer extends Vue {
  private show?: Boolean = false
  private Announcement?: any[] = [1]

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-12 15:12:33
    * @Description: get announcement data
  */
  private async AnnouncementInfo() {
    let params: any = new AnnouncementInfoSearchCoreMessage()
    await AnnouncementInfoCoreService.Search(params).then((data: any) => {
      this.Announcement = data[data.length - 1];
    })
  }

  private mounted() {
    this.AnnouncementInfo()
  }

}
</script>
<style>
.modal_innounce {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.modal_innounce {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  padding-top: calc(50vh - 150px);
}

.announces {
  width: 500px;
  background: #338fca;
  margin: 0 auto;
  height: 300px;
  padding-left: 150px;
  position: relative;
}

.announces img.announce_image {
  position: absolute;
  left: 30px;
  width: 121px;
  top: 90px;
}

.inf_announces {
  text-align: left;
  padding-left: 13px;
  color: #fff;
  padding-top: 40px;
  height: calc(100% - 40px);
  overflow-y: auto;
  padding-right: 10px;
}

.inf_announces .item h5 {
  margin: 0;
}

.modal_innounce.show {
  display: block;
}

.inf_announces .item p {
  margin: 0;
}

.inf_announces .item {
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
}
img.announce_image_close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 12px;
  cursor: pointer;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
