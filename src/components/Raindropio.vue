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
    viewBox="0 0 38 31"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <defs>
      <path
        id="a"
        d="M9.5.917a9.5 9.5 0 0 1 9.5 9.5v9.5H9.5a9.5 9.5 0 0 1 0-19z"
      ></path>
      <path
        id="c"
        d="M0 19.917v-9.5l.004-.27a9.5 9.5 0 1 1 9.496 9.77H0z"
      ></path>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#0B7ED0"
        d="M28.192 4.7c5.077 4.933 5.077 12.93 0 17.863-.17.165-.343.325-.519.479L19 31l-8.673-7.958c-.176-.154-.35-.314-.52-.479-5.076-4.932-5.076-12.93 0-17.863 5.077-4.933 13.309-4.933 18.385 0z"
      ></path>
      <g transform="translate(0 11.083)">
        <mask id="b" fill="#fff"><use xlink:href="#a"></use></mask>
        <use fill="#2CD4ED" xlink:href="#a"></use>
        <path
          fill="#0DB4E2"
          d="M28.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L19 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
          mask="url(#b)"
        ></path>
      </g>
      <g transform="translate(19 11.083)">
        <mask id="d" fill="#fff"><use xlink:href="#c"></use></mask>
        <use fill="#3169FF" xlink:href="#c"></use>
        <path
          fill="#3153FF"
          d="M9.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L0 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
          mask="url(#d)"
        ></path>
      </g>
    </g>
  </svg>
</template>
