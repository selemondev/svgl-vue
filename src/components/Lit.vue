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
    viewBox="0 0 256 320"
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
    <path
      fill="#00E8FF"
      d="m64 192 25.926-44.727 38.233-19.114 63.974 63.974 10.833 61.754L192 320l-64-64-38.074-25.615z"
    />
    <path
      d="M128 256V128l64-64v128l-64 64ZM0 256l64 64 9.202-60.602L64 192l-37.542 23.71L0 256Z"
      fill="#283198"
    />
    <path
      d="M64 192V64l64-64v128l-64 64Zm128 128V192l64-64v128l-64 64ZM0 256V128l64 64-64 64Z"
      fill="#324FFF"
    />
    <path fill="#0FF" d="M64 320V192l64 64z" />
  </svg>
</template>
