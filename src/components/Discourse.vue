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
    viewBox="0 0 256 259"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      d="M129.1 0C59.1 0 0 56.8 0 127v131.4l129-.2c70.2 0 127-59 127-129C256 59 199.1 0 129.1 0Z"
    />
    <path
      d="M130.3 49.1a78.7 78.7 0 0 0-69.1 116.2L46.9 211l51.2-11.6a78.7 78.7 0 1 0 32.3-150.4Z"
      fill="#FFF9AE"
    />
    <path
      d="M191.9 176.5A78.6 78.6 0 0 1 98 199.4l-51.2 11.7 52-6.1a78.6 78.6 0 0 0 93.9-125 78.6 78.6 0 0 1-1 96.5Z"
      fill="#00AEEF"
    />
    <path
      d="M187.5 161.5a78.6 78.6 0 0 1-91 32.6l-49.6 17 51.2-11.6a78.6 78.6 0 0 0 80.2-134 78.6 78.6 0 0 1 9.2 96Z"
      fill="#00A94F"
    />
    <path
      d="M65.9 167a78.7 78.7 0 0 1 127-87 78.7 78.7 0 0 0-131.7 85.3L46.9 211l19-44Z"
      fill="#F15D22"
    />
    <path
      d="M61.2 165.3a78.7 78.7 0 0 1 117-99.9 78.7 78.7 0 0 0-121.9 98.7L47 211l14.2-45.8Z"
      fill="#D0232B"
    />
  </svg>
</template>
