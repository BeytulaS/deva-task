<template>
  <svg
    :class="iconClasses"
    class="size-4 md:size-9"
    viewBox="0 0 8 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.840332 7.20066C0.840332 10.8932 3.83376 13.8867 7.52634 13.8867V0.514648C3.83376 0.514648 0.840332 3.50808 0.840332 7.20066Z"
      fill="currentColor"
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
