<template>
  <div class="vid-list ">
    <div class="list-item" v-for="(item, index) in list" :key="index" >
      <van-swipe-cell :before-close="beforeClose" left-width="40" :ref="'swipe'+index">
        <template #left>
          <input type="radio" id="radio" @click="select()">
        </template>
        <van-cell :border="false" class="swipe-content" @click="goVideo(item.id)">
          <div class="left">
            <van-image
              width="115"
              height="70"
              :src="item.img"
            />
          </div>
          <div class="right">
            <span class="desc">{{item.details}}</span>
            <span class="size">{{item.size}}</span>
            <div class="out-con">
              <span class="out" :class="{isWatch: true}">已看完</span>
              <span class="out">详情页<van-icon name="arrow" size="12"/></span>
            </div>
          </div>
        </van-cell>
      </van-swipe-cell>
    </div>
    <a-dialog ref="dialog" class="prompt" :width="70" @onSure="onSure" :height="25"></a-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ADialog from '@/components/common/ADialog.vue'

@Component({
  components: {
    ADialog
  },
})

export default class VidList extends Vue {
  @Prop({ type: String, default: '' }) readonly pageTitle!: string
  private radio?: any = '';
  private getDatas:any = [];
  private list?: any =[];
  private beforeClose( position: any, instance: any) {
    switch (position) {
      case 'left':
      case 'cell':
      case 'outside':
        instance.close();
        break;
      case 'right':
        // Dialog.confirm({
        //   message: 'Are you sure to delete?',
        // }).then(() => {
        //   instance.close();
        // });
        break;
    }
  }
  private goVideo(id:string){
    this.$router.push(`/video/play/${id}`)
  }
  private async created() {
    console.log("进入历史列表")
    this.sendData();
  }

  private onSure(){
    console.log("点击确定按钮")
    this.$router.push({ name: 'Login' })
  }

  private sendData(){
    console.log("111111"+this.pageTitle)
    let params = {};
    this.list = [];
    if(this.pageTitle === "历史记录"){
      this.Apis.historyData(params).then((data: any) => {
        console.log(data);
        if(data.state === 1 && data.message == "用户未登录"){
          let aDialog: any = this.$refs['dialog']
          aDialog.showDialog('警告', data.message,1)
          return;
        }
        this.getDatas = data;
        for(let i=0;i<data.length;i++){
          this.list.push({
            id:data[i].id,
            img:data[i].cover_vertical,
            details:data[i].title,
            size:'26.8M'
          })
        }
      });
    }
    else if(this.pageTitle === "我的收藏"){
      this.Apis.FavoritesData(params).then((data: any) => {
        console.log(data);
        if(data.state === 1 && data.message == "用户未登录"){
          let aDialog: any = this.$refs['dialog']
          aDialog.showDialog('警告', data.message,1)
          return;
        }
        this.getDatas = data;
        for(let i=0;i<data.length;i++){
          this.list.push({
              id:data[i].id,
            img:data[i].cover_vertical,
            details:data[i].title,
            size:'26.8M'
          })
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/components/vidlist.less";
</style>
