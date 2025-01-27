<template>
  <button
    ref="_ref"
    class="t-button"
    :class="{
      [`t-button--${type}`]: type,
      [`t-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types.ts'
import { ref } from 'vue'
defineOptions({
  name: 'TtButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>

<style>
</style>