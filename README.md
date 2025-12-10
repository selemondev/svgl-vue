<p align="center">
 <img align="center" src="https://svgl.app/library/svgl.svg" height="96" />
 <h1 align="center">
  Svgl Vue ✨
 </h1>
</p>


<!-- automd:badges color="green" license name="@selemondev/svgl-vue" packagephobia -->
[![CI](https://github.com/selemondev/svgl-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/selemondev/svgl-vue/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@selemondev/svgl-vue?color=green)](https://npmjs.com/package/@selemondev/svgl-vue)
[![npm downloads](https://img.shields.io/npm/dm/@selemondev/svgl-vue?color=green)](https://npm.chart.dev/@selemondev/svgl-vue)
[![install size](https://badgen.net/packagephobia/install/@selemondev/svgl-vue?color=green)](https://packagephobia.com/result?p=@selemondev/svgl-vue)

<!-- /automd -->


**Svgl Vue** is an open-source npm package that offers a collection of high-quality brand SVG logos as reusable **Vue components** with complete TypeScript support.

This package is powered by the official [`pheralb/svgl`](https://github.com/pheralb/svgl) repository.

## ✨ Features

- 💪 Fully typed Vue components.
- 🍃 Tree-shakable — only what you use will be bundled.

## 📦 Installation

<!-- automd:pm-install name="@selemondev/svgl-vue" -->

```sh
# ✨ Auto-detect
npx nypm install @selemondev/svgl-vue

# npm
npm install @selemondev/svgl-vue

# yarn
yarn add @selemondev/svgl-vue

# pnpm
pnpm install @selemondev/svgl-vue

# bun
bun install @selemondev/svgl-vue

# deno
deno install @selemondev/svgl-vue
```

<!-- /automd -->


## 🚀 Usage

Visit the [Svgl logos](https://svgl.app) page to explore the available Svgl logos.

```html
<script setup lang="ts">
import { SvglVueLogo } from '@selemondev/svgl-vue';
</script>
<template>
  <SvglVueLogo :height="200" :width="200" />
</template>
```

## ©️ Eco-system

- [svgl-react](https://github.com/ridemountainpig/svgl-react) for the React eco-system.
