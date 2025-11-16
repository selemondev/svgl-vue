
<script setup lang="ts">
withDefaults(
	defineProps<{
		width?: string | number;
		height?: string | number;
	}>(),
	{
		width: 50,
		height: 50,
	},
);
</script>
<template>
    <svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC"/></svg>
</template>
    