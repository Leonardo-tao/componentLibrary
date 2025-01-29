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
  background-color: #000;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}
nav a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
  border-right: 1px solid #fff;
  flex: 1;

  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background-color: #852682;
    transition: all .5s;
    cursor: pointer;
  }
}
.router-link-active {
  background-color: #852682;
}

.logo {
  display: block;
  margin: 100px auto 2rem;
}
</style>
