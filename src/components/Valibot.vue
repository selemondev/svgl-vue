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
    viewBox="0 0 512 512"
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
        x1="0.414"
        y1="0.255"
        x2="0"
        y2="0.932"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#eab308" />
        <stop offset="1" stop-color="#ca8a04" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="0.338"
        y1="0.02"
        x2="0.664"
        y2="0.966"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#fde68a" />
        <stop offset="1" stop-color="#fbbf24" />
      </linearGradient>
      <linearGradient
        id="c"
        y1="0.5"
        x2="1"
        y2="0.5"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#7dd3fc" />
        <stop offset="1" stop-color="#0ea5e9" />
      </linearGradient>
    </defs>
    <g transform="translate(-2056 -1899)">
      <rect
        width="512"
        height="512"
        transform="translate(2056 1899)"
        fill="none"
      />
      <path
        d="M742.271,987.024c-66.706,0-119.121,54.673-121.874,126.408l-2.551,95.471c-3.967,78.653,71.961,105.52,126.936,105.52Z"
        transform="translate(1463.458 1004.277)"
        fill="url(#a)"
      />
      <path
        d="M92.616.01H319.894c54.53-.8,95.624,40.1,98.381,93.335l6.144,135.76c.732,67.368-48.116,94.95-104.525,95.335L92.616,327.374C34.061,327.8-1.063,283.663.022,229.105l3.8-135.76C7.41,33.54,33.3,1.093,92.616.01Z"
        transform="translate(2118.42 1991.302)"
        fill="url(#b)"
      />
      <path
        d="M86.844.009H299.958c51.132-.746,89.665,37.307,92.25,86.824l5.761,126.29c.686,62.669-45.117,88.326-98.011,88.685L86.844,304.537C31.938,304.933-1,263.875.02,213.123L3.58,86.834C6.948,31.2,31.222,1.016,86.844.009Z"
        transform="translate(2136.977 2001.737)"
        fill="#111827"
      />
      <path
        d="M27.626,0A27.626,27.626,0,1,1,0,27.626,27.626,27.626,0,0,1,27.626,0Z"
        transform="translate(2421.148 2104.357)"
        fill="url(#c)"
      />
      <path
        d="M27.626,0A27.626,27.626,0,1,1,0,27.626,27.626,27.626,0,0,1,27.626,0Z"
        transform="translate(2208.034 2104.357)"
        fill="url(#c)"
      />
    </g>
  </svg>
</template>
