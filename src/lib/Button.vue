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
      }
   },
   setup(props) {
      const {theme, size} = props;
      const classes = computed(() => {
         return {
            [`gtz-theme-${theme}`]: theme,
            [`gtz-size-${size}`]: size
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
$blue: #32588a;
$hover-color:#75a3de;
$radius: 4px;
$red: red;
$grey: grey;
.gtz-button {
  font-size: 12px;
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
  &:hover {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gtz-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover {
      color: lighten($blue, 10%);
    }
  }
  &.gtz-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gtz-size-big {
    font-size: 24px;
    height: 48px;
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
    &:hover {
      // background: $blue;
      // border-color: $blue;
      opacity: .6;
    }
    &.gtz-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gtz-level-danger {
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
  &.gtz-theme-link {
    &.gtz-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gtz-theme-text {
    &.gtz-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gtz-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gtz-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gtz-theme-link, &.gtz-theme-text {
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
@keyframes gtz-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>