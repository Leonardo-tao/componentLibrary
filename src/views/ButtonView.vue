<template>
  <main>
    <div class="button-item">
      <h1><b>属性按钮</b></h1>
      <TtButton ref="buttonRef">Test Button</TtButton>
      <TtButton plain>Plain Button</TtButton>
      <TtButton round>Round Button</TtButton>
      <TtButton circle>CB</TtButton>
      <TtButton disabled>Disabled Button</TtButton>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>类型按钮</b></h1>
      <TtButton>Default</TtButton>
      <TtButton type="primary">Primary</TtButton>
      <TtButton type="success">Success</TtButton>
      <TtButton type="info">Info</TtButton>
      <TtButton type="warning">Warning</TtButton>
      <TtButton type="danger">Danger</TtButton>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>朴素按钮</b></h1>
      <TtButton plain>Plain</TtButton>
      <TtButton type="primary" plain>Primary</TtButton>
      <TtButton type="success" plain>Success</TtButton>
      <TtButton type="info" plain>Info</TtButton>
      <TtButton type="warning" plain>Warning</TtButton>
      <TtButton type="danger" plain>Danger</TtButton>
      <hr>
    </div>
    <div class="button-item">
      <h1><b>形状按钮</b></h1>
      <TtButton size="large">large</TtButton>
      <TtButton size="small">small</TtButton>
      <hr>
    </div>
  </main>
</template>

<script setup lang="ts">
import TtButton from '@/components/Button/Button.vue'
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