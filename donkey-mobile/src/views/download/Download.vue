<template>
  <div class="download">
    <Nav
      :showSearch="false"
      :showUserIcon="false"
      :showMsgBtn="false"
      :showHeadIcon="false"
      :showBackIcon="true"
      :showThemeBtn="false"
      :showDelete="true"
      @deleteItems="deleteItems"
      :pageTitle="'离线缓存'"
    />
    <div class="content">
      <div class="content-wrapper">
        <VidList :class="{'has-count':showCount}" />
      </div>
    </div>
    <VidCount
      :showCount="showCount"
      :vidData="[]"
      @closeCount="closeCount($event)"/>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/common/Nav.vue';
import VidList from '@/components/common/VidList.vue';
import VidCount from '@/components/common/VidCount.vue';
import ADialog from '@/components/common/ADialog.vue'

@Component({
  components: {
    Nav,
    VidList,
    VidCount,
    ADialog
  },
})
export default class Feedback extends Vue {
  private showCount?: boolean = false;

  private closeCount(val: any) {
    this.showCount = val
  }

  private deleteItems() {
    this.showCount = !this.showCount;
    console.log("activate swipe cell selection");
  }

  private async created() {
    alert('本内容仅vip可缓存')
  }
}
</script>
