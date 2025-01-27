<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import TtButton from './components/Button/Button.vue'
import { ref, onMounted } from 'vue'
import type { ButtonInstance } from './components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  console.log('buttonRef', buttonRef.value?.ref)
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  
  <main>
    <TtButton ref="buttonRef">Test Button</TtButton>
    <TtButton plain>Plain Button</TtButton>
    <TtButton round>Round Button</TtButton>
    <TtButton circle>CB</TtButton>
    <TtButton disabled>Disabled Button</TtButton>
    <br><br>
    <TtButton>Default</TtButton>
    <TtButton type="primary">Primary</TtButton>
    <TtButton type="success">Success</TtButton>
    <TtButton type="info">Info</TtButton>
    <TtButton type="warning">Warning</TtButton>
    <TtButton type="danger">Danger</TtButton>
    <br><br>
    <TtButton plain>Plain</TtButton>
    <TtButton type="primary" plain>Primary</TtButton>
    <TtButton type="success" plain>Success</TtButton>
    <TtButton type="info" plain>Info</TtButton>
    <TtButton type="warning" plain>Warning</TtButton>
    <TtButton type="danger" plain>Danger</TtButton>
    <br><br>
    <TtButton size="large">large</TtButton>
    <TtButton size="small">small</TtButton>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
