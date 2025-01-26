<template>
  <div>
    <button
      ref="_ref"
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
      :autofocus="autofocus"
      :type="nativeType"
    >
      <span>
        <slot />
      </span>
    </button>

  </div>
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

<style scoped>

</style>