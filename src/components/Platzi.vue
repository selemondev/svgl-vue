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
    style="color: #98ca3f"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      d="M10.64 1.13 2.49 9.28a3.84 3.84 0 0 0 0 5.44l8.15 8.15a3.84 3.84 0 0 0 5.44 0l2.72-2.71-2.72-2.72-2.72 2.72L5.2 12l8.16-8.16 5.44 5.44-5.44 5.44 2.72 2.72L21.5 12a3.84 3.84 0 0 0 0-5.44l-5.44-5.43a3.83 3.83 0 0 0-5.43 0z"
      fill="#98ca3f"
    />
  </svg>
</template>
