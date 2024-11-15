<template>
  <div class="flex flex-col gap-6 w-full">
    <Carousel @init-api="setApi">
      <CarouselContent class="">
        <CarouselItem
          v-for="image in images"
          :key="image.id"
          class="md:basis-1/3 rounded-none md:rounded-[1.25rem]"
        >
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </CarouselItem>
      </CarouselContent>
      <div
        class="flex md:items-center justify-between gap-4 font-bold text-2xl mt-2 md:mt-6"
      >
        <div class="md:hidden">
          <p class="text-sm font-semibold">
            {{ images[current].name }}
          </p>
          <p class="text-xs font-semibold">
            {{ images[current].author }}
          </p>
        </div>
        <p class="text-sm md:text-2xl">0{{ current }}/0{{ totalCount }}</p>
        <div class="w-full h-1 relative bg-white overflow-clip hidden md:block">
          <div
            class="absolute top-0 left-0 h-1 bg-blue-500 transition-transform w-full"
            :style="{
              transform: `translateX(-${(1 - current / totalCount) * 100}%)`,
            }"
          ></div>
        </div>
        <div class="md:flex gap-4 hidden">
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
import { watchOnce } from "@vueuse/core";

const api = ref(null);
const totalCount = ref(0);
const current = ref(0);

function setApi(val) {
  api.value = val;
}

watchOnce(api, (api) => {
  if (!api) return;

  totalCount.value = api.scrollSnapList().length;
  current.value = api.selectedScrollSnap() + 1;

  api.on("select", () => {
    current.value = api.selectedScrollSnap() + 1;
  });
});

const images = [
  {
    id: 1,
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 2,
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 3,
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 4,
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 5,
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 6,
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 7,
    src: Image1,
    alt: "Carousel Image 1",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 8,
    src: Image2,
    alt: "Carousel Image 2",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
  {
    id: 9,
    src: Image3,
    alt: "Carousel Image 3",
    name: "Lorem ipsum dolor sit amet",
    author: "DEVA Electronics, 2024",
  },
];
</script>
