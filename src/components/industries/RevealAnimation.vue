<template>
  <div ref="containerRef" class="reveal-container">
    <div v-if="lines.length === 0" class="debug">No lines processed</div>
    <div
      v-for="(line, lineIndex) in lines"
      :key="lineIndex"
      class="line-container"
    >
      <span
        v-for="(char, charIndex) in line.chars"
        :key="`${lineIndex}-${charIndex}`"
        class="char"
        :style="{
          '--reveal-progress': getCharProgress(lineIndex, charIndex),
        }"
      >
        {{ char }}
      </span>
    </div>
    <div ref="contentRef" class="content-observer">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";

const containerRef = ref(null);
const contentRef = ref(null);
const lines = reactive([]);

// Split text into lines and characters
const processContent = () => {
  if (!contentRef.value) return;

  const originalElement = contentRef.value.firstElementChild;
  const text = contentRef.value.textContent || "";

  // Preserve original classes
  if (originalElement && containerRef.value) {
    containerRef.value.className = `reveal-container ${originalElement.className}`;
  }

  // Split into words and preserve spaces
  const words = text.split(/(\s+)/); // Split on whitespace but keep separators

  lines.splice(0, lines.length);
  let currentLine = [];
  let currentWidth = 0;
  const tempElement = document.createElement("span");
  document.body.appendChild(tempElement);

  words.forEach((word) => {
    tempElement.textContent = word;
    const wordWidth = tempElement.offsetWidth;

    if (currentWidth + wordWidth > (containerRef.value?.offsetWidth || 0)) {
      if (currentLine.length) {
        lines.push({ chars: currentLine, visible: false });
        currentLine = [];
        currentWidth = 0;
      }
    }

    Array.from(word).forEach((char) => {
      currentLine.push(char);
    });
    currentWidth += wordWidth;
  });

  if (currentLine.length) {
    lines.push({ chars: currentLine, visible: false });
  }

  document.body.removeChild(tempElement);
};

const getCharProgress = (lineIndex, charIndex) => {
  if (!lines[lineIndex]?.visible) return 0;

  const totalChars = lines[lineIndex].chars.length;
  const delay = charIndex * (1 / totalChars);
  return Math.max(0, Math.min(1, 1 - delay));
};

onMounted(() => {
  console.log("Component mounted"); // Debug log

  // Process content after a short delay to ensure slot content is rendered
  setTimeout(() => {
    processContent();
  }, 100);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const lineIndex = Number(entry.target.getAttribute("data-line"));
        if (!Number.isNaN(lineIndex) && lines[lineIndex]) {
          lines[lineIndex].visible = entry.isIntersecting;
          console.log(`Line ${lineIndex} visibility:`, entry.isIntersecting); // Debug log
        }
      });
    },
    {
      threshold: 0.6,
      rootMargin: "-20% 0px",
    },
  );

  // Create line observers after a short delay
  setTimeout(() => {
    const lineElements =
      containerRef.value?.querySelectorAll(".line-container");
    console.log("Found line elements:", lineElements?.length); // Debug log

    lineElements?.forEach((el, index) => {
      el.setAttribute("data-line", String(index));
      observer.observe(el);
    });
  }, 200);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.reveal-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.content-observer {
  display: none;
}

.line-container {
  overflow: hidden;
  margin-bottom: 0.5em;
}

.char {
  display: inline-block;
  opacity: calc(0.2 + (var(--reveal-progress, 0) * 0.8));
  transition: opacity 0.6s ease-out;
  white-space: pre; /* Preserve spaces */
}

/* Inherit font properties from parent */
.reveal-container :deep(*) {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
</style>
