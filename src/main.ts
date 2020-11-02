
import './lib/gtz.scss';
import './index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const app = createApp(App);
const Prism = (window as any).Prism;
app.use(router);
app.mount('#app');
app.component("Markdown", Markdown);