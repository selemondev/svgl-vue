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
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-8"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <rect x="28" y="156" width="88" height="24" rx="12" fill="#8964e8"></rect>
    <rect x="104" y="120" width="36" height="24" rx="12" fill="#17b877"></rect>
    <rect x="56" y="120" width="36" height="24" rx="12" fill="#17b877"></rect>
    <rect x="84" y="84" width="52" height="24" rx="12" fill="#ffa23e"></rect>
    <rect x="148" y="84" width="24" height="24" rx="12" fill="#ffa23e"></rect>
    <rect x="56" y="48" width="88" height="24" rx="12" fill="#25a6e9"></rect>
    <rect x="64" y="12" width="52" height="24" rx="12" fill="#8964e8"></rect>
    <rect x="28" y="12" width="24" height="24" rx="12" fill="#8964e8"></rect>
  </svg>
</template>
