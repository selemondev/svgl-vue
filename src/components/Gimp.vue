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
    version="1.0"
    viewBox="0 0 48 48"
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
        id="s"
        fill="#2e3436"
        fill-rule="evenodd"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="1.17391276"
        d="M24.041631 21.837049a2.2980971 2.2980971 0 1 1-4.596194 0 2.2980971 2.2980971 0 1 1 4.596194 0z"
        overflow="visible"
        style="marker: none"
      />
      <path
        id="u"
        fill="#fff"
        fill-rule="evenodd"
        d="M23.157747 20.953165a1.767767 1.767767 0 1 1-3.535534 0 1.767767 1.767767 0 1 1 3.535534 0z"
        overflow="visible"
        style="marker: none"
      />
      <path
        id="z"
        fill="#fff"
        d="M8.8749989 37.75a1.2499999 1.2499999 0 1 1-2.4999997 0 1.2499999 1.2499999 0 1 1 2.4999997 0z"
        opacity=".52777782"
        overflow="visible"
        style="marker: none"
      />
    </defs>
    <defs>
      <linearGradient id="k">
        <stop offset="0" stop-color="#5b676b" />
        <stop offset="1" stop-color="#141718" />
      </linearGradient>
      <linearGradient id="f">
        <stop offset="0" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="e">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="a">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        xlink:href="#a"
        id="A"
        x1="13.236155"
        x2="7.7521091"
        y1="37.752247"
        y2="42.282146"
        gradientTransform="rotate(27.62097 -26.24365974 -49.44033909) scale(.852298)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="h">
        <stop offset="0" stop-color="#696969" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient id="b">
        <stop offset="0" stop-color="#bdbdbd" />
        <stop offset=".33333334" stop-color="#e2e2e2" />
        <stop offset=".66666669" stop-color="#a3a3a3" />
        <stop offset="1" stop-color="#ddd" />
      </linearGradient>
      <linearGradient
        xlink:href="#b"
        id="x"
        x1="19.394735"
        x2="23.109331"
        y1="30.001331"
        y2="33.438831"
        gradientTransform="translate(-46.40695 -1.802856)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="c">
        <stop offset="0" stop-color="#6e3d09" />
        <stop offset=".24242425" stop-color="#ea8113" />
        <stop offset=".62121212" stop-color="#5c3307" />
        <stop offset="1" stop-color="#e07c12" />
      </linearGradient>
      <linearGradient
        xlink:href="#c"
        id="w"
        x1="37.017639"
        x2="27.753893"
        y1="19.239889"
        y2="11.182488"
        gradientTransform="translate(-49.30496 1.877723)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="l">
        <stop offset="0" stop-color="#857c63" />
        <stop offset="1" stop-color="#221f19" />
      </linearGradient>
      <linearGradient id="j">
        <stop offset="0" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="g">
        <stop offset="0" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="i">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#b9b9b0" />
      </linearGradient>
      <linearGradient id="d">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        xlink:href="#d"
        id="t"
        x1="6.3051529"
        x2="5.9846287"
        y1="23.362427"
        y2="31.57"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlink:href="#e"
        id="p"
        x1="14.96875"
        x2="39.524544"
        y1="19.110678"
        y2="46.98568"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlink:href="#f"
        id="B"
        x1="26.162951"
        x2="24.328892"
        y1="30.543303"
        y2="30.985245"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlink:href="#g"
        id="o"
        x1="32.350136"
        x2="21.213203"
        y1="28.083355"
        y2="30.293064"
        gradientTransform="translate(-3.836549 .345971)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#h"
        id="y"
        cx="15.415101"
        cy="35.356506"
        r="7.5791559"
        fx="15.415101"
        fy="35.356506"
        gradientTransform="matrix(1.572694 0 0 1.532639 -55.36682 -21.35823)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#i"
        id="v"
        cx="69.473244"
        cy="19.597878"
        r="3.5153139"
        fx="69.473244"
        fy="19.597878"
        gradientTransform="translate(-22.1264 -6.241691) scale(1.318488)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#j"
        id="m"
        cx="23"
        cy="33.9375"
        r="18.25"
        fx="23"
        fy="33.9375"
        gradientTransform="matrix(1 0 0 .284247 0 24.29088)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#k"
        id="r"
        cx="6.0242186"
        cy="25.271027"
        r="4.8310289"
        fx="6.0242186"
        fy="25.271027"
        gradientTransform="matrix(.916159 .09318684 -.108765 1.069309 3.253668 -3.029272)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#l"
        id="n"
        cx="18.557627"
        cy="22.300018"
        r="19.2292"
        fx="18.557627"
        fy="22.300018"
        gradientTransform="matrix(1.77275 0 0 1.29668 -16.3404 -6.615959)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlink:href="#i"
        id="q"
        cx="69.473244"
        cy="19.597878"
        r="3.5153139"
        fx="69.473244"
        fy="19.597878"
        gradientTransform="translate(-22.1264 -6.241691) scale(1.318488)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g color="#000">
      <path
        fill="url(#m)"
        fill-rule="evenodd"
        d="M41.25 33.9375a18.25 5.1875 0 1 1-36.5 0 18.25 5.1875 0 1 1 36.5 0z"
        overflow="visible"
        style="marker: none"
        transform="matrix(1 0 0 1.53012 .125 -19.99096)"
      />
      <path
        fill="url(#n)"
        fill-rule="evenodd"
        stroke="#2e3436"
        stroke-miterlimit="10"
        stroke-width=".9999997"
        d="M10.374369 12.467884s2.874509 5.927634 9.599242 5.760407c14.092515-.353553 16.563709-7.70495 16.917262-8.7656106.353554-1.0606602.894534-.8999979 1.019607.0802666 4.596194 41.7193-31.8969312 23.819176-33.1929656 16.71352 7.2478446-2.12132 5.4800776-6.187185 5.4800776-6.187185l.176777-7.601398z"
        overflow="visible"
        style="marker: none"
      />
      <path
        fill="url(#o)"
        fill-rule="evenodd"
        d="M15.73779 30.066049c6.7389 1.347837 10.170691.098093 12.179175-1.452776-.53033-.68501-1.43631-1.436311-1.43631-1.436311s2.353317.653942 3.18198 1.723573c.82629 1.066568.306808 1.723707.090561 3.08837-.481411-1.198599-1.379981-1.648092-1.501634-2.124332-1.806268 2.496927-6.306442 2.3932-12.513772.201476z"
        overflow="visible"
        style="marker: none"
      />
      <path
        fill="none"
        stroke="url(#p)"
        stroke-miterlimit="10"
        stroke-width=".9999997"
        d="M36.96875 11.84375c-.561978.926895-1.406492 2.033166-2.6875 3.09375C31.649332 17.116542 27.230687 19.099847 20 19.28125c-4.224373.105049-6.952741-1.934149-8.625-3.75L11.25 20c.136107.418802.415455 1.390498-.0625 2.71875-.514314 1.429296-2.154514 2.891363-4.96875 4 .2503304.522033.4954845 1.04362 1.25 1.78125 1.0279503 1.004945 2.4570333 2.088049 4.15625 3.0625 3.398433 1.948902 7.801583 3.493212 11.90625 3.5625 4.104667.069288 7.857126-1.23455 10.4375-5 2.378744-3.471218 3.682473-9.347943 3-18.28125z"
        opacity=".18539327"
        overflow="visible"
        style="marker: none"
      />
      <path
        fill="url(#q)"
        fill-rule="evenodd"
        stroke="#888a85"
        stroke-miterlimit="10"
        stroke-width=".78260845"
        d="M72.655224 21.837049a3.1819806 3.1819806 0 1 1-6.363961 0 3.1819806 3.1819806 0 1 1 6.363961 0z"
        overflow="visible"
        style="marker: none"
        transform="translate(-75.12661 -6.507784) scale(1.277778)"
      />
      <path
        fill="url(#r)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width=".9999997"
        d="M10.429825 27.228739a4.3310289 6.0987959 0 1 1-8.662058 0 4.3310289 6.0987959 0 1 1 8.662058 0z"
        overflow="visible"
        style="marker: none"
        transform="rotate(-35.80785 3.36287611 26.34483917)"
      />
      <use
        xlink:href="#s"
        fill-rule="evenodd"
        stroke-miterlimit="10"
        stroke-width="1.17391276"
        overflow="visible"
        style="marker: none"
        transform="translate(-3.926759 3.395528) scale(.851852)"
      />
      <path
        fill="none"
        stroke="url(#t)"
        stroke-miterlimit="10"
        stroke-width="1.00000012"
        d="M6.09375 22.15625c-.7982492 0-1.5531304.446171-2.1875 1.34375-.6343696.897579-1.09375 2.234204-1.09375 3.71875s.4593804 2.821171 1.09375 3.71875c.6343696.897579 1.3892511 1.34375 2.1875 1.34375.7982492 0 1.5772839-.476389 2.21875-1.375.6414661-.898611 1.09375-2.206186 1.09375-3.6875 0-1.481314-.4522838-2.788889-1.09375-3.6875-.6414662-.898611-1.4205011-1.375-2.21875-1.375z"
        opacity=".28089887"
        overflow="visible"
        style="marker: none"
        transform="rotate(-36.83273 3.36645406 26.60031137)"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M5.833631 23.251263a1.767767 2.1213202 0 1 1-3.5355339 0 1.767767 2.1213202 0 1 1 3.5355339 0z"
        overflow="visible"
        style="marker: none"
      />
      <use
        xlink:href="#u"
        fill-rule="evenodd"
        overflow="visible"
        style="marker: none"
        transform="translate(-2.556414 5.029841) scale(.766666)"
      />
      <path
        fill="url(#v)"
        fill-rule="evenodd"
        stroke="#888a85"
        stroke-miterlimit="10"
        stroke-width=".66666645"
        d="M72.655224 21.837049a3.1819806 3.1819806 0 1 1-6.363961 0 3.1819806 3.1819806 0 1 1 6.363961 0z"
        overflow="visible"
        style="marker: none"
        transform="matrix(1.5 0 0 1.5 -82.16821 -10.91852)"
      />
      <use
        xlink:href="#s"
        fill-rule="evenodd"
        stroke-miterlimit="10"
        stroke-width=".9999997"
        overflow="visible"
        style="marker: none"
        transform="translate(1.414216 .707108)"
      />
      <use
        xlink:href="#u"
        fill-rule="evenodd"
        overflow="visible"
        style="marker: none"
        transform="matrix(.9 0 0 .9 3.022883 2.625648)"
      />
      <path
        fill="url(#w)"
        stroke="#673907"
        stroke-linecap="round"
        stroke-width="2.46045303"
        d="m-23.364209 23.568336 3.710098 3.469175C-11.307128 20.656664-2.5600338 6.9381374-2.5600338 6.9381374c1.97631487-2.2424123-.1169199-3.7504826-2.1649066-2.3979188 0 0-12.9703626 10.1148664-18.6392686 19.0281174z"
        overflow="visible"
        style="marker: none"
        transform="matrix(-.114852 -.389864 .389864 -.114852 24.71507 29.68942)"
      />
      <path
        fill="url(#x)"
        stroke="#888a85"
        stroke-linecap="round"
        stroke-width="2.46045303"
        d="m-30.449715 32.813894 2.24632 1.93382 8.492766-7.367031.275061-.705828 1.094405-.017815c-.4375-1.5625-2.941514-4.383455-4.816514-4.383455l.082019 1.090075-.669991.380027-6.704066 9.070207z"
        overflow="visible"
        style="marker: none"
        transform="matrix(-.114852 -.389864 .389864 -.114852 24.71507 29.68942)"
      />
      <path
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.46045327"
        d="m-23.801371 28.376767-4.364933 5.266471"
        overflow="visible"
        style="marker: none"
        transform="matrix(-.114852 -.389864 .389864 -.114852 24.71507 29.68942)"
      />
      <path
        fill="url(#y)"
        d="M-45.341208 42.769835c10.443958 0 18.370039 1.24373 19.870605-6.354738 1.209249-6.123314-7.210534-9.057368-11.38287-3.590861-4.019277 5.265971-8.487735 9.945599-8.487735 9.945599z"
        overflow="visible"
        style="marker: none"
        transform="matrix(-.114852 -.389864 .389864 -.114852 24.71507 29.68942)"
      />
      <use
        xlink:href="#z"
        opacity=".52777782"
        overflow="visible"
        style="marker: none"
        transform="rotate(-106.414712 26.2449128 20.83923957) scale(.84126959)"
      />
      <use
        xlink:href="#z"
        overflow="visible"
        style="marker: none"
        transform="rotate(-106.414712 26.04110726 15.7329477) scale(.56764745)"
      />
      <path
        fill="url(#A)"
        d="M-38.543723 40.909242s3.72152.0943 6.116538-1.411995c.847351-.532923 1.515774.649985.493819 1.087367-2.207394.944732-6.610357.324628-6.610357.324628z"
        opacity=".42777776"
        overflow="visible"
        style="marker: none"
        transform="matrix(-.114852 -.389864 .389864 -.114852 24.71507 29.68942)"
      />
      <path
        fill="url(#B)"
        fill-rule="evenodd"
        d="M23.003067 31.736544c1.497372.143092 2.849629-.272213 3.411893-.474047.098225-.555386.536552-1.621257 2.046088-1.691468l-.53033-.928077s-1.966641 1.347921-4.065864 1.745669l-.861787 1.347923z"
        overflow="visible"
        style="marker: none"
      />
    </g>
  </svg>
</template>
