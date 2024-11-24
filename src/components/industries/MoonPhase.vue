<template>
  <div class="z-30 flex items-center gap-1 md:gap-5">
    <p
      class="whitespace-nowrap text-right text-[6px] text-[#858585] md:text-base"
    >
      Moon Phase:
      <br />
      <span v-if="phase">{{ phase }}</span>
      <span v-else>Loading...</span>
    </p>

    <div class="flex">
      <component
        v-for="(moonPhase, index) in moonPhases"
        :key="index"
        :is="moonPhase.component"
        :active="phase === moonPhase.name"
      />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@vueuse/core";
import { ref, watchEffect } from "vue";
import WaxingCrescent from "../svgs/WaxingCrescent.vue";
import WaxingGibbous from "../svgs/WaxingGibbous.vue";
import FullMoon from "../svgs/FullMoon.vue";
import WaningGibbous from "../svgs/WaningGibbous.vue";
import WaningCrescent from "../svgs/WaningCrescent.vue";

//Phases - Waxing Crescent, Waxing Gibbous, Full Moon, Waning Gibbous, Waning Crescent

// The API takes a 10-digit Unix timestamp
const timestamp = Math.floor(Date.now() / 1000);

const phase = ref(null);

const { data, error } = await useFetch(
  `https://api.farmsense.net/v1/moonphases/?d=${timestamp}`,
).json();

const moonPhases = [
  { name: "Waxing Crescent", component: WaxingCrescent },
  { name: "Waxing Gibbous", component: WaxingGibbous },
  { name: "Full Moon", component: FullMoon },
  { name: "Waning Gibbous", component: WaningGibbous },
  { name: "Waning Crescent", component: WaningCrescent },
];

//This API  return more than these 5 phases so we have to map the extra ones
const phaseMapping = {
  "New Moon": "Waxing Crescent",
  "Waxing Crescent": "Waxing Crescent",
  "1st Quarter": "Waxing Crescent",
  "Waxing Gibbous": "Waxing Gibbous",
  "Full Moon": "Full Moon",
  "Waning Gibbous": "Waning Gibbous",
  "3rd Quarter": "Waning Crescent",
  "Waning Crescent": "Waning Crescent",
};

watchEffect(() => {
  if (error.value) {
    console.error("Error fetching moon phase data:", error.value);
    phase.value = "Error fetching data";
  } else if (data.value && data.value.length > 0) {
    const apiPhase = data.value[0].Phase;
    phase.value = phaseMapping[apiPhase] || apiPhase;
  }
});
</script>
