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
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      fill="#2563EB"
      fill-rule="evenodd"
      d="M68.692 334.16c-91.59 91.589-91.59 240.085 0 331.674L334.16 931.302c91.589 91.588 240.085 91.588 331.674-.001l265.468-265.467c91.588-91.59 91.588-240.085-.001-331.674L665.834 68.692c-91.59-91.59-240.085-91.59-331.674 0L68.692 334.16Zm431.302 330.06c90.694 0 164.216-73.522 164.216-164.216s-73.522-164.216-164.216-164.216-164.216 73.522-164.216 164.216S409.3 664.22 499.994 664.22Z"
      clip-rule="evenodd"
    />
  </svg>
</template>
