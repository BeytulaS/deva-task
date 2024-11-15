<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Button from "@/components/ui/button/Button.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="mx-auto flex flex-col items-center justify-center w-screen py-32 gap-6"
  >
    <RouterLink
      to="/automotive"
      class="group text-3xl relative px-8 py-2 rounded-full border-2 border-white w-fit"
      >Automotive
      <span
        class="absolute inset-0 scale-110 rounded-full bg-white opacity-10 group-hover:opacity-[0.15] blur-lg transition-opacity"
      ></span>
    </RouterLink>
    <RouterLink
      to="/aerospace"
      class="relative group text-3xl px-8 py-2 rounded-full border-2 border-white w-fit"
      >Aerospace
      <span
        class="absolute inset-0 scale-110 rounded-full bg-white opacity-10 group-hover:opacity-[0.15] blur-lg transition-opacity"
      ></span>
    </RouterLink>
  </div>
</template>
