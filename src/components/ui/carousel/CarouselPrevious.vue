<script setup>
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCarousel } from "./useCarousel";
import ChevronLeft from "@/components/svgs/ChevronLeft.vue";

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
        'touch-manipulation rounded-full border-0 bg-transparent text-white hover:bg-transparent hover:text-white [&_svg]:size-8',
        orientation === 'horizontal' ? '' : 'rotate-90',
        props.class,
      )
    "
    variant="outline"
    size="icon"
    @click="scrollPrev"
  >
    <slot>
      <ChevronLeft class="fill-white" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
