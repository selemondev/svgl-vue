<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string | number
    height?: string | number
  }>(),
  {
    width: 50,
    height: 50
  }
)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 1440"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      d="M410.16 364.04h253.69c116.97 0 207.22 30.93 270.73 92.75 63.5 61.84 95.26 149.91 95.26 264.21s-31.08 201.22-93.25 262.71c-62.17 61.51-151.08 92.25-266.72 92.25h-259.7V364.04Z"
      style="fill: #d93739"
    />
  </svg>
</template>
