<template>
  <svg
    :class="iconClasses"
    class="size-4 md:size-9"
    viewBox="0 0 9 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.81351 0.488317C6.64711 1.76931 5.1942 4.12909 5.1942 6.8282C5.1942 9.52771 6.64753 11.8878 8.81445 13.1686C8.14581 13.3931 7.42999 13.5146 6.68577 13.5146C2.99319 13.5146 -0.000242495 10.5212 -0.000242818 6.82864C-0.000243141 3.13606 2.99318 0.142632 6.68577 0.142632C7.42964 0.142632 8.14514 0.264113 8.81351 0.488317Z"
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
