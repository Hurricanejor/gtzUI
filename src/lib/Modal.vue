<template>
    <Teleport to="body">
      <div v-if="visiable">
        <div class="gtz-modal-overlay" @click="isCloseOnOverlay"></div>
        <div class="gtz-modal-wrapper">
            <div class="gtz-modal">
                <header>
                    <slot name="title"></slot>
                    <span class="gtz-modal-close" @click="close"></span>
                </header>
                <main>
                    <slot name="content"></slot>
                </main>
                <footer>
                    <Button @click="ok" theme="button">确定</Button>
                    <Button @click="no">取消</Button>
                </footer>
            </div>
        </div>
      </div>
    </Teleport>
</template>
<script lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";
export default {
    components: {
        Button
    },
    props: {
        visiable: {
            type: Boolean,
            default: false
        },
        closeOnOverlay: {
          type: Boolean,
          default: true
        },
        ok: {
          type: Function
        },
        no: {
          type: Function
        }
    },
    setup(props, content) {
        const close = () => {
            content.emit("update:visiable", false);
        }
        const isCloseOnOverlay = () => {
          if(props.closeOnOverlay) {
            close()
          }
        }
        const ok = () => {
          if(props.ok && props.ok() !== false){
            close()
          }
        }
        const no = () => {
          close()
        }
        return {
            close,
            isCloseOnOverlay,
            ok,
            no
        }
    }
}
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gtz-modal {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>