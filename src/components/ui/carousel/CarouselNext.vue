<script setup>
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-icons/vue";
import { useCarousel } from "./useCarousel";

const props = defineProps({
  class: { type: null, required: false },
});

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'touch-manipulation bg-transparent border-0 size-8 rounded-full hover:bg-transparent hover:text-white',
        orientation === 'horizontal' ? ' ' : 'rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ChevronRightIcon class="size-8 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
