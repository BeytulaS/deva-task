<template>
  <p ref="paragraphRef" :class="className">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="inline"
      :style="{
        opacity: wordOpacities[index],
        transition: 'opacity 0.5s ease',
      }"
    >
      {{ word }}&nbsp;
    </span>
  </p>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const paragraphRef = ref(null);

// Split text into words
const words = computed(() => {
  return props.text.split(" ");
});

// Create reactive array for word opacities
const wordOpacities = ref(new Array(words.value.length).fill(0.2));

const updateOpacities = () => {
  const totalWords = words.value.length;
  const paragraphRect = paragraphRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Calculate progress based on element position relative to viewport center
  const progress =
    1 - (paragraphRect.top - viewportHeight / 3) / (viewportHeight / 3);

  // Calculate how many words should be fully visible based on progress
  const wordsToAnimate = Math.floor(progress * totalWords);

  wordOpacities.value = words.value.map((_, index) => {
    if (index <= wordsToAnimate) {
      // Gradually increase opacity for current word
      const wordProgress = progress * totalWords - index;
      return Math.min(1, Math.max(0.2, wordProgress));
    }
    return 0.2;
  });
};

onMounted(() => {
  window.addEventListener("scroll", updateOpacities);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateOpacities);
});
</script>
