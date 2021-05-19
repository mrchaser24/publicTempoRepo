<template>
  <div class="image-drop-lets">
    <van-grid :border="true" :column-num="2" :gutter="10">
      <van-grid-item v-for="(item, index) in items" :key="index">
        <!-- <van-image :src="item" /> -->
       
         <div class="radus" @click="goVideo(item.id)">
            <div class="img-warp">
              <img class="img" :src="item.cover" alt="">
            </div>
            <div class="title">{{item.title}}</div>
         </div>
        
      </van-grid-item>
    </van-grid>
    <van-empty v-if="empty" image="https://img01.yzcdn.cn/vant/custom-empty-image.png" description="没有数据" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class ImageDropLets extends Vue {
  @Prop({type: Array, default: () => { [] }}) readonly items!: any[];
  @Prop() private empty!:boolean
  mounted(){
  }
  private goVideo(id:string){
    this.$router.push(`/video/play/${id}`)
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/components/ImageDropLets.less";

.title{
  text-overflow: ellipsis;
  width: 8rem;

  line-height: 1rem;
  overflow: hidden;
  word-break: keep-all;
  font-size: .8rem;
  margin-top: 5px;
  margin-bottom: 5px;
text-decoration:none;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.image-drop-lets .van-grid-item {
  height: auto !important;

}
.radus{
  border-radius: 5px;
  overflow: hidden;
}
.img-warp{
  // width: 100%;
  
}
.img{
  // width: 100%;
  // height: 100%;
}
.theme-color-night .image-drop-lets{
  
  ::v-deep  .van-grid-item__content{
    background: @primary-content-bg-color;
  }
  .title{
    color: @seconday-text-color;
  }
  
}
</style>
