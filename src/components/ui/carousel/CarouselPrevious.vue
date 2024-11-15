<script setup>
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-icons/vue";
import { useCarousel } from "./useCarousel";

const props = defineProps({
  class: { type: null, required: false },
});

const { orientation, canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="
      cn(
        'touch-manipulation bg-transparent border-0 size-8 rounded-full hover:bg-transparent hover:text-white',
        orientation === 'horizontal' ? '' : 'rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ChevronLeftIcon class="text-current size-8" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
