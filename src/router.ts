import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Doc from './pages/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';

const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        { path: "/", component: Home },
        { 
            path: "/doc", 
            component: Doc, children: 
            [
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "intro", component: md("intro") },
                {path: "install", component: md("install") }
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("切换路由")
});