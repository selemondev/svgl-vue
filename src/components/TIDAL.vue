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
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1001.000000 667.000000"
    preserveAspectRatio="xMidYMid meet"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <g
      transform="translate(0.000000,667.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M840 5835 l-835 -835 830 -830 c456 -456 834 -830 840 -830 5 0 383
374 840 830 l830 830 830 -830 830 -830 -835 -835 -835 -835 835 -835 835
-835 835 835 835 835 -833 833 -832 832 833 833 832 832 833 -832 832 -833
835 835 835 835 -835 835 -835 835 -835 -835 -835 -835 -833 833 -832 832
-833 -832 -832 -833 -833 833 -832 832 -835 -835z"
      />
    </g>
  </svg>
</template>
