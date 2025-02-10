<template>
  <Collapse>
    <Item name="a">
      <template #title>
        <h1>nice title</h1>
      </template>
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </Item>
    <Item name="b" title="nice title b item b">
      <div>this is b bbbbb test</div>
    </Item>
    <Item name="c" title="nice title ccc" disabled>
      <div>this is c ccccc test</div>
    </Item>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from "@/components/Collapse/Collapse.vue";
import Item from "@/components/Collapse/CollapseItem.vue";
</script>

<style scoped>

</style>