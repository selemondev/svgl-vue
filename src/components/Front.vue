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
    viewBox="0 0 950 950"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <circle cx="475" cy="475" r="425" fill="white" />
    <path
      d="M308 308.2C308 262.25 345.25 225 391.2 225H658V343.4C658 366.375 639.375 385 616.4 385H508C485.909 385 468 402.909 468 425V683.4C468 706.375 449.375 725 426.4 725H308V308.2Z"
      fill="#001B38"
    />
    <circle
      cx="509"
      cy="426"
      r="108"
      transform="rotate(90 509 426)"
      fill="url(#paint0_linear)"
    />
    <circle
      opacity="0.5"
      cx="509"
      cy="426"
      r="108"
      transform="rotate(90 509 426)"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="428.041"
        y1="502.06"
        x2="591.574"
        y2="339.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF0057" stop-opacity="0.16" />
        <stop offset="0.861354" stop-color="#FF0057" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="428.041"
        y1="502.06"
        x2="591.574"
        y2="339.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF0057" stop-opacity="0.16" />
        <stop offset="0.861354" stop-color="#FF0057" />
      </linearGradient>
    </defs>
  </svg>
</template>
