
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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="100 100 312 312" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path fill="#533afd" fill-rule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clip-rule="evenodd"/></svg>
</template>
    