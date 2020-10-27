<template>
    <div class="demo">
        <h2>{{componentName.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="componentName"></component>
        </div>
        <div class="demo-actions">
            <Button @click="codeVisible = !codeVisible">{{ codeVisible ? "隐藏代码" : "查看代码" }}</Button>
            <Button v-if="codeVisible" @click="">复制代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="line-numbers language-html" v-html="html" />
         <!--  
            <pre></pre>  报错      ???
            只能写成<pre />
         <pre class="language-html" v-html="Prism.highlight(componentName.__sourceCode, Prism.languages.html, 'html')"></pre>
         
          --> 
        </div>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { computed, ref } from 'vue';

const Prism = (window as any).Prism;
// 控制 查看代码 的开关不可写在此处，此处会造成全局控制
// const codeVisible = ref(false);
export default {
    components: { Button },
    props: {
        componentName: Object
    },
    setup(props) {
        const html = computed(() => { 
            return Prism.highlight(props.componentName.__sourceCode, Prism.languages.html, 'html')
        });
        
        const codeVisible = ref(false);
        return {
            html,
            codeVisible
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  // margin: 16px 0 32px;
  // border-radius: 5px;
  // box-shadow: 0px 5px 20px #dcdcdc;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    // border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>