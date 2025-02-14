<template>
  <i
    class="t-icon" 
    :class="{[`t-icon--${type}`]: type }"
    :style="customStyle"
  >
    <font-awesome-icon v-bind="filteredProps"/>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'TtIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>                                                                                                      

<style scoped>

</style>