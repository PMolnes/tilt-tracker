<script setup lang="ts">
const route = useRoute();

const summonerName = ref(route.params.summoner);
const region = ref(route.params.region);

const {
  data: summonerInfo,
  error: summonerInfoError,
  pending: summonerInfoPending,
} = await useLazyFetch(`/api/summoner/${summonerName.value}`);

const {
  data: currentGameInfo,
  error: currentGameError,
  pending: currentGameInfoLoading,
} = useLazyFetch(`/api/matches/current/${summonerInfo.value?.id}`);
</script>

<template>
  <div class="bg-slate-900 text-white h-full">
    <Header />
    <main>
      <div v-if="summonerInfoError" class="flex justify-center text-xl mt-32">
        <h1>
          <b>{{ summonerName }}</b> was not found.
        </h1>
      </div>
      <div v-else class="bg-blue-500 py-4">
        <SummonerInfo :loading="summonerInfoPending" :summoner-info="summonerInfo" />
      </div>
      <div class="flex justify-center items-center">
        <div class="flex flex-col lg:flex-row w-cards gap-6 py-12">
          <div class="flex w-full px-4 flex-col gap-2">
            <GameParticipantCard :best-player="true" team-color="blue" />
            <GameParticipantCard team-color="blue" />
            <GameParticipantCard team-color="blue" />
            <GameParticipantCard team-color="blue" />
            <GameParticipantCard team-color="blue" />
          </div>
          <div class="flex w-full px-4 flex-col gap-2">
            <GameParticipantCard />
            <GameParticipantCard />
            <GameParticipantCard />
            <GameParticipantCard :most-tilted="true" />
            <GameParticipantCard />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
