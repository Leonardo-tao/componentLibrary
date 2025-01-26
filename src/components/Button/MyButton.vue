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

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TtButton'
})
</script>
<script setup lang="ts">
import type { ButtonProps } from './types.ts';
defineProps<ButtonProps>()

</script>

<style scoped>

</style>