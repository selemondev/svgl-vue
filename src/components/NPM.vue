
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
    <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path fill="#c00" d="M0 0h2500v2500H0z"/><path fill="#fff" d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z"/></svg>
</template>
    