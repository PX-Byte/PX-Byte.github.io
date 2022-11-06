import "./app.postcss";
import '@brainandbones/skeleton/styles/all.css';
import '@brainandbones/skeleton/themes/theme-skeleton.css';
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
