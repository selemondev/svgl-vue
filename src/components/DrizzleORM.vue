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
    viewBox="0 0 160 160"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <rect
      width="9.631"
      height="40.852"
      fill="#121212"
      rx="4.816"
      transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
    />
    <rect
      width="9.631"
      height="40.852"
      fill="#121212"
      rx="4.816"
      transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
    />
    <rect
      width="9.631"
      height="40.852"
      fill="#121212"
      rx="4.816"
      transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
    />
    <rect
      width="9.631"
      height="40.852"
      fill="#121212"
      rx="4.816"
      transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
    />
  </svg>
</template>
