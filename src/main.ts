import App from "./App.svelte";

import type { IAppStore } from './interfaces/AppStore.interface'

const store: IAppStore = {
  darkMode: false,
}

const app = new App({
  target: document.body,
  props: {
    title: "Title injected into App root",
  	store: store
  }
});

export default app;
