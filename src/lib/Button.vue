<template>
   <button class="gtzui-button" :class="classes">
        <slot></slot>
   </button>
</template>
<script lang="ts">
import Vue, { computed } from 'vue'
export default {
   props:{
      theme: {
         type: String
      },
      size: {
         type: String
      }
   },
   setup(props) {
      const {theme, size} = props;
      const classes = computed(() => {
         return {
            [`gtzui-theme-${theme}`]: theme,
            [`gtzui-size-${size}`]: size
         }
      });
      return { classes };
   }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #31588a;
$radius: 4px;
$red: red;
$grey: grey;
.gtzui-button {
  // background: $blue;
  //   border-color: $blue;
  //   color: white;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gtzui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gtzui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gtzui-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gtzui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gtzui-theme-button {
    background: $blue;
    border-color: $blue;
    color: white;
    &.gtzui-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gtzui-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gtzui-theme-link {
    &.gtzui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gtzui-theme-text {
    &.gtzui-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gtzui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gtzui-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gtzui-theme-link, &.gtzui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gtzui-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gtzui-spin 1s infinite linear;
  }
}
@keyframes gtzui-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>