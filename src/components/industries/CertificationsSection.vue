<template>
  <section class="flex flex-col justify-between md:col-span-2">
    <img
      src="../../assets/Logo-Deva.png"
      alt="Deva Logo"
      class="hidden h-auto w-full md:block"
    />
    <p class="mb-4 text-center text-xl font-bold uppercase md:hidden">
      We are a
      <br />
      certified
    </p>
    <h2
      class="text-center font-serif text-4xl font-semibold md:text-left md:text-5xl 2xl:text-6xl"
    >
      <span class="underline underline-offset-8">Frontman</span>
      in
      <br />
      {{ market.title }}
    </h2>
    <CertificationsComponent />
  </section>
</template>

<script setup>
import CertificationsComponent from "./CertificationsComponent.vue";

const { market } = defineProps({
  market: Object,
});
</script>
