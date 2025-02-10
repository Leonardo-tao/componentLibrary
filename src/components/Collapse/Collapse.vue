<template>
  <div class="t-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { type nameType, collapseContextKey } from './types'
defineOptions({
  name: "TtCollapse"
})

const activeNames = ref<nameType[]>([])
const handleItemClick = (item: nameType) => {
  const index = activeNames.value.indexOf(item)
  if (index > -1) {
    activeNames.value.splice(index, 1)
  } else {
    activeNames.value.push(item)
  }
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped>

</style>