
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
    <svg xmlns="http://www.w3.org/2000/svg" id="Logos" viewBox="0 0 50 72" :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><defs></defs><path d="m17.2 17.5 15.5 9v18l-15.5-9v-18ZM34.5 26.5v18l15.5-9v-18l-15.5 9ZM0 7.5v18l15.5 9v-18L0 7.5ZM17.2 55.5l15.5 9v-18l-15.5-9v18Z" class="cls-1"/></svg>
</template>
    