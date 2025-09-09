
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
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 43"
     :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }"><path fill="#0c0" d="M1 42V10l9-9h43v33l-9 9z"></path><text
        x="9"
        y="32"
        fill="#FFF"
        font-family="Arial"
        font-size="32">Qt</text
    ></svg
>

</template>
    