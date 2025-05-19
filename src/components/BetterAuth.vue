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
    fill="none"
    viewBox="0 0 500 500"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path fill="#000" d="M0 0h500v500H0z" />
    <path fill="#fff" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" />
    <path
      fill="#fff"
      d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"
    />
    <path fill="#fff" d="M252.762 204.455v92.089h-96.774v-92.089z" />
  </svg>
</template>
