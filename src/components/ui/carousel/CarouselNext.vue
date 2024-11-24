<script setup>
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-icons/vue";
import { useCarousel } from "./useCarousel";
import ChevronRight from "@/components/svgs/ChevronRight.vue";

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
        'touch-manipulation rounded-full border-0 bg-transparent hover:bg-transparent hover:text-white [&_svg]:size-8',
        orientation === 'horizontal' ? ' ' : 'rotate-90',
        props.class,
      )
    "
    size="icon"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ChevronRightIcon size="48" class="fill-white" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
