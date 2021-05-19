<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

//temporary API to check the status of Server
import { AdvertisingInfoCoreService } from "@/core/AdvertisingCore/Service/AdvertisingInfoCoreService"
import { AdvertisingInfoSearchCoreMessage } from "@/core/AdvertisingCore/Message/AdvertisingInfoSearchCoreMessage"
// import VueI18n from 'node_modules/vue-i18n/types'

@Component({
  components: {},
})

export default class App extends Vue {

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param null
    * @Return array || []
    * @Date: 2021-04-12 13:59:53
    * @Description: temporary check server status
  */
  private async checkServerStatus() {
    let params: any = new AdvertisingInfoSearchCoreMessage()
    await AdvertisingInfoCoreService.Search(params)
    .then((data: any) => {
      // console.log(data);
    })
    .catch((err: any) => {
      console.log(err);
    })
  }

  // private lang() {
  //   const i18n = new VueI18n({
  //     locale: localStorage.getItem('locale')
  //   })
  // }

  private created() {
    this.$i18n.locale = localStorage.getItem('locale') as string;
    this.$store.dispatch('setClasshidden', false)
  }

}
</script>

<style>
#app {
  min-width: 1200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
