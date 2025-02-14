<template>
  <i
    class="t-icon" 
    :class="{[`t-icon--${type}`]: type }"
    :style="customStyle"
    v-bind="$attrs"
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
  inheritAttrs: false     // $props默认添加到根节点上，所以设置禁止透传
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>                                                                                                      

<style scoped>

</style>