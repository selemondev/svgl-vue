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
    viewBox="0 0 105 105"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <linearGradient
      id="a"
      x1="65.05"
      x2="52.91"
      y1="60.03"
      y2="28.18"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#fe2857" />
      <stop offset=".06" stop-color="#fe3052" />
      <stop offset=".33" stop-color="#fd533b" />
      <stop offset=".58" stop-color="#fc6c2a" />
      <stop offset=".81" stop-color="#fc7b20" />
      <stop offset="1" stop-color="#fc801d" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="41.93"
      x2="60.67"
      y1="14.45"
      y2="31.63"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#6b57ff" />
      <stop offset="1" stop-color="#fe2857" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="3.92"
      x2="65.63"
      y1="19.88"
      y2="98.32"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#6b57ff" />
      <stop offset=".3" stop-color="#fe2857" />
      <stop offset=".63" stop-color="#fe2857" />
      <stop offset=".64" stop-color="#fe3052" />
      <stop offset=".7" stop-color="#fd533b" />
      <stop offset=".76" stop-color="#fc6c2a" />
      <stop offset=".81" stop-color="#fc7b20" />
      <stop offset=".85" stop-color="#fc801d" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="m83.34 4.5-27.47 9.84L34.22 4.5l-7.13 17.96h-4.61v53.02l66.67.58 10.35-52.8z"
    />
    <path fill="url(#b)" d="m82.52 38.95-43.87-26 43.87 51.42z" />
    <path
      fill="url(#c)"
      d="m43.46 98 35.88-4.78-5.57-10.71h8.75V64.37l-43.88-51.5L3.5 21.5l.04 50.4 20.2 28.6 19.61-2.49.09-.01z"
    />
    <path d="M22.5 22.5h60v60h-60z" />
    <path
      fill="#fff"
      d="M29.98 71.16h22.5v3.75h-22.5zm22.23-41.19h5.35l5.93 9.54 5.93-9.54h5.35v22.55h-4.93V37.8l-6.35 9.63h-.13l-6.28-9.53v14.62h-4.87zM30 30h10.3q4.28 0 6.56 2.28a7 7 0 0 1 1.93 5.15v.07a7 7 0 0 1-1.34 4.45 7.74 7.74 0 0 1-3.49 2.53l5.51 8h-5.8L39 45.57h-4.09v6.92H30zm10 10.91a4.12 4.12 0 0 0 2.77-.91 3 3 0 0 0 1-2.32v-.06a2.85 2.85 0 0 0-1-2.41 4.53 4.53 0 0 0-2.86-.81h-4.98v6.47z"
    />
  </svg>
</template>
