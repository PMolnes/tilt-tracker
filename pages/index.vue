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
          <Listbox v-model="selectedRegion" as="div">
            <ListboxButton
              class="bg-red-500 text-white min-w-[4rem] p-2 rounded"
              >{{ selectedRegion }}</ListboxButton
            >
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="transform scale-y-0 origin-top opacity-0"
              enter-to-class="transform scale-y-100 origin-top opacity-100"
              leave-active-class="transition duration-150 ease-out"
              leave-from-class="transform scale-y-100 origin-top opacity-100"
              leave-to-class="transform scale-y-0 origin-top opacity-0"
            >
              <ListboxOptions
                as="ul"
                class="absolute mt-4 py-2 rounded bg-white min-w-[4rem]"
              >
                <ListboxOption
                  as="template"
                  v-for="region in regions"
                  :key="region"
                  :value="region"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      selected && 'font-bold',
                      active ? 'bg-red-500/20' : 'bg-white',
                      'pl-3 py-2 pr-10',
                    ]"
                  >
                    {{ region }}
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </Transition>
          </Listbox>
          <input
            v-model="searchValue"
            class="flex-1 outline-none"
            type="text"
            placeholder="Summoner"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const regions = ["EUW", "NA", "EUNE", "SEA"];

const searchValue = ref("");
const showRegions = ref(false);

const selectedRegion = ref(regions[0]);
</script>
