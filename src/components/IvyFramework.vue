
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
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }">
<path d="M27.0513 0H0.0512695V27.0128C14.9434 27.0128 27.0513 14.9247 27.0513 0Z" fill="#00D18E"/>
</svg>

</template>
    