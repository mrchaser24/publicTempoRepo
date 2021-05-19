<template>
  <div class="image-drop-lets">
    <van-grid :border="true" :column-num="2" :gutter="10">
      <van-grid-item v-for="(item, index) in items" :key="index">
        <!-- <van-image :src="item" /> -->
        <router-link :to="`/video/play/${item.id}`">
          <img :src="item.cover" alt="">
          <div class="title">{{item.title}}</div>
        </router-link>
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
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
@import "../../assets/styles/components/ImageDropLets.less";
</style>
