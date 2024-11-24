<template>
  <div class="flex w-full flex-col gap-6">
    <Carousel
      @init-api="setApi"
      :opts="{
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        breakpoints: {
          '(max-width: 767px)': {
            slidesToScroll: 1,
          },
          '(min-width: 768px)': {
            slidesToScroll: 3,
          },
        },
      }"
    >
      <CarouselContent class="">
        <CarouselItem
          v-for="(image, index) in images"
          :key="index"
          class="rounded-none md:basis-1/3 md:rounded-[1.25rem]"
        >
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </CarouselItem>
      </CarouselContent>
      <div
        class="mt-2 flex justify-between gap-4 text-2xl md:mt-6 md:items-center"
      >
        <div class="md:hidden">
          <p class="text-sm font-semibold">
            {{ images[current]?.name }}
          </p>
          <p class="text-xs font-semibold">
            {{ images[current]?.author }}
          </p>
        </div>
        <p class="text-sm font-semibold md:text-2xl">
          0{{ current + 1 }}/0{{ totalCount }}
        </p>
        <div class="relative hidden h-1 w-full overflow-clip bg-white md:block">
          <div
            class="absolute left-0 top-0 h-1 w-full bg-blue-500 transition-transform ease-in-out"
            :style="{
              transform: `translateX(-${(1 - (current + 1) / totalCount) * 100}%)`,
            }"
          ></div>
        </div>
        <div class="hidden gap-1 md:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image1 from "../../assets/carousel/carousel1.png";
import Image2 from "../../assets/carousel/carousel2.png";
import Image3 from "../../assets/carousel/carousel3.png";
import { ref } from "vue";
import { watchOnce, useResizeObserver } from "@vueuse/core";

const api = ref(null);
const totalCount = ref(0);
const current = ref(0);

function setApi(val) {
  api.value = val;
}

function updateTotalCount() {
  if (!api.value) return;

  const isMobile = window.innerWidth < 768;
  const slidesPerView = isMobile ? 1 : 3;
  totalCount.value = Math.ceil(images.length / slidesPerView);

  // Ensure current index stays valid
  if (current.value >= totalCount.value) {
    current.value = totalCount.value - 1;
  }
}

watchOnce(api, (api) => {
  if (!api) return;

  //Debugging
  /* console.log("Total images:", images.length);
  console.log("Snap points:", api.scrollSnapList());
  console.log("Slides in view:", api.slidesInView()); */

  updateTotalCount();

  api.on("select", () => {
    current.value = api.selectedScrollSnap();
  });

  useResizeObserver(document.body, () => {
    updateTotalCount();
  });
});

const images = [
  {
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet1",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet2",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet3",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet4",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet5",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet6",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet7",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet8",
    author: "DEVA Electronics, 2024",
  },
  {
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet9",
    author: "DEVA Electronics, 2024",
  },
];
</script>
