<template>
  <div
    class="h-screen bg-cover bg-center bg-[url('~/assets/faker.gif')] text-slate-200"
  >
    <main
      class="h-full flex flex-col justify-center items-center p-10 bg-black/70"
    >
      <div class="flex flex-col gap-3">
        <h1 class="lg:text-9xl md:text-6xl text-4xl font-extrabold">
          TILT TRACKER
        </h1>
        <form
          @submit.prevent="handleSubmit"
          class="text-gray-700 bg-white shadow-inner shadow-gray-400 flex gap-2 items-center rounded-lg p-2"
        >
          <RegionSelector v-model="selectedRegion" />
          <input
            v-model="searchValue"
            class="flex-1 outline-none"
            type="text"
            placeholder="Summoner"
          />
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import RegionSelector from "~/components/RegionSelector.vue";

const searchValue = ref("");
const selectedRegion = ref("EUW");

const handleSubmit = () => {
  navigateTo(`/${selectedRegion.value}/${searchValue.value}`);
};
</script>
