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
    id="Layer_1"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 1024 1024"
    xml:space="preserve"
    style="enable-background: new 0 0 1024 1024"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <g>
      <linearGradient
        id="SVGID_1_"
        x1="260.967"
        x2="919.184"
        y1="871.181"
        y2="491.16"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color: #669abd" />
        <stop offset="1" style="stop-color: #77dbdb" />
      </linearGradient>
      <polygon
        points="297.54 934.52 882.6 596.72 882.61 427.82 297.54 765.65"
        class="st0"
      />
      <linearGradient
        id="SVGID_2_"
        x1="553.505"
        x2="626.647"
        y1="617.828"
        y2="744.513"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style="stop-color: #000; stop-opacity: 0" />
        <stop offset="1" style="stop-color: #000" />
      </linearGradient>
      <polygon
        points="297.54 934.52 882.6 596.72 882.61 427.82 297.54 765.65"
        class="st1"
      />
    </g>
    <g>
      <linearGradient
        id="SVGID_3_"
        x1="114.663"
        x2="334.091"
        y1="744.528"
        y2="871.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color: #6a8fad" />
        <stop offset="1" style="stop-color: #669abd" />
      </linearGradient>
      <polygon
        points="151.23 681.18 151.22 850.09 297.54 934.52 297.54 765.65"
        class="st2"
      />
      <linearGradient
        id="SVGID_4_"
        x1="260.948"
        x2="187.806"
        y1="744.528"
        y2="871.213"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style="stop-color: #000; stop-opacity: 0" />
        <stop offset="1" style="stop-color: #000" />
      </linearGradient>
      <polygon
        points="151.23 681.18 151.22 850.09 297.54 934.52 297.54 765.65"
        class="st3"
      />
    </g>
    <g>
      <linearGradient
        id="SVGID_5_"
        x1="114.663"
        x2="553.503"
        y1="237.793"
        y2="491.157"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color: #6a8fad" />
        <stop offset="1" style="stop-color: #669abd" />
      </linearGradient>
      <polygon
        points="151.23 174.45 151.21 343.36 443.79 512.27 590.08 427.81"
        class="st4"
      />
      <linearGradient
        id="SVGID_6_"
        x1="370.656"
        x2="297.509"
        y1="301.128"
        y2="427.822"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style="stop-color: #000; stop-opacity: 0" />
        <stop offset="1" style="stop-color: #000" />
      </linearGradient>
      <polygon
        points="151.23 174.45 151.21 343.36 443.79 512.27 590.08 427.81"
        class="st5"
      />
    </g>
    <linearGradient
      id="SVGID_7_"
      x1="78.091"
      x2="736.337"
      y1="554.498"
      y2="174.459"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color: #ccecff" />
      <stop offset="1" style="stop-color: #9feced" />
    </linearGradient>
    <polygon
      points="297.51 765.64 151.23 681.18 590.08 427.81 151.23 174.45 297.5 90 882.61 427.82"
      class="st6"
    />
  </svg>
</template>
