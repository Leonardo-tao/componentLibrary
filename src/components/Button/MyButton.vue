<template>
  <div>
    <button
      class="t-btn"
      :class="{
        [`t-btn--${type}`]: type,
        [`t-btn--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
      }"
      :disabled="disabled"
    ></button>

    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types.ts';
defineProps<ButtonProps>()

</script>

<style scoped>

</style>