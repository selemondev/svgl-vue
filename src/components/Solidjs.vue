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
    viewBox="0 0 256 239"
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
      <linearGradient x1="-5.859%" y1="38.27%" x2="91.406%" y2="60.924%" id="a">
        <stop stop-color="#76B3E1" offset="10%" />
        <stop stop-color="#DCF2FD" offset="30%" />
        <stop stop-color="#76B3E1" offset="100%" />
      </linearGradient>
      <linearGradient x1="56.996%" y1="38.44%" x2="37.941%" y2="68.375%" id="b">
        <stop stop-color="#76B3E1" offset="0%" />
        <stop stop-color="#4377BB" offset="50%" />
        <stop stop-color="#1F3B77" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="10.709%"
        y1="34.532%"
        x2="104.337%"
        y2="70.454%"
        id="c"
      >
        <stop stop-color="#315AA9" offset="0%" />
        <stop stop-color="#518AC8" offset="50%" />
        <stop stop-color="#315AA9" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="61.993%"
        y1="29.58%"
        x2="17.762%"
        y2="105.119%"
        id="d"
      >
        <stop stop-color="#4377BB" offset="0%" />
        <stop stop-color="#1A336B" offset="50%" />
        <stop stop-color="#1A336B" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M256 50.473S170.667-12.32 104.654 2.17l-4.83 1.61c-9.66 3.22-17.71 8.05-22.541 14.49l-3.22 4.83-24.151 41.862 41.862 8.05c17.71 11.271 40.251 16.101 61.182 11.271l74.063 14.49L256 50.474Z"
      fill="#76B3E1"
    />
    <path
      d="M256 50.473S170.667-12.32 104.654 2.17l-4.83 1.61c-9.66 3.22-17.71 8.05-22.541 14.49l-3.22 4.83-24.151 41.862 41.862 8.05c17.71 11.271 40.251 16.101 61.182 11.271l74.063 14.49L256 50.474Z"
      fill="url(#a)"
      opacity=".3"
    />
    <path
      d="m77.283 50.473-6.44 1.61c-27.371 8.05-35.422 33.811-20.931 56.352 16.1 20.931 49.912 32.201 77.283 24.151l99.824-33.811S141.686 35.982 77.283 50.473Z"
      fill="#518AC8"
    />
    <path
      d="m77.283 50.473-6.44 1.61c-27.371 8.05-35.422 33.811-20.931 56.352 16.1 20.931 49.912 32.201 77.283 24.151l99.824-33.811S141.686 35.982 77.283 50.473Z"
      fill="url(#b)"
      opacity=".3"
    />
    <path
      d="M209.308 122.926c-18.44-23.037-49.007-32.59-77.283-24.151l-99.824 32.201L0 187.328l180.327 30.591 32.201-57.962c6.44-11.27 4.83-24.15-3.22-37.031Z"
      fill="url(#c)"
    />
    <path
      d="M177.107 179.278c-18.44-23.037-49.008-32.59-77.283-24.151L0 187.328s85.333 64.403 151.346 48.302l4.83-1.61c27.371-8.05 37.032-33.811 20.93-54.742Z"
      fill="url(#d)"
    />
  </svg>
</template>
