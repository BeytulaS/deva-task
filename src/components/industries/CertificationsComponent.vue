<template>
  <div class="mobile mt-4 md:hidden">
    <p class="text-center text-xl font-bold">at least according to...</p>
    <div class="mt-8 grid grid-cols-3 justify-between gap-2">
      <div
        v-for="certification in certifications"
        :key="certification.id"
        class="flex flex-col space-y-2 rounded border border-slate-800 px-2 py-3"
      >
        <img src="../../assets/certification.png" alt="Certification Image" />
        <p
          class="text-center text-[10px] font-semibold underline underline-offset-2"
        >
          {{ certification.name }}
        </p>
      </div>
    </div>
  </div>
  <div class="desktop hidden md:block">
    <p class="text-5xl font-bold tracking-tight">According to:</p>
    <ul class="ml-8 mt-4 list-disc text-2xl font-semibold">
      <li>
        <span class="underline underline-offset-4">ISO 14620-1:2002</span>
        <span class="text-[#2b2b2b]">
          — Space systems — Safety requirements — Part 1: System safety
        </span>
      </li>
      <li>
        <span class="underline underline-offset-4">ISO 19683:2017</span>
        <span class="text-[#2b2b2b]">
          — Space systems — Detailed space debris mitigation requirements
        </span>
      </li>
      <li>
        <span class="underline underline-offset-4">ISO 24113:2019 </span>
        <span class="text-[#2b2b2b]">
          — Space systems — Space debris mitigation requirements
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const certifications = [
  {
    id: 1,
    name: "ISO 14620-1:2002",
    description: "Space systems — Safety requirements — Part 1: System safety",
  },
  {
    id: 2,
    name: "ISO 19683:2017",
    description:
      "Space systems — Detailed space debris mitigation requirements",
  },
  {
    id: 3,
    name: "ISO 24113:2019",
    description: "Space systems — Space debris mitigation requirements",
  },
];
</script>
