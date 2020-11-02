import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Doc from './pages/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import ModalDemo from './components/ModalDemo.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import note1 from './markdown/note1.md';
import note2 from './markdown/note2.md';

const md = string => h(Markdown, { content: string, key: string })
// const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        { path: "/", component: Home },
        { 
            path: "/doc", 
            component: Doc, 
            children: 
            [
                {path: "", component: md(intro) },
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "modal", component: ModalDemo},
                {path: "intro", component: md(intro) },
                {path: "install", component: md(install) },
                {path: "note1", component: md(note1) },
                {path: "note2", component: md(note2) }
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("切换路由")
});