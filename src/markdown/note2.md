## Switch组件

父子组件传值形成闭环

```html
<!-- 子组件 -->
<switch :value="bool" @input="{{ bool=$emit }}">
```

