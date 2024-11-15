<template>
  <div :class="cn('w-full flex items-center opacity-50', className)">
    <div class="w-full h-0.5 bg-slate-700"></div>
    <div class="size-2 bg-slate-600 rotate-45"></div>
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
