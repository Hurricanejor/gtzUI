import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import Intro from './pages/Intro.vue';
import intro from './markdown/intro.md';
import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Doc from './pages/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';

const md = string => h(Markdown, { content: string, key: string })
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
                {path: "intro", component: Intro }
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("切换路由")
});