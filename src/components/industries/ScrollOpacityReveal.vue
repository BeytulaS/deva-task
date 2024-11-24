<template>
  <p ref="paragraphRef" class="relative">
    <span
      v-for="(char, index) in characters"
      :key="index"
      class="inline transition-opacity duration-500 ease-in-out"
      :style="{
        opacity: characterOpacities[index],
      }"
    >
      {{ char }}
    </span>
  </p>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  startTrigger: {
    type: Number,
    default: 0.5,
  },
  endTrigger: {
    type: Number,
    default: 0.6,
  },
});

const paragraphRef = ref(null);

// Split text into characters
const characters = computed(() => {
  return props.text.split("");
});

// Create reactive array for character opacities
const characterOpacities = ref(new Array(characters.value.length).fill(0.2));

const updateOpacities = () => {
  const paragraphRect = paragraphRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Calculate line position relative to viewport (0 to 1)
  const linePosition = 1 - paragraphRect.top / viewportHeight;

  // Define trigger points (50% and 60% of viewport by default)
  const startTrigger = props.startTrigger;
  const endTrigger = props.endTrigger;

  // Calculate progress (0 to 1) within the animation zone
  const progress = Math.max(
    0,
    Math.min(1, (linePosition - startTrigger) / (endTrigger - startTrigger)),
  );

  // Update each character's opacity
  characters.value.forEach((_, charIndex) => {
    // Calculate when this character should start animating (0 to 1)
    const charTrigger = charIndex / characters.value.length;

    // Calculate this character's opacity
    const charProgress = Math.max(
      0,
      Math.min(1, (progress - charTrigger) * characters.value.length),
    );

    characterOpacities.value[charIndex] = 0.2 + charProgress * 0.8;
  });
};

onMounted(() => {
  window.addEventListener("scroll", updateOpacities);
  updateOpacities();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateOpacities);
});
</script>
