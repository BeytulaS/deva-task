<script setup>
import { ref, watch } from "vue";
import HeroSection from "../components/industries/HeroSection.vue";
import MoonImage from "../assets/moon.png";
import WheelImage from "../assets/wheel.png";
import CertificationsSection from "@/components/industries/CertificationsSection.vue";
import BenefitsSection from "@/components/industries/BenefitsSection.vue";
import AgendaSection from "@/components/industries/AgendaSection.vue";

const { market } = defineProps({
  market: {
    type: String,
    required: true,
  },
});

const marketsData = {
  automotive: {
    hero: {
      title: "Automotive",
      image: WheelImage,
      imageAlt: "Image of a Tire",
      links: [
        {
          title: "military",
          href: "/aerospace",
        },
        {
          title: "aerospace",
          href: "/aerospace",
        },
      ],
    },
    certifications: {
      title: "Auto Sustainability",
    },
  },
  aerospace: {
    hero: {
      title: "Aerospace",
      image: MoonImage,
      imageAlt: "Image of the Moon",
      links: [
        {
          title: "automotive",
          href: "/automotive",
        },
        {
          title: "military",
          href: "/automotive",
        },
      ],
    },
    certifications: {
      title: "Space Sustainability",
    },
  },
};
const currentMarket = ref(marketsData[market]);

watch(
  () => market,
  (newMarket) => {
    currentMarket.value = marketsData[newMarket];
  },
);
</script>

<template>
  <div class="">
    <HeroSection :market="currentMarket.hero" />
    <div
      class="mx-auto grid grid-cols-1 gap-32 px-8 md:grid-cols-5 md:px-32"
      :class="{ 'md:-mt-32': market === 'aerospace' }"
    >
      <CertificationsSection :market="currentMarket.certifications" />
      <AgendaSection />
    </div>
    <BenefitsSection />
  </div>
</template>
