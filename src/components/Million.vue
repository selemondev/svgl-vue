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
    viewBox="0 0 256 182"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <defs>
      <radialGradient
        cx="50%"
        cy="49.999%"
        fx="50%"
        fy="49.999%"
        r="32.306%"
        gradientTransform="translate(0 -380193.475) skewY(90)"
        id="a"
      >
        <stop stop-color="#845CE7" offset="0%" />
        <stop stop-color="#AF73D8" offset="100%" />
      </radialGradient>
      <radialGradient
        cx="50.061%"
        cy="104.167%"
        fx="50.061%"
        fy="104.167%"
        r="67.301%"
        gradientTransform="translate(0 -35820434.112) skewY(90)"
        id="b"
      >
        <stop stop-color="#845CE7" offset="0%" />
        <stop stop-color="#AF73D8" offset="100%" />
      </radialGradient>
      <radialGradient
        cx="99.122%"
        cy="34.222%"
        fx="99.122%"
        fy="34.222%"
        r="42.521%"
        gradientTransform="translate(0 -56809933.375) skewY(90)"
        id="c"
      >
        <stop stop-color="#845CE7" offset="0%" />
        <stop stop-color="#AF73D8" offset="100%" />
      </radialGradient>
      <radialGradient
        cx=".878%"
        cy="34.21%"
        fx=".878%"
        fy="34.21%"
        r="42.506%"
        gradientTransform="translate(0 -5447320.88) skewY(90)"
        id="d"
      >
        <stop stop-color="#845CE7" offset="0%" />
        <stop stop-color="#AF73D8" offset="100%" />
      </radialGradient>
    </defs>
    <path
      d="M64.995 153.355c11.777-16.858 35.745-28.399 63.396-28.399 27.65 0 51.62 11.54 63.397 28.4-11.778 16.856-35.746 28.397-63.397 28.397-27.651 0-51.619-11.54-63.396-28.398Z"
      fill="url(#a)"
    />
    <path
      d="M64.567 28.097C76.337 11.418 100.289 0 127.923 0c27.633 0 51.586 11.418 63.356 28.097-11.77 16.679-35.723 28.097-63.356 28.097-27.634 0-51.586-11.418-63.356-28.097Z"
      fill="url(#b)"
    />
    <path
      d="M129.133 91.209c-17.124 16.54-40.349 25.831-64.566 25.831-24.217 0-47.443-9.292-64.567-25.831l64.567-63.112 64.566 63.112Z"
      fill="url(#c)"
    />
    <path
      d="M256 91.24c-17.124 16.54-40.35 25.831-64.567 25.831-24.217 0-47.443-9.292-64.567-25.831l64.567-63.143L256 91.24Z"
      fill="url(#d)"
    />
  </svg>
</template>
