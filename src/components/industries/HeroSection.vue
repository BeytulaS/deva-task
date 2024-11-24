<template>
  <section
    class="flex w-screen flex-col items-center overflow-clip px-6 md:px-32"
  >
    <div class="mt-12 grid w-full grid-cols-3 items-baseline">
      <RouterLink
        :to="market.links[0].href"
        class="hidden h-fit w-fit space-x-2 text-sm font-medium opacity-20 transition-opacity hover:opacity-50 md:block md:text-4xl"
      >
        <ChevronLeft class="inline size-4 fill-white md:size-8" />
        <span>
          {{ market.links[0].title }}
        </span>
      </RouterLink>
      <p
        class="flex w-fit flex-col gap-0.5 justify-self-start text-xl font-light md:justify-self-center md:text-center md:text-7xl"
      >
        <Transition name="title" mode="out-in">
          <span :key="market.title" class="pr-2 font-serif uppercase md:pr-0">{{
            market.title
          }}</span>
        </Transition>
        <SeparatorComponent />
        <SeparatorComponentHalf className="md:hidden -mt-1" />
        <span class="mx-auto hidden md:mt-4 md:block md:text-2xl 2xl:text-3xl"
          >(scroll to reveal)
        </span>
        <span class="text-[7.5px] leading-[9px] md:hidden"
          >industry manufacturing
        </span>
      </p>
      <p class="justify-self-end text-[9px] md:hidden">(scroll to reveal)</p>
      <RouterLink
        :to="market.links[1].href"
        class="h-fit w-fit space-x-2 justify-self-end text-sm font-medium opacity-20 transition-opacity hover:opacity-50 md:block md:text-4xl"
      >
        <span>{{ market.links[1].title }}</span>
        <ChevronRight class="hidden size-4 fill-white md:inline md:size-8" />
      </RouterLink>
    </div>
    <h1
      ref="header"
      class="mt-20 text-center text-6xl font-bold uppercase md:mt-4 md:text-[13rem] md:leading-[14rem]"
    >
      DEVA SMT
      <br />
      ASSEMBLY
    </h1>
    <div
      ref="image"
      class="relative flex min-h-[30vh] w-[200vw] justify-center"
    >
      <Transition name="image" mode="out-in">
        <img
          class="pointer-events-none object-cover"
          :key="market.image"
          :src="market.image"
          :alt="market.imageAlt"
        />
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import SeparatorComponent from "@/components/SeparatorComponent.vue";
import SeparatorComponentHalf from "../SeparatorComponentHalf.vue";
import { RouterLink } from "vue-router";
import ChevronLeft from "../svgs/ChevronLeft.vue";
import ChevronRight from "../svgs/ChevronRight.vue";

const { market } = defineProps({
  market: Object,
});

const header = ref(null);
const image = ref(null);

function handleScroll() {
  const scrollTop = window.scrollY;

  const translateYHeader = Math.max(
    0,
    10 - (scrollTop / window.innerHeight) * 50,
  );
  const translateYImage = Math.max(
    0,
    15 - (scrollTop / window.innerHeight) * 50,
  );
  if (!header.value || !image.value) return;
  header.value.style.transform = `translateY(${translateYHeader}%)`;
  image.value.style.transform = `translateY(${-translateYImage}%)`;
}

onMounted(() => {
  header.value.style.transform = `translateY(10%)`;
  image.value.style.transform = `translateY(-15%)`;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.title-enter-from {
  opacity: 0;
}
.title-enter-to {
  opacity: 1;
}
.title-leave-from {
  opacity: 1;
}
.title-leave-to {
  opacity: 0;
}
.title-enter-active,
.title-leave-active {
  transition: opacity 0.3s;
}

.image-enter-from {
  opacity: 0;
  transform: translateY(50%);
}

.image-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.image-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.image-leave-to {
  opacity: 0;
}

.image-enter-active,
.image-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
</style>
