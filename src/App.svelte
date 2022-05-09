<script lang="ts">
  import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle.svelte";
  import Disclaimer from "./components/Disclaimer/Disclaimer.svelte";

  import "./components/InteractionTracker/InteractionTracker";

  import type { IAppStore } from "./interfaces/AppStore.interface";

  export let title: string;
  export let store: IAppStore;

  $: viewMode = store.darkMode;
</script>

<main>
  <div class="container">
    <Disclaimer bind:store />
    <div class="app">
      <h1 class="title-main">{title}</h1>
      <DarkModeToggle bind:toggleView={store.darkMode} />
      <span>{viewMode ? "dark" : "light"}</span>
    </div>
  </div>
</main>

<style lang="scss">
  @import "../scss/main.scss";
</style>
