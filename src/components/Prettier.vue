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
    viewBox="0 0 210 210"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(0 200)">
        <rect
          width="60"
          height="10"
          x="150"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect
          width="70"
          height="10"
          x="70"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="60" height="10" fill="#EA5E5E" rx="5" />
      </g>
      <g transform="translate(0 180)">
        <rect
          width="50"
          height="10"
          x="160"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect
          width="20"
          height="10"
          x="130"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect
          width="50"
          height="10"
          x="70"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="20" height="10" x="40" fill="#F7B93E" rx="5" />
        <rect width="30" height="10" fill="#56B3B4" rx="5" />
      </g>
      <g transform="translate(0 160)">
        <rect
          width="100"
          height="10"
          x="110"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect
          width="30"
          height="10"
          x="70"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="60" height="10" fill="#BF85BF" rx="5" />
      </g>
      <g transform="translate(0 140)">
        <rect
          width="30"
          height="10"
          x="180"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect
          width="30"
          height="10"
          x="140"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="100" height="10" x="30" fill="#F7B93E" rx="5" />
        <rect width="20" height="10" fill="#BF85BF" rx="5" />
      </g>
      <g transform="translate(0 120)">
        <rect
          width="40"
          height="10"
          x="170"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="40" height="10" x="120" fill="#BF85BF" rx="5" />
        <rect width="50" height="10" x="60" fill="#EA5E5E" rx="5" />
        <rect width="50" height="10" fill="#56B3B4" rx="5" />
      </g>
      <g transform="translate(0 100)">
        <rect
          width="30"
          height="10"
          x="180"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="90" height="10" x="80" fill="#56B3B4" rx="5" />
        <rect width="40" height="10" x="30" fill="#F7B93E" rx="5" />
        <rect width="20" height="10" fill="#EA5E5E" rx="5" />
      </g>
      <g transform="translate(0 80)">
        <rect
          width="20"
          height="10"
          x="190"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="60" height="10" x="120" fill="#F7B93E" rx="5" />
        <rect
          width="40"
          height="10"
          x="70"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="60" height="10" fill="#BF85BF" rx="5" />
      </g>
      <g transform="translate(0 60)">
        <rect
          width="20"
          height="10"
          x="190"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="60" height="10" x="120" fill="#EA5E5E" rx="5" />
        <rect
          width="40"
          height="10"
          x="70"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="20" height="10" x="40" fill="#56B3B4" rx="5" />
        <rect width="30" height="10" fill="#F7B93E" rx="5" />
      </g>
      <g transform="translate(0 40)">
        <rect
          width="30"
          height="10"
          x="180"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="20" height="10" x="150" fill="#56B3B4" rx="5" />
        <rect width="50" height="10" x="90" fill="#BF85BF" rx="5" />
        <rect width="80" height="10" fill="#56B3B4" rx="5" />
      </g>
      <g transform="translate(0 20)">
        <rect
          width="40"
          height="10"
          x="170"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        />
        <rect width="110" height="10" x="50" fill="#F7B93E" rx="5" />
        <rect width="40" height="10" fill="#EA5E5E" rx="5" />
      </g>
      <rect width="70" height="10" x="140" fill="#CFD4D7" opacity=".5" rx="5" />
      <rect width="130" height="10" fill="#56B3B4" rx="5" />
    </g>
  </svg>
</template>
