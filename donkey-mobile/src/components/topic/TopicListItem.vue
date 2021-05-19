<template>
  <div class="topic-item" @click="goVideoList">
    <div class="topic-item-con">
      <div class="item-img">
        <img :src="itemData.pic" />	
      </div>
      <div class="item-details">
        <span>{{ itemData.title }} </span>
        <span> {{ itemData.describe }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})

export default class TopicListItem extends Vue {
  @Prop({ type: Object, default: {} }) public readonly itemData!: any;

  private goVideoList() {

        localStorage.setItem(
            "jumptop",
            JSON.stringify({
                title: this.itemData.title,
                category_id: this.itemData.id
            })
        );

        this.$router.push({
            name: "toplist"
        });
    }
}
</script>