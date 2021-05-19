<template>
    <div class="testerr">
        <div class="header">
            <p>{{ pageTitle }}</p>
        </div>
        <div class="content">
            <p>{{ $t('orderNo') }} : C21030400001</p>
            <p>{{ $t('singleBetAmount') }} : 2.00 {{ $t('yuan') }}</p>
            <p>{{ $t('betTime') }} : 2021-03-04 15:47:11</p>
            <p>{{ $t('noBets') }} : 1</p>
            <p>{{ $t('colorKind') }} : 澳洲五分彩 [ 官 ]</p>
            <p>{{ $t('multiple') }} : 2 倍</p>
            <p>{{ $t('singleBetBonus') }} : 6066.667 {{ $t('yuan') }}</p>
            <p>{{ $t('doubleColorMode') }} : {{ $t('yuan') }}</p>
            <p>{{ $t('issue') }} : 20210304191</p>
            <p>{{ $t('totalBet') }} : 4 {{ $t('yuan') }}</p>
            <p>{{ $t('howToPlay') }} : 组选 30</p>
            <p>{{ $t('betNum') }} : 7,8|1</p>
            <p>{{ $t('rebate') }} : 未返 水 (0%)</p>
            <p>{{ $t('status') }} : 未开奖</p>
        </div>
        <div class="footer">
            <div class="footer-content">
                <p>{{ $t('cancelOrder') }}</p>
                <p>{{ $t('keepBetting') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Footer,
  }
})

export default class PurchasedRecordDetail extends Vue{
    private pageTitle?: any = this.$t('lotteryDetails');
}
</script>

<style scoped>
    .tester {
        position: relative;
    }
    .header{
        height: 30px;
        width: 100%;
        background: linear-gradient(to right, #e63333, #ff6363);
        text-align: left;
        display: flex;
        align-items: center;
        color: white;
    }
    .header p{
        margin-left: 10px;
    }
    .content p {
        text-align: left;
        line-height: 12px;
        margin-left: 10px;
    }

    .footer {
        background: linear-gradient(to right, #e63333, #ff6363);
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .footer .footer-content {
        color: white;
        display: flex;
        justify-content: space-around;

    }
    .footer .footer-content p {
        padding: 0px;
        margin: 8px 0;
    }
</style>