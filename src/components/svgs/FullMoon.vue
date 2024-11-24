<template>
  <svg
    :class="iconClasses"
    class="size-4 md:size-9"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6.87546" cy="7.20066" r="6.68601" fill="currentColor" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const iconClasses = computed(() => {
  return props.active ? "text-white" : "text-[#262626]";
});
</script>
