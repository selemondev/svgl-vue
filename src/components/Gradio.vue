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
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 224"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <defs>
      <linearGradient
        id="a"
        x1="-6.452%"
        x2="85.236%"
        y1="49.784%"
        y2="49.784%"
      >
        <stop offset="0%" stop-color="#F9D100" />
        <stop offset="100%" stop-color="#F97700" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="106.079%"
        x2="14.268%"
        y1="49.784%"
        y2="49.784%"
      >
        <stop offset="0%" stop-color="#F9D100" />
        <stop offset="100%" stop-color="#F97700" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="-12.871%"
        x2="169.796%"
        y1="75.863%"
        y2="74.878%"
      >
        <stop offset="0%" stop-color="#F9D100" />
        <stop offset="100%" stop-color="#F97700" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M119.871 64.78a16.346 16.346 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.346 16.346 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.364l111.654-64Zm8.126 33.014-78.783 45.164 78.783 45.155 78.784-45.155-78.784-45.164Z"
    />
    <path
      fill="url(#b)"
      d="M119.871 2.165a16.346 16.346 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.346 16.346 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.363l111.654-64Zm8.126 33.015L49.214 80.343l78.783 45.156 78.784-45.156-78.784-45.163Z"
    />
    <path
      fill="url(#c)"
      d="m120.19 64.755 16.174 28.412-111.93 63.723-16.175-28.412z"
    />
  </svg>
</template>
