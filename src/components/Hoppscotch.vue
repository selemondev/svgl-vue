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
    viewBox="0 0 748 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :key="width"
    :width="width"
    :height="height"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <path
      opacity="0.6"
      d="M481.331 472.1C421.32 505.511 348.373 509.578 283.502 480.696C218.63 451.813 172.793 394.821 157.484 327.914C202.775 356.592 256.119 384.752 314.622 410.799C373.125 436.846 429.682 457.617 481.331 472.1Z"
      fill="#00B381"
    />
    <path
      d="M403.097 313.899C395.621 330.69 372.61 336.755 351.7 327.446C330.791 318.136 319.9 296.977 327.376 280.185C334.852 263.394 357.864 257.329 378.773 266.638C399.683 275.948 410.573 297.107 403.097 313.899Z"
      fill="url(#paint0_linear_193_425)"
    />
    <path
      d="M403.097 313.899C395.621 330.69 372.61 336.755 351.7 327.446C330.791 318.136 319.9 296.977 327.376 280.185C334.852 263.394 357.864 257.329 378.773 266.638C399.683 275.948 410.573 297.107 403.097 313.899Z"
      fill="url(#paint1_radial_193_425)"
      style="mix-blend-mode: soft-light"
    />
    <path
      d="M528.347 386.39C550.237 392.667 572.069 383.507 577.108 365.932C582.148 348.356 568.488 329.02 546.597 322.743C524.707 316.466 502.876 325.626 497.836 343.201C492.797 360.777 506.457 380.113 528.347 386.39Z"
      fill="url(#paint2_linear_193_425)"
    />
    <path
      d="M528.347 386.39C550.237 392.667 572.069 383.507 577.108 365.932C582.148 348.356 568.488 329.02 546.597 322.743C524.707 316.466 502.876 325.626 497.836 343.201C492.797 360.777 506.457 380.113 528.347 386.39Z"
      fill="url(#paint3_radial_193_425)"
      style="mix-blend-mode: soft-light"
    />
    <path
      d="M224.775 179.46C244.087 191.528 251.889 213.88 242.2 229.386C232.511 244.892 209.001 247.678 189.689 235.611C170.376 223.543 162.575 201.191 172.264 185.685C181.953 170.18 205.463 167.393 224.775 179.46Z"
      fill="url(#paint4_linear_193_425)"
    />
    <path
      d="M224.775 179.46C244.087 191.528 251.889 213.88 242.2 229.386C232.511 244.892 209.001 247.678 189.689 235.611C170.376 223.543 162.575 201.191 172.264 185.685C181.953 170.18 205.463 167.393 224.775 179.46Z"
      fill="url(#paint5_radial_193_425)"
      style="mix-blend-mode: soft-light"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M486.721 24.1781C585.517 68.1648 648.954 164.093 651.512 271.264C709.675 317.023 767.481 381.07 740.621 441.397C697.062 539.232 492.036 489.748 314.607 410.752C137.178 331.755 -36.7846 212.503 6.77462 114.667C33.634 54.3402 119.909 54.4429 192.834 67.0469C274.189 -2.76312 387.925 -19.8085 486.721 24.1781ZM57.9807 137.466C43.3469 170.334 122.02 263.65 337.406 359.546C552.791 455.441 674.781 451.466 689.415 418.599C701.527 391.395 651.358 333.28 594.568 298.562C592.829 297.499 590.404 295.993 587.367 294.107C559.717 276.939 481.409 228.316 409.894 196.476C388.292 186.858 379.85 161.203 388.926 140.816C398.003 120.43 417.953 106.802 459.959 104.873C479.732 104.818 482.325 99.3385 483.228 94.6402C484.346 87.3918 474.068 79.9011 463.923 75.3842C381.481 38.6787 280.576 54.0359 210.65 127.631C142.309 112.312 70.0923 110.263 57.9807 137.466Z"
      fill="url(#paint6_linear_193_425)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M486.721 24.1781C585.517 68.1648 648.954 164.093 651.512 271.264C709.675 317.023 767.481 381.07 740.621 441.397C697.062 539.232 492.036 489.748 314.607 410.752C137.178 331.755 -36.7846 212.503 6.77462 114.667C33.634 54.3402 119.909 54.4429 192.834 67.0469C274.189 -2.76312 387.925 -19.8085 486.721 24.1781ZM57.9807 137.466C43.3469 170.334 122.02 263.65 337.406 359.546C552.791 455.441 674.781 451.466 689.415 418.599C701.527 391.395 651.358 333.28 594.568 298.562C592.829 297.499 590.404 295.993 587.367 294.107C559.717 276.939 481.409 228.316 409.894 196.476C388.292 186.858 379.85 161.203 388.926 140.816C398.003 120.43 417.953 106.802 459.959 104.873C479.732 104.818 482.325 99.3385 483.228 94.6402C484.346 87.3918 474.068 79.9011 463.923 75.3842C381.481 38.6787 280.576 54.0359 210.65 127.631C142.309 112.312 70.0923 110.263 57.9807 137.466Z"
      fill="url(#paint7_radial_193_425)"
      style="mix-blend-mode: soft-light"
    />
    <defs>
      <linearGradient
        id="paint0_linear_193_425"
        x1="373.698"
        y1="-1.11451e-06"
        x2="373.698"
        y2="495.636"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00D196" />
        <stop offset="1" stop-color="#00B381" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_193_425"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(721.311 275.952) rotate(-168.25) scale(778.304 379.214)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_193_425"
        x1="373.698"
        y1="-1.11451e-06"
        x2="373.698"
        y2="495.636"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00D196" />
        <stop offset="1" stop-color="#00B381" />
      </linearGradient>
      <radialGradient
        id="paint3_radial_193_425"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(721.311 275.952) rotate(-168.25) scale(778.304 379.214)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint4_linear_193_425"
        x1="373.698"
        y1="-1.11451e-06"
        x2="373.698"
        y2="495.636"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00D196" />
        <stop offset="1" stop-color="#00B381" />
      </linearGradient>
      <radialGradient
        id="paint5_radial_193_425"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(721.311 275.952) rotate(-168.25) scale(778.304 379.214)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint6_linear_193_425"
        x1="373.698"
        y1="-1.11451e-06"
        x2="373.698"
        y2="495.636"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00D196" />
        <stop offset="1" stop-color="#00B381" />
      </linearGradient>
      <radialGradient
        id="paint7_radial_193_425"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(721.311 275.952) rotate(-168.25) scale(778.304 379.214)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
</template>
