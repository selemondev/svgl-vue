
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="currentColor" stroke-width="25" stroke-linecap="round" d="M208 128l-80 80M192 40L40 192"/></svg>

</template>
    