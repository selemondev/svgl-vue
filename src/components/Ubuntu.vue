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
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <circle cx="50" cy="50" r="45" fill="#f47421" />
    <circle
      cx="50"
      cy="50"
      r="21.8"
      fill="none"
      stroke="#fff"
      stroke-width="8.6"
    />
    <g id="a">
      <circle cx="19.4" cy="50" r="8.4" fill="#f47421" />
      <path stroke="#f47421" stroke-width="3.2" d="M67 50h10" />
      <circle cx="19.4" cy="50" r="6" fill="#fff" />
    </g>
    <use xlink:href="#a" transform="rotate(120 50 50)" />
    <use xlink:href="#a" transform="rotate(240 50 50)" />
  </svg>
</template>
