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
    viewBox="0 0 256 274"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <defs>
      <linearGradient
        x1="22.347%"
        y1="49.545%"
        x2="77.517%"
        y2="50.388%"
        id="a"
      >
        <stop stop-color="#4340C4" offset="0%" />
        <stop stop-color="#4642C8" offset="12%" />
        <stop stop-color="#594EE4" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="38.874%"
        y1="49.845%"
        x2="60.879%"
        y2="50.385%"
        id="b"
      >
        <stop stop-color="#4340C4" offset="0%" />
        <stop stop-color="#534ADB" offset="74%" />
        <stop stop-color="#594EE4" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.004%"
        y1="49.529%"
        x2="100.123%"
        y2="50.223%"
        id="c"
      >
        <stop stop-color="#4340C4" offset="0%" />
        <stop stop-color="#4340C4" offset="23%" />
        <stop stop-color="#4F48D5" offset="60%" />
        <stop stop-color="#594EE4" offset="100%" />
      </linearGradient>
      <linearGradient x1="35.4%" y1="49.459%" x2="64.895%" y2="50.085%" id="d">
        <stop stop-color="#0080FF" offset="0%" />
        <stop stop-color="#00B9FF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.243%"
        y1="49.366%"
        x2="100.411%"
        y2="50.467%"
        id="e"
      >
        <stop stop-color="#0080FF" offset="0%" />
        <stop stop-color="#008BFF" offset="17%" />
        <stop stop-color="#00A7FF" offset="47%" />
        <stop stop-color="#00B9FF" offset="63%" />
        <stop stop-color="#00B9FF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.125%"
        y1="49.627%"
        x2="100.225%"
        y2="50.101%"
        id="f"
      >
        <stop stop-color="#00B9FF" offset="0%" />
        <stop stop-color="#0080FF" offset="30%" />
        <stop stop-color="#2D67F1" offset="60%" />
        <stop stop-color="#4D55E8" offset="86%" />
        <stop stop-color="#594EE4" offset="100%" />
      </linearGradient>
      <linearGradient x1="4.557%" y1="50.184%" x2="99.354%" y2="51.298%" id="g">
        <stop stop-color="#4340C4" offset="0%" />
        <stop stop-color="#4642C8" offset="12%" />
        <stop stop-color="#594EE4" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m175.051 236.859 25.162-15.071 49.298-86.929-76.287 89.097z"
    />
    <path
      d="m242.337 80.408-4.926-9.4-1.932-3.663-.2.196-25.818-47.015C202.984 8.65 190.631 1.231 177.01 1.074l-25.074.206L188.15 114.8l-23.958 23.331 8.924 86.245 73.769-84.021c10.005-11.587 11.97-28.09 4.92-41.646l-9.466-18.302h-.002Z"
      fill="url(#b)"
    />
    <path
      d="m201.113 72.256-43.18-70.907L83.41.003C70.165-.15 57.83 6.573 50.88 17.87l-43.87 83.877 34.443-33.334L84.701 8.356l97.894 112.153 18.3-18.626c8.397-8.142 5.54-19.558.22-29.625l-.002-.002Z"
      fill="url(#c)"
    />
    <path
      d="M97.784 95.26 84.522 8.796l-73.148 88.03c-12.328 11.935-14.897 30.662-6.419 45.49l42.98 74.727c6.553 11.464 18.755 18.577 32.024 18.729l42.945.49L71.46 119.607 97.784 95.26Z"
      fill="url(#d)"
    />
    <path
      d="M173.227 223.9 71.38 119.022l-13.196 12.59c-10.812 10.248-11.106 27.332-.728 37.921l43.99 66.384 70.65.907 1.127-12.926h.003Z"
      fill="url(#e)"
    />
    <path fill="url(#f)" d="m101.584 235.903 72.292-11.599 47.704 49.464z" />
    <path
      d="m173.111 224.483 27.168-3.457 24.096 49.915c1.06 2.06-1.719 3.977-3.373 2.302l-47.89-48.76Z"
      fill="url(#g)"
    />
    <path
      fill="#FFF"
      d="M182.708 120.058 84.681 8.601l12.502 85.958L71.16 118.78l101.772 105.372-7.595-85.905 17.371-18.192z"
    />
  </svg>
</template>
