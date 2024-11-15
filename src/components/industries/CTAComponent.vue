<script setup>
import { Button } from "../ui/button";
import StarsComponent from "./StarsComponent.vue";
</script>

<template>
  <div class="mt-6 flex flex-col items-center gap-9 md:mt-16 md:flex-row">
    <p
      class="text-center text-xs font-medium md:text-left md:text-2xl 2xl:text-4xl"
    >
      Space is in
      <span
        class="relative font-semibold md:font-normal md:underline md:underline-offset-8"
        >your hands
        <StarsComponent />
        <span
          class="absolute inset-0 hidden rounded-full bg-white opacity-10 blur-lg md:block"
        ></span> </span
      >. Talk to sales, to...
    </p>
    <Button
      class="group relative bg-transparent hover:bg-transparent flex items-center gap-3 rounded-full border-2 border-white px-4 py-2 md:px-10 md:py-4 text-base font-semibold md:text-2xl 2xl:text-4xl h-fit"
    >
      <span>Start now</span>
      <img
        src="../../assets/icons/arrow-right.svg"
        alt="Right Arrow Icon"
        class="h-3 transition-transform ease-linear group-hover:translate-x-1/2 md:h-4"
      />
      <span
        class="absolute inset-0 scale-110 rounded-full bg-white opacity-10 group-hover:opacity-[0.15] blur-lg transition-opacity"
      ></span>
    </Button>
  </div>
</template>
