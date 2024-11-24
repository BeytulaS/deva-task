<template>
  <div :class="cn('flex w-full items-center', className)">
    <div class="z-30 h-[2px] w-full bg-[#424242]"></div>
    <div class="z-30 size-2 rotate-45 bg-[#424242]"></div>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";

defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>
