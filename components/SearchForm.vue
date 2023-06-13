<script setup lang="ts">
import RegionSelector from "~/components/RegionSelector.vue";

const searchValue = ref("");
const selectedRegion = ref("EUW");

const handleSubmit = async () => {
  await navigateTo(`/${selectedRegion.value}/${searchValue.value}`);
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="text-gray-700 bg-white shadow-inner shadow-gray-400 flex gap-2 items-center rounded-lg p-2"
  >
    <RegionSelector v-model="selectedRegion" />
    <input
      v-model="searchValue"
      class="flex-1 outline-none"
      type="text"
      placeholder="Search for a Summoner"
    />
  </form>
</template>
