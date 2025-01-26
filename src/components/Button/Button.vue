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
    >
      <span>
        <slot />
      </span>
    </button>

  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types.ts'
defineOptions({
  name: 'TtButton'
})

defineProps<ButtonProps>()
</script>

<style scoped>

</style>