<script setup lang="ts">
import { CurrentGameInfo } from "~/models/match/CurrentGameInfo";

const props = defineProps<{
  currentGame: CurrentGameInfo | null;
}>();
</script>

<template>
  <div class="h-full">
    <h1>Current Game Info:</h1>
    {{ currentGame }}
  </div>
</template>
