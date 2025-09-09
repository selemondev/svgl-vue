
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
    <svg viewBox="0 0 256 384" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"/></svg>
</template>
    