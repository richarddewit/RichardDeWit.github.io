import "@/style/main.scss";
import App from "@/App.svelte";

const app = new App({
  target: document.body,
  props: {},
});

window.app = app;

export default app;
