<script setup>
import SeparatorComponentHalf from "../SeparatorComponentHalf.vue";
import CarouselComponent from "./CarouselComponent.vue";
import MoonPhase from "./MoonPhase.vue";
import ScrollOpacityReveal from "./ScrollOpacityReveal.vue";
</script>

<template>
  <section class="md:col-span-3">
    <div class="flex w-full justify-between">
      <h2 class="z-30 font-serif text-xl md:text-5xl">Agenda</h2>
      <Suspense>
        <MoonPhase />
      </Suspense>
    </div>
    <SeparatorComponentHalf className="md:flex z-30" />
    <div class="my-4 text-justify text-sm md:text-2xl">
      <ScrollOpacityReveal
        :startTrigger="0.4"
        :endTrigger="0.5"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales."
      />
      <br />

      <ScrollOpacityReveal
        :startTrigger="0.4"
        :endTrigger="0.6"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      />
      <br />

      <ScrollOpacityReveal
        :startTrigger="0.6"
        :endTrigger="0.7"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
      />
    </div>
    <CarouselComponent />
  </section>
</template>
