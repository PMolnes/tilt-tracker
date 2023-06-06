<template>
  <div class="h-screen bg-cover bg-center bg-[url('faker.gif')] text-slate-200">
    <main
      class="h-full flex flex-col justify-center items-center p-10 bg-black/70"
    >
      <div class="flex flex-col gap-3">
        <h1 class="lg:text-9xl md:text-6xl text-4xl font-extrabold">
          TILT TRACKER
        </h1>
        <div
          class="text-gray-700 bg-white shadow-inner shadow-gray-400 flex gap-2 rounded-lg p-2"
        >
          <button
            @click="toggleRegions"
            class="bg-red-500 hover:bg-red-700 min-w-[4rem] text-white text-center p-2 rounded-sm"
          >
            EUW
          </button>
          <input
            v-model="searchValue"
            class="flex-1 outline-none"
            type="text"
            placeholder="Summoner"
          />
        </div>
        <div v-if="showRegions">EUW EUNE NA</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const searchValue = ref("");
const showRegions = ref(false);

const toggleRegions = () => {
  showRegions.value = !showRegions.value;
};
</script>
