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
    viewBox="0 0 256 293"
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
    <defs>
      <linearGradient id="a" x1="50%" x2="49.855%" y1="7.896%" y2="93.343%">
        <stop offset="0%" stop-color="#0096FF" />
        <stop offset="100%" stop-color="#FF1E56" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M128 0 46.16 46.768l.16 36.752L128 36.848l96 54.864L256 110V73.136L128 0Zm-14.4 247.488L32 200.864V91.792l-.032-.016-.176-36.8L0 73.136v146.288l81.68 46.672 31.92-18.608ZM224 200.864v-92.56l32 18.288v92.832l-128 73.152-31.888-18.224L128 255.76v-.048l96-54.848Z"
    />
    <path
      d="M46.4 108.369v84.128l81.6 46.64v-84.144zM128 53.441l-74.352 42.48 81.616 46.64 74.336-42.496z"
    />
  </svg>
</template>
