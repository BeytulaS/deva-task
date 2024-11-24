<script setup>
import { Button } from "../ui/button";
import StarsComponent from "./StarsComponent.vue";
</script>

<template>
  <div class="mt-6 flex flex-col items-center gap-9 md:mt-24 md:flex-row">
    <p class="text-center text-xs font-medium md:text-left md:text-4xl">
      Space is in
      <span
        class="group relative font-semibold md:font-normal md:underline md:underline-offset-8"
        >your hands
        <StarsComponent />
        <span
          class="absolute inset-0 hidden rounded-full bg-white opacity-10 blur-lg md:block"
        ></span> </span
      >. Talk to sales, to...
    </p>
    <Button
      class="group relative flex h-fit items-center gap-3 rounded-full border-2 border-white bg-transparent px-4 py-2 text-base font-semibold hover:bg-transparent md:px-10 md:py-4 md:text-4xl"
    >
      <span class="z-10">Start now</span>
      <img
        src="../../assets/icons/arrow-right.svg"
        alt="Right Arrow Icon"
        class="z-10 h-3 transition-transform ease-linear group-hover:-rotate-45 md:h-4"
      />
      <span
        class="absolute inset-0 z-0 scale-x-110 scale-y-150 rounded-full bg-white opacity-[0.07] blur-lg transition-opacity group-hover:opacity-[0.10]"
      ></span>
    </Button>
  </div>
</template>
