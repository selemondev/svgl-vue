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
    viewBox="0 -3.954 53.927 53.954"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <g fill="#0080ff" fill-rule="evenodd">
      <path
        d="M24.915 50v-9.661c10.226 0 18.164-10.141 14.237-20.904a14.438 14.438 0 0 0-8.615-8.616C19.774 6.921 9.633 14.83 9.633 25.056H0C0 8.758 15.763-3.954 32.853 1.384 40.311 3.73 46.271 9.661 48.588 17.12 53.927 34.237 41.243 50 24.915 50"
      />
      <path
        d="M15.339 40.367h9.604v-9.604H15.34zm-7.401 7.401h7.4v-7.4h-7.4zm-6.187-7.4h6.187V34.18H1.751z"
      />
    </g>
  </svg>
</template>
