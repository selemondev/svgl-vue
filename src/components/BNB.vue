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
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <defs>
      <linearGradient id="bnb-c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#FFF" stop-opacity=".5" />
        <stop offset="100%" stop-opacity=".5" />
      </linearGradient>
      <circle id="bnb-b" cx="16" cy="15" r="15" />
      <filter
        id="bnb-a"
        width="111.7%"
        height="111.7%"
        x="-5.8%"
        y="-4.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation=".5"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
        />
      </filter>
      <path
        id="bnb-e"
        d="M12.1158217,13.4042 L15.99981,9.5203 L19.8857983,13.4062 L22.1457916,11.1462 L15.99981,5 L9.85592843,11.1442 L12.1158217,13.4042 Z M6,14.99969 L8.26006322,12.73962 L10.5199764,14.99955 L8.25993322,17.2596 L6,14.99969 Z M12.1158217,16.5958 L15.99981,20.4797 L19.8856983,16.5939 L22.1468916,18.8527 L22.1457916,18.8539 L15.99981,25 L9.85572843,18.856 L9.85252844,18.8528 L12.1158217,16.5958 Z M21.4800236,15.00093 L23.7400868,12.74087 L26,15.00079 L23.7399468,17.26086 L21.4800236,15.00093 Z M18.2921031,14.9988 L18.2942031,14.9999 L18.2931031,15.0012 L15.99981,17.2945 L13.7086169,15.0032 L13.7054169,14.9999 L13.7086169,14.9968 L14.1102157,14.5951 L14.3049151,14.4003 L14.3050151,14.4003 L15.99981,12.7055 L18.2931031,14.9988 L18.2921031,14.9988 Z"
      />
      <filter
        id="bnb-d"
        width="117.5%"
        height="117.5%"
        x="-8.8%"
        y="-6.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation=".5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g fill-rule="nonzero">
        <use fill="#000" filter="url(#bnb-a)" xlink:href="#bnb-b" />
        <use fill="#F3BA2F" fill-rule="evenodd" xlink:href="#bnb-b" />
        <use
          fill="url(#bnb-c)"
          fill-rule="evenodd"
          style="mix-blend-mode: soft-light"
          xlink:href="#bnb-b"
        />
        <circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097" />
      </g>
      <g fill-rule="nonzero">
        <use fill="#000" filter="url(#bnb-d)" xlink:href="#bnb-e" />
        <use fill="#FFF" fill-rule="evenodd" xlink:href="#bnb-e" />
      </g>
    </g>
  </svg>
</template>
