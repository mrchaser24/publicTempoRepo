<template>
    <div id="app" class="theme-color" :class="`theme-color-${getThemeColor}`">
        <router-view />
    </div>
</template>
 
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    components: {}
})
export default class App extends Vue {
    async created() {
        await this.Apis.changeToken();
    }
    get getThemeColor() {
        return this.$store.state.themeColor;
    }
}
</script>

<style lang="less">
#app {
    height: 100vh;
    overflow-y: scroll;
}
</style>