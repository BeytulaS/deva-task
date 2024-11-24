<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="flex w-screen items-center justify-between border-b border-slate-400 bg-black px-6 py-4 md:px-32 md:pb-[60px] md:pt-[75px]"
  >
    <RouterLink to="/">
      <img
        src="../assets/LogoDeva2.png"
        alt="Deva Logo"
        class="h-8 w-auto md:h-14"
      />
    </RouterLink>
    <!--Desktop Links-->
    <ul class="hidden gap-14 font-semibold md:flex md:text-2xl">
      <li class="group relative">
        <RouterLink
          to="/"
          class="hover-underline opacity-80 transition-opacity duration-300 hover:opacity-100"
          >Services</RouterLink
        >
      </li>
      <li class="group relative">
        <RouterLink
          to="/"
          class="hover-underline opacity-80 transition-opacity duration-300 hover:opacity-100"
          >Support</RouterLink
        >
      </li>
      <li class="group relative">
        <RouterLink
          to="/"
          class="hover-underline opacity-80 transition-opacity duration-300 hover:opacity-100"
          >News&Events</RouterLink
        >
      </li>
      <li class="group relative">
        <RouterLink
          to="/"
          class="hover-underline opacity-80 transition-opacity duration-300 hover:opacity-100"
          >Company</RouterLink
        >
      </li>
      <li class="group relative">
        <RouterLink
          to="/"
          class="hover-underline opacity-80 transition-opacity duration-300 hover:opacity-100"
          >Contact</RouterLink
        >
      </li>
    </ul>

    <!--Menu Icon for mobile-->
    <div class="md:hidden">
      <button type="button" class="flex h-6 flex-col justify-between">
        <img
          src="../assets/icons/menu-icon.png"
          alt="Menu Icon"
          class="my-auto"
        />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.hover-underline::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

.hover-underline:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
