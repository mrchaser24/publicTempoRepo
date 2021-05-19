<template>
  <Dropdown class="lang-dropdown" trigger="click" style="margin-left: 20px">
    <a class="current-lang" href="javascript:void(0)">
      <img :src="require(`@/assets/images/language-icon.png`)" />
      {{ $t(currentLang) }}
      <Icon type="ios-arrow-down"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem
        v-for="lang in langList"
        :key="lang.name"
        @click.native="switchlang(lang)"
        >{{ $t(lang.title) }}</DropdownItem
      >
    </DropdownMenu>
  </Dropdown>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    currentLang: "",
    langList: [
      {
        title: "zh",
        name: "zh",
      },
      {
        title: "en",
        name: "en",
      },
    ],
  }),
  methods: {
    switchlang(lang: any) {
      localStorage.setItem("lang", lang.name);
      location.reload();
    },
  },
  mounted() {
    this.currentLang = localStorage.getItem("lang") || "zh";
    this.$i18n.locale = this.currentLang;
  },
});
</script>

<style lang="less" scoped>
.lang-dropdown {
  background-color: #1b4075;
  border-radius: 5px;
  .current-lang {
    color: white;
    display: flex !important;
    align-items: center;
    gap: 10px;
    padding: 7px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
}
</style>