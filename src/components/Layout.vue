<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/collapse">Collapse</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineOptions ({
  name: "TtLayout"
})
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin: 2rem 0 1rem;
  padding-bottom: 6px;
  border-bottom: 3px solid #1b7587;
}
nav a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
  border-right: 1px solid #fff;
  border-radius: 50px;
  flex: 1;

  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background-color: #f5f7fa;
    transition: all .5s;
    cursor: pointer;
  }
}
.router-link-active {
  background-color: #eff2f7;

  &:hover {
    background-color: #eff2f7;
  }
}

.logo {
  display: block;
  margin: 100px auto 2rem;
}
</style>
