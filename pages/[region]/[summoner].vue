<script setup lang="ts">
const route = useRoute();

const summoner = ref(route.params.summoner);
const region = ref(route.params.region);

const { data: summonerInfo, pending } = useLazyFetch("/api/summoner/summoner");
</script>

<template>
  <h1>{{ summoner }}</h1>
  <h1>{{ region }}</h1>
  <h1 v-if="pending">Loading...</h1>
  <h1 v-else>{{ summonerInfo }}</h1>
</template>
