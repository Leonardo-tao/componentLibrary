<template>
  <div class="t-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { nameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: "TtCollapse"
})
const props = defineProps<CollapseProps>() 
const emits = defineEmits<CollapseEmits>() 
const activeNames = ref<nameType[]>(props.modelValue)

// 监听属性变化
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
const handleItemClick = (item: nameType) => {
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === item ? [] : [item]
  }
  else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped>

</style>