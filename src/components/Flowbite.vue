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
    fill="none"
    viewBox="0 0 48 48"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      fill="url(#a)"
      d="M36.78 19.414c-.112.766-.617 1.806-1.196 2.71a5.048 5.048 0 0 1-3.218 2.218l-5.846 1.223a4.498 4.498 0 0 0-2.432 1.403l-3.833 4.285c-.72.806-1.224.613-1.224-.467-.009.04-1.903 4.925 3.116 7.82 1.929 1.112 4.705.712 6.633-.4l10.218-5.894a15.464 15.464 0 0 0 7.416-10.249c.035-.17.063-.342.092-.513l-9.727-2.136Z"
    />
    <path
      fill="url(#b)"
      d="M34.13 13.527c1.928 1.112 2.716 2.768 2.716 4.993 0 .302-.024.6-.067.894l4.117 1.769 5.61.367c.719-4.158-.69-8.437-3.213-11.838a23.92 23.92 0 0 0-7.28-6.476 24.156 24.156 0 0 0-7.359-2.78l-2.8 3.625-.884 4.163 9.16 5.283Z"
    />
    <path
      fill="url(#c)"
      d="M1.175 16.578c0 .003.002.004.003 0 .216-.647.487-1.37.825-2.143 1.767-4.034 5.171-6.724 9.36-8.096A15.511 15.511 0 0 1 23.94 7.65l1.03.595 3.684-7.79C16.936-1.885 4.96 5 1.19 16.533l-.015.045Z"
    />
    <path
      fill="url(#d)"
      d="M28.38 38.206a6.237 6.237 0 0 1-6.975-.505l-3.392 2.332-2.923 4.724c3.245 2.7 7.458 3.568 11.668 3.085a23.943 23.943 0 0 0 9.254-3.062 24.135 24.135 0 0 0 6.09-4.976L40.36 35.57l-2.82-2.647-9.16 5.284Z"
    />
    <path
      fill="url(#e)"
      d="M21.405 37.701a6.224 6.224 0 0 1-2.374-4.888V16.61c0-.906.266-1.06 1.051-.607-1.209-.697-4.002-3.091-7.45-1.102-1.929 1.112-3.517 3.567-3.517 5.792V32.48c0 4.409 2.284 9.007 5.577 11.94.13.117.265.226.398.338l6.315-7.056Z"
    />
    <path
      fill="url(#f)"
      d="M41.866 7.969c-.003-.003-.005 0-.003.002.454.51.945 1.106 1.446 1.785a15.453 15.453 0 0 1 2.685 12.346 15.485 15.485 0 0 1-7.425 10.227l-1.03.593 4.563 6.882c7.888-8.968 7.908-22.77-.205-31.8l-.031-.035Z"
    />
    <path
      fill="url(#g)"
      d="M9.515 20.692a6.226 6.226 0 0 1 3.925-5.782l-.325-4.1-2.287-4.692a15.468 15.468 0 0 0-8.855 8.353A23.887 23.887 0 0 0 0 24.008c0 2.754.454 5.353 1.268 7.758l4.543.609 3.704-1.117V20.692Z"
    />
    <path
      fill="url(#h)"
      d="M13.44 14.91a6.237 6.237 0 0 1 5.425.39l.166.095 13.343 7.697c.936.54.85 1.07-.207 1.292l.77-.161a5.045 5.045 0 0 0 2.645-1.484 6.134 6.134 0 0 0 1.664-4.22 6.226 6.226 0 0 0-3.117-5.392L23.912 7.234a15.491 15.491 0 0 0-12.593-1.292c-.166.054-.328.116-.491.176l2.612 8.792Z"
    />
    <path
      fill="url(#i)"
      d="M28.983 47.479c.004-.001.003-.004 0-.003-.67.137-1.432.264-2.27.357A15.477 15.477 0 0 1 9.515 32.446v-1.188l-8.248.507c3.83 11.309 15.785 18.228 27.669 15.723.005 0 .025-.005.046-.01Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1="30.09"
        x2="34.811"
        y1="35.655"
        y2="19.21"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1724C9" />
        <stop offset="1" stop-color="#1C64F2" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="40.964"
        x2="28.545"
        y1="15.601"
        y2="3.225"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1C64F2" />
        <stop offset="1" stop-color="#0092FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="24.247"
        x2="5.511"
        y1="7.532"
        y2="8.716"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0092FF" />
        <stop offset="1" stop-color="#45B2FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="22.98"
        x2="39.805"
        y1="42.994"
        y2="38.454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1C64F2" />
        <stop offset="1" stop-color="#0092FF" />
      </linearGradient>
      <linearGradient
        id="e"
        x1="10.903"
        x2="22.849"
        y1="23.524"
        y2="35.902"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1724C9" />
        <stop offset="1" stop-color="#1C64F2" />
      </linearGradient>
      <linearGradient
        id="f"
        x1="38.176"
        x2="46.51"
        y1="32.453"
        y2="15.652"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0092FF" />
        <stop offset="1" stop-color="#45B2FF" />
      </linearGradient>
      <linearGradient
        id="g"
        x1="8.046"
        x2="3.586"
        y1="13.696"
        y2="30.46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1C64F2" />
        <stop offset="1" stop-color="#0092FF" />
      </linearGradient>
      <linearGradient
        id="h"
        x1="30.815"
        x2="14.517"
        y1="12.899"
        y2="16.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1724C9" />
        <stop offset="1" stop-color="#1C64F2" />
      </linearGradient>
      <linearGradient
        id="i"
        x1="9.61"
        x2="19.999"
        y1="32.035"
        y2="47.662"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0092FF" />
        <stop offset="1" stop-color="#45B2FF" />
      </linearGradient>
    </defs>
  </svg>
</template>
