
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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path fill="#DCFF50" fill-rule="evenodd" d="M150 150h299.832v300H150V150Zm269.168 30.682v238.636H180.665V180.682h238.503Z" clip-rule="evenodd"/></svg>
</template>
    