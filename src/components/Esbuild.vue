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
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <circle fill="#FFCF00" cx="128" cy="128" r="128" />
    <path
      d="M69.285 58.715 138.571 128l-69.286 69.285-16.97-16.97L104.629 128 52.315 75.685l16.97-16.97Zm76.8 0L215.371 128l-69.286 69.285-16.97-16.97L181.429 128l-52.314-52.315 16.97-16.97Z"
      fill="#191919"
    />
  </svg>
</template>
