<template>
  <main>
    <div class="button-item">
      <h1><b>属性按钮</b></h1>
      <Button ref="buttonRef">Test Button</Button>
      <Button plain>Plain Button</Button>
      <Button round>Round Button</Button>
      <Button circle>CB</Button>
      <Button disabled>Disabled Button</Button>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>类型按钮</b></h1>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>朴素按钮</b></h1>
      <Button plain>Plain</Button>
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="info" plain>Info</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>形状按钮</b></h1>
      <Button size="large">large</Button>
      <Button size="small">small</Button>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>带图标按钮</b></h1>
      <Button loading>loading</Button>
      <Button icon="user-secret">user-secret</Button>
      <hr>
    </div>
  </main>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
main {
  padding: 100px;
}

.button-item {
  margin-bottom: 40px;

  h1 {
    margin-bottom: 10px;
  }
}

.t-button {
  margin-right: 4px;
}
</style>