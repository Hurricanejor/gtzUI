<template>
  <article class="markdown-body">
  <h2>#Button按钮</h2>
  <div class="demo-code">
    <pre class="language-html" v-html="Prism.highlight('<div></div>', Prism.languages.html, 'html')" />
  </div>
   
  <p>基础组件，触发业务逻辑时使用。</p>
  <h2>代码示例</h2>
  <div>
  <h3>按钮类型</h3>
    <Button @click="onClick">默认按钮</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
  </article>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const Prism = (window as any).Prism;
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      // 此时能输出，是因为VUE将事件直接传到了根元素上
      console.log("HI");
    };
    return { onClick, Prism };
  },
};
</script>
