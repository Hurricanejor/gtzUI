import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Doc from './pages/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        { path: "/", component: Home },
        { path: "/doc", component: Doc, children: 
            [
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("切换路由")
});