<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const regions = ["EUW", "NA", "EUNE", "SEA"];

const selectedRegion = defineModel<string>();
</script>

<template>
  <Listbox v-model="selectedRegion" as="div">
    <ListboxButton class="bg-red-500 text-white min-w-[4rem] p-2 rounded">{{
      selectedRegion
    }}</ListboxButton>
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
</template>
