<template>
  <div
    class="t-collapse-item"
    :class="{
      'is-disabled': disabled
    }">
      <div
        class="t-collapse-item__header" 
        :class="{
          'is-disabled': disabled,
          'is-active': isActive
        }"
        :id="`item-header-${name}`" 
        @click="handleClick"
      >
        <slot name="title">{{ title }}</slot>
        <Icon icon="angle-right" class="header-angle"/>
      </div>
      <Transition name="slide" v-on="transitionEvents">
        <div class="t-collapse-item__wrapper" v-show="isActive">
          <div class="t-collapse-item__content" :id="`item-content-${name}`">
            <slot />
          </div>
        </div>
      </Transition>
  </div>
</template>

<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
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
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style scoped>
</style>