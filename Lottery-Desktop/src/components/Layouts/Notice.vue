<template>
    <div class="Notice" :class="Classhidden==true?'hidden':''" >
        <div v-for="(item,index) in Announcement" :key="index" >
            <div  id="notice1" v-if="index==announceActive" >
                <div class="back_body" ></div>
                <div class="back_body" ></div>
                <div :class="colorSetting+'_back'" class="notice_div" >
                    <a  ><div id="notClose1" class="close_icon" @click="closeNotice()"></div></a>
                    <div class="notice_page" ><a  id="btnPrev1" v-if="index>0" @click="announceActive=index-1"  class="notice_prev" >&lt;&lt;</a>{{index+1}}/{{Announcement.length}}<a  class="notice_next" id="btnNext1" @click="announceActive=index+1" >&gt;&gt;</a></div>
                    <div class="notice_icon" >
                        <div class="nicon_icon1" ></div>
                        <div class="nicon_button" ><a class="notice_white animate" >更多</a></div>
                    </div>
                    <div class="notice_font" >
                        {{item.Content}}
                    </div>
                    <div id="notice_button1" class="notice_button" @click="notice(index)" ><a  class="notice_yellow animate" >知道</a></div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    // import { UserService } from '@/core/UserCore/Service/UserServer'
    // import { RandCodeClassificationService } from '@/core/OtherCore/Service/RandCodeClassificationService'

    import '@/assets/css/notice_popup.css'
import { AnnouncementInfoCoreService } from '@/core/AnnouncementCore/Service/AnnouncementInfoCoreService'

    @Component({
      components: {}
    })
    export default class Notice extends Vue {
          private Announcement?: any[] = []
            private announceActive: any = 0
        get colorSetting() {
            return this.$store.state.colorSetting;
        }
        get Classhidden() {
            return this.$store.state.Classhidden;
        }
        get token() {
            return this.$store.state['_token']
            ? this.$store.state['_token']
            : localStorage.getItem('_token')
        }
        // private getAnnouncementInfo() {
        //     AnnouncementInfoCoreService.Search({
        //     _token: this.token,
        //     AnnouncementClassification: 2
        //     }).then((data: any) => {
        //     this.Announcement = data.data
        //     })

        //     console.log(this.Announcement)
        // }
        private notice(index:any){
            if(this.Announcement){
                if(this.Announcement?.length>index+1){
                    this.announceActive++;
                }else{
                    this.$store.dispatch('setClasshidden', true)
                }
            }
        }
        private closeNotice(){
            this.$store.dispatch('setClasshidden', true)
        }
        mounted() {
            // this.getAnnouncementInfo()
        }
    }
    
</script>
<style >
.Notice.hidden {
    display: none;
}
</style>
