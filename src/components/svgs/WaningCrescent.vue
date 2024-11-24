<template>
  <svg
    :class="iconClasses"
    class="size-4 md:size-9"
    viewBox="0 0 10 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.939418 13.541C3.10582 12.26 4.55873 9.90021 4.55873 7.20109C4.55873 4.50158 3.1054 2.14152 0.938477 0.86065C1.60712 0.636243 2.32294 0.514648 3.06716 0.514648C6.75974 0.514648 9.75317 3.50808 9.75317 7.20066C9.75317 10.8932 6.75974 13.8867 3.06716 13.8867C2.32329 13.8867 1.60779 13.7652 0.939418 13.541Z"
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
