<template>
   <button class="gtz-button" :class="classes">
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
      },
      circle: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      }
   },
   setup(props) {
      const {theme, size, circle, full} = props;
      const classes = computed(() => {
         return {
            [`gtz-theme-${theme}`]: theme,
            [`gtz-size-${size}`]: size,
            [`gtz-button-circle`]: circle,
            [`gtz-button-full`]: full
         }
      });
      return { classes };
   }
}
</script>
<style lang="scss">
$h: 32px;
$color: #333;
$blue: #32588a;
$active-color:#75a3de;
$radius: 4px;
$red: red;
$grey: grey;
.gtz-button {
  font-size: 12px;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  margin: 0 5px 5px 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $blue;
  border:1px solid $blue;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  &:active {
    color: #333;
    border-color: #333;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  
  &.gtz-button-circle {
    border-radius: 100px;
  }
  &.gtz-button-full {
    width: 100%;
  }
  &.gtz-theme-text {
    border-color: #f2f2f2;
    background: #f2f2f2;
    box-shadow: none;
    color: #333333;
    &:active {
      background: #ffffff;
      border-color: #c5d9e8;
    }
  }
  &.gtz-size-big {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
  }
  &.gtz-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gtz-theme-button {
    background: $blue;
    border-color: $blue;
    color: white;
    &:active {
      // background: $blue;
      // border-color: $blue;
      opacity: .6;
    }
    &.gtz-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:active,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gtz-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:active,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gtz-theme-text {
    &.gtz-level-main {
      color: $blue;
      &:active,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gtz-level-danger {
      color: $red;
      &:active,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gtz-theme-button {
    &[disabled] {
      cursor: not-allowed;
      border: 1px solid #e6e6e6;
      background-color: #FBFBFB;
      color: #C9C9C9;
      &:active {
        opacity: 1;
      }
    }
  }
  &.gtz-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gtz-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gtz-spin 1s infinite linear;
  }
}
.gtz-button-demo {
  display: inline-block;
  margin: 0 10px 0 0;
}
@keyframes gtz-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>