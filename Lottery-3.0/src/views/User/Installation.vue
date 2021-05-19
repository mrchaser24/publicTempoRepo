<template>
  <div class="home">
    <Header :msg="$t('setup')" :back="back"/>
     <van-cell-group class="link_user info">
            <van-cell center :title="$t('changePassword')">
                <template #right-icon>
                    <p>{{ $t('contactCustomerServiceModiy') }}</p>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
            <van-cell center :title="$t('clearCache')" >
                <template #right-icon>
                    <h3>0Mb</h3>
                </template>
            </van-cell>
            <van-cell center :title="$t('feedback')">
                <template #right-icon>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
            <van-cell center :title="$t('checkUpdates')">
                <template #right-icon>
                    <p>{{ $t('currentVersion') }}</p>
                    <van-icon name="arrow" class="arrow" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-button type="default" size="large" class="button_large">{{ $t('signoutAccount') }}</van-button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {
        Header
    }
})
export default class Installation extends Vue {
   private back: boolean = true;
}
</script>