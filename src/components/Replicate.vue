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
    viewBox="0 0 726 726"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <g clip-path="url(#clip0_1_3)">
      <path
        d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z"
        fill="#000"
      />
      <path
        d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z"
        fill="#000"
      />
      <path d="M726 0V82.1832H91.7664V726H0V0H726Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="clip0_1_3">
        <rect width="726" height="726" fill="#000" />
      </clipPath>
    </defs>
  </svg>
</template>
