<template>
  <section class="mx-auto mt-20 px-8 md:mt-44 md:px-32">
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold md:text-9xl">
        GET READY FOR
        <br />
        LIFTOFF WITH DEVA
      </h2>
      <RotatingStar />
    </div>

    <div class="mt-7 grid md:mt-40 md:grid-cols-10">
      <ScrollOpacityReveal
        :startTrigger="0.4"
        :endTrigger="0.75"
        className="col-span-6 text-sm font-semibold md:text-5xl"
        text="The demands of the Medtech market make a streamlined supplier chain even more important. At DEVA, we know how complex your market is, and we know exactly how to deal with it. That makes us a partner who not only delivers high-quality products, but also makes an important contribution to the optimization of your production process tly how to deal with it. That makes us a partner who not only delivers high-quality products, but also makes an important contribution to."
      />
      <p class="col-span-4 hidden text-right text-5xl font-semibold md:block">
        Let's take you
        <br />
        to the stars.
      </p>
    </div>
    <CTAComponent />
    <div class="h-[50vh] md:h-[40vh]"></div>
  </section>
</template>

<script setup>
import CTAComponent from "./CTAComponent.vue";
import RotatingStar from "./RotatingStar.vue";
import ScrollOpacityReveal from "./ScrollOpacityReveal.vue";
</script>
