## 项目搭建

### 初始化vue-router

新建history对象；新建router对象；app.use(router)；添加`<router-view>`；添加`<router-link>`

```
    // main.ts
    // import { createWebHashHistory, createRouter } from "vue-router"

    const history = createWebHashHistory();
    const router = createRouter({
        history: history,
        routes: [{
            path: '/', component: componentName
        }]
    })

    const app = createApp(App)
    app.use(router)
    app.mount("#app)
```

### 点击切换aside

点击显示，再次点击隐藏
需要用到：`provide/inject`

此时有三个组件： APP组件、Topnav组件、Aside组件（Doc组件里的aside）
在app.vue种定义一个变量  `menuVisable` ,并且使用`provide`标记这个变量可以被app的子组件访问

在Topnav组件和Aside组件中，使用`inject`来访问APP.vue中的`menuVisable`变量

```
    // App.vue
    import { ref, provide } from "vue"
    export default {
        setup(){
            // 移动端和PC端的业务逻辑不一样
            //    -- 移动端：需要点击切换显示
            //    -- PC端：一直显示，不需要点击切换
            //    所以在此处判断屏幕的宽度，如果>=500，menuVisable为true，否则为false
            const screenWidth = document.documentElement.clientWidth;
            const flag = screenWidth >= 500 ? true : false;
            const menuVisable = ref(flag);
            provide('menuVisable', menuVisable);
        }
    }


    // Topnav.vue
    import { inject,Ref } from "vue"
    export default {
        setup(){
            const menuVisable = inject<Ref<boolean>>("menuVisable");
            console.log(menuVisable.value)
            return {
                menuVisable
            }
        }
    }
```
