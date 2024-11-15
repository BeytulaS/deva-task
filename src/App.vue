<script setup>
import "./style.css";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/Navbar.vue";
</script>

<template>
  <NavbarComponent />
  <main class="font-sans">
    <RouterView />
  </main>
</template>

<style>
body {
  color: white;
  background-color: #020202;
}
</style>
