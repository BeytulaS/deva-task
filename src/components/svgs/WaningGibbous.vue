<template>
  <svg
    :class="iconClasses"
    class="size-4 md:size-9"
    viewBox="0 0 8 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M7.52637 7.20066C7.52637 10.8932 4.53294 13.8867 0.840359 13.8867V0.514648C4.53294 0.514648 7.52637 3.50808 7.52637 7.20066Z"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";
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
