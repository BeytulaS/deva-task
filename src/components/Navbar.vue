<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="bg-black w-screen border-b border-slate-400 px-6 py-4 md:px-12 md:py-10 2xl:px-24 2xl:py-14 flex justify-between items-center"
  >
    <RouterLink to="/">
      <img
        src="../assets/LogoDeva2.png"
        alt="Deva Logo"
        class="h-8 md:h-12 2xl:h-14 w-auto"
      />
    </RouterLink>
    <!--Desktop Links-->
    <ul
      class="hidden md:flex gap-14 md:text-xl 2xl:text-2xl opacity-80 font-semibold"
    >
      <li><RouterLink to="/">Services</RouterLink></li>
      <li><RouterLink to="/">Support</RouterLink></li>
      <li><RouterLink to="/">News&Events</RouterLink></li>
      <li><RouterLink to="/">Company</RouterLink></li>
      <li><RouterLink to="/">Contact</RouterLink></li>
    </ul>
    <!--Menu Icon for mobile-->
    <div class="md:hidden">
      <button type="button" class="h-6 flex flex-col justify-between">
        <img
          src="../assets/icons/menu-icon.png"
          alt="Menu Icon"
          class="my-auto"
        />
      </button>
    </div>
  </nav>
</template>
