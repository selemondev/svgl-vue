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
    viewBox="0 -1 64 64"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      fill="#1b8cff"
      d="M55 35H9L2 54h60Z"
      data-name="Path 191"
      opacity=".3"
    />
    <path
      fill="none"
      stroke="#fff"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M3 51h58"
      data-name="Line 345"
      opacity=".5"
    />
    <path
      fill="none"
      stroke="#fff"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M8.125 38h47.75"
      data-name="Line 346"
      opacity=".5"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M9 6h46v29H9z"
      data-name="Rectangle 44"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M9 54v6h46v-6"
      data-name="Path 192"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M55 35H9L2 54h60Z"
      data-name="Path 193"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 12h46"
      data-name="Line 347"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 32v6"
      data-name="Line 348"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M49 32v6"
      data-name="Line 349"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M15 2v4"
      data-name="Line 350"
    />
    <path
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M49 2v4"
      data-name="Line 351"
    />
    <g
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      data-name="Group 4"
    >
      <path d="M20.5 19h5" data-name="Line 352" />
      <path d="M29.5 19h5" data-name="Line 353" />
      <path d="M38.5 19h5" data-name="Line 354" />
    </g>
    <g
      fill="none"
      stroke="#1b8cff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      data-name="Group 5"
    >
      <path d="M20.5 25h5" data-name="Line 355" />
      <path d="M29.5 25h5" data-name="Line 356" />
      <path d="M38.5 25h5" data-name="Line 357" />
    </g>
  </svg>
</template>
