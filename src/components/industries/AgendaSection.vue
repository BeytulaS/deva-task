<script setup>
import SeparatorComponentHalf from "../SeparatorComponentHalf.vue";
import CarouselComponent from "./CarouselComponent.vue";
import ScrollOpacityReveal from "./ScrollOpacityReveal.vue";
</script>

<template>
  <section class="md:col-span-3">
    <div class="flex w-full justify-between">
      <h2 class="font-serif text-xl md:text-3xl 2xl:text-5xl">Agenda</h2>
      <div class="flex items-center space-x-5">
        <p
          class="whitespace-nowrap text-right text-[6px] text-gray-600 md:text-base"
        >
          Moon Phase:
          <br />
          Last Quarter (Third Quarter)
        </p>

        <img
          src="../../assets/moonphase.png"
          alt="Moon Phase Image"
          class="h-4 w-auto md:h-10"
        />
      </div>
    </div>
    <SeparatorComponentHalf className="md:flex" />
    <div class="my-4 text-justify text-sm 2xl:text-2xl">
      <ScrollOpacityReveal
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales."
      />
      <br />

      <ScrollOpacityReveal
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      />
      <br />

      <ScrollOpacityReveal
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
      />
    </div>
    <CarouselComponent />
  </section>
</template>
