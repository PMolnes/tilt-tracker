<script setup lang="ts">
const route = useRoute();

const summonerName = ref(route.params.summoner);
const region = ref(route.params.region);

const {
  data: summonerInfo,
  error: summonerInfoError,
  pending: summonerInfoPending,
} = useLazyFetch(`/api/summoner/${summonerName.value}`);

const { data: currentGameInfo, error: currentGameError } = useLazyFetch(
  `/api/matches/current/${summonerInfo.value?.id}`
);
</script>

<template>
  <div class="bg-slate-900 text-white h-screen">
    <Header />
    <main>
      <div v-if="summonerInfoError" class="flex justify-center text-xl mt-32">
        <h1>
          <b>{{ summonerName }}</b> was not found.
        </h1>
      </div>
      <div v-else class="bg-blue-500 py-4">
        <SummonerInfo
          :loading="summonerInfoPending"
          :summoner-info="summonerInfo"
        />
      </div>
    </main>
  </div>
</template>
