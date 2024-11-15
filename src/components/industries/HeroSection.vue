<template>
  <section
    class="w-screen overflow-clip flex flex-col items-center px-8 md:px-12 2xl:px-24"
  >
    <div class="mt-12 flex items-center justify-between w-full">
      <RouterLink
        :to="market.links[0].href"
        class="text-sm opacity-20 md:text-xl 2xl:text-4xl hidden md:block hover:opacity-50 transition-opacity space-x-2"
      >
        <img
          src="../../assets/icons/ChevronLeft.svg"
          alt="Chevron Left"
          class="inline size-3 md:size-4 2xl:size-6"
        />
        <span>
          {{ market.links[0].title }}
        </span>
      </RouterLink>
      <p
        class="text-center font-serif text-xl font-light md:text-6xl 2xl:text-7xl"
      >
        <span class="uppercase pr-4 md:pr-0">{{ market.title }}</span>
        <SeparatorComponent />
        <SeparatorComponentHalf className="md:hidden" />
        <span
          class="mx-auto text-xs opacity-20 md:text-2xl 2xl:text-3xl hidden md:block"
          >(scroll to reveal)
        </span>
      </p>
      <p class="text-xs opacity-20 md:hidden">(scroll to reveal)</p>
      <RouterLink
        :to="market.links[1].href"
        class="text-sm opacity-20 md:text-xl 2xl:text-4xl hidden md:block hover:opacity-50 transition-opacity space-x-2"
      >
        <span>{{ market.links[1].title }}</span>
        <img
          src="../../assets/icons/ChevronRight.svg"
          alt="Chevron Left"
          class="inline size-3 md:size-4 2xl:size-6"
        />
      </RouterLink>
    </div>
    <h1
      ref="header"
      class="mt-16 text-center text-6xl font-bold uppercase tracking-tight md:text-9xl 2xl:text-[13rem] 2xl:leading-[14rem]"
    >
      DEVA SMT
      <br />
      ASSEMBLY
    </h1>
    <div ref="image" class="flex w-[200vw] justify-center">
      <img
        class="pointer-events-none z-10 object-cover"
        :src="market.image"
        :alt="market.imageAlt"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import SeparatorComponent from "@/components/SeparatorComponent.vue";
import SeparatorComponentHalf from "../SeparatorComponentHalf.vue";
import { RouterLink } from "vue-router";
const { market } = defineProps({
  market: Object,
});

const header = ref(null);
const image = ref(null);

function handleScroll() {
  const scrollTop = window.scrollY;

  const translateYHeader = Math.max(
    0,
    20 - (scrollTop / window.innerHeight) * 50
  );
  const translateYImage = Math.max(
    0,
    20 - (scrollTop / window.innerHeight) * 50
  );
  if (!header.value || !image.value) return;
  header.value.style.transform = `translateY(${translateYHeader}%)`;
  image.value.style.transform = `translateY(${-translateYImage}%)`;
}

onMounted(() => {
  header.value.style.transform = `translateY(20%)`;
  image.value.style.transform = `translateY(-20%)`;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
