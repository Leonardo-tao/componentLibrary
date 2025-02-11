<template>
  <div
    class="t-collapse-item"
    :class="{
      'is-disabled': disabled
    }">
      <div class="t-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="t-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
        <slot />
      </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemprops } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: "TtCollapseItem"
})
const props = defineProps<CollapseItemprops>()
const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>

<style scoped>
.t-collapse-item__header {
  background-color: pink;
  cursor: pointer;
  height: 50px;
  border-bottom: 1px solid black;
}

.t-collapse-item__content {
  background-color: greenyellow;
  cursor: pointer;
  height: 50px;
  margin-bottom: 20px;
}
</style>