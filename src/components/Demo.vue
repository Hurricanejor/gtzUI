<template>
      <div>
        <h4>{{componentName.__sourceCodeTitle}}</h4>
          <div :class=" !isTable ? 'demo' : ''">
              <div class="demo-component">
                  <component :is="componentName"></component>
              </div>
              <div class="demo-actions" v-if="!isTable">
                  <Button @click="codeVisible = !codeVisible">{{ codeVisible ? "隐藏代码" : "查看代码" }}</Button>
                  <Button v-if="codeVisible" @click="copyCode">复制代码</Button>
              </div>
              <div class="demo-code" v-if="codeVisible">
                  <pre class="language-html" v-html="html" />
              <!--  
                  <pre></pre>  报错      ???
                  只能写成<pre />
              <pre class="language-html" v-html="Prism.highlight(componentName.__sourceCode, Prism.languages.html, 'html')"></pre>
              
                --> 
              </div>
          </div>
      </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

import { computed, ref } from 'vue';

const Prism = (window as any).Prism;
// 控制 查看代码 的开关不可写在此处，此处会造成全局控制
// const codeVisible = ref(false);
export default {
    components: { Button },
    props: {
        componentName: Object,
        isTable: {
          type: Boolean,
          default: false
        }
    },
    setup(props) {
        const html = computed(() => { 
            return Prism.highlight(props.componentName.__sourceCode, Prism.languages.html, 'html')
        });
        const copyCode = function() {

        }
        const codeVisible = ref(false);
        return {
            html,
            codeVisible,
            copyCode
        }
    }
}
</script>

<style lang="scss">
$border-color: #d9d9d9;
.demo {
    margin-bottom: 24px;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 1px 5px 20px #d7dfec;
    // box-shadow: 1px 5px 20px #b9c8de;
  >h2 {
    // font-size: 20px;
    // padding: 8px 16px;
    // border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 5px 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    // border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
.markdown-body {
  & table{
    width: 100%;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    & td,
    & th{
      font-size: 14px;
    }
  }
}
// table th:first-of-type {
//     width: 20%;
// }
// table th:nth-of-type(2) {
//     width: 30%;
// }
// table th:nth-of-type(3) {
//     width: 50%;
// }
</style>