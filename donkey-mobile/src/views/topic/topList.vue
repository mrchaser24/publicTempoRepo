<template>
    <div>
        <Nav
            :showSearch="false"
            :showUserIcon="false"
            :showMsgBtn="false"
            :showHeadIcon="false"
            :showBackIcon="true"
            :showThemeBtn="false"
            :pageTitle="params.title"
        />
        <van-pull-refresh class="don-recommended c-content" v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :immediate-check="false"
                :offset="10"
                finished-text="我是有底线的"
                @load="loadData"
            >
                <div class="image-list">
                    <ImageDropLetstwo :items="images" :empty="isempty" />
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Nav from "@/components/common/Nav.vue";
import ImageDropLetstwo from "@/components/home/ImageDropLets_two.vue";
@Component({
    components: {
        ImageDropLetstwo,
        Nav
    }
})
export default class DonRecommended extends Vue {
    private loading?: boolean = false;
    private finished?: boolean = false;
    private refreshing?: boolean = false;
    private images?: any = [];
    private isempty: boolean = false;
    private params:any = {}
    private page: number = 0;
    mounted() {
        let data:any = localStorage.getItem('jumptop')
        this.params= JSON.parse(data)
       
        this.loadData();
    }
    private loadData() {
        this.page++;
        this.Apis.MovieList({
            theme_ids: this.params.category_id,
            sub_category_id:this.params.sub_category_id,
            keywords:this.params.keywords,
            count: 20, 
            page: this.page
        }).then((data: any) => {

            if (this.refreshing) {
                this.images = [];
                this.refreshing = false;
            }
            this.images = this.images.concat(data.data);
             this.isempty =this.images.length <= 0; 
            this.loading = false;
            if (data.data.length < 10) {
                this.finished = true;
            }
        });
    }
    private onRefresh(): void {
        this.finished = false;
        this.loading = false;
        this.page = 0;
        this.loadData();
    }
    private goPage(url: string) {
        this.$router.push(url);
    }
}
</script>

<style lang="less" scoped>
.image-list {
    padding-top: 10px;
}
.don-recommended{
    height: calc(100vh - (47px));
    overflow-y: scroll;
}
.c-content{
    position: fixed;
    width: 100%;
    top:47px;
    
}
</style>