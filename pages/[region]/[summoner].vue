<script setup lang="ts">
const route = useRoute();

const summoner = ref(route.params.summoner);
const region = ref(route.params.region);

const {
  data: summonerInfo,
  error,
  pending,
} = useLazyFetch(`/api/summoner/${summoner.value}`);

const { data: currentGameInfo, error: currentGameError } = useLazyFetch(
  `/api/matches/current/${summonerInfo.value?.id}`
);
</script>

<template>
  <div class="bg-slate-900 text-white h-screen">
    <Header />
    <main>
      <div class="bg-blue-500 py-4">
        <div v-if="pending">
          <div
            class="w-default m-auto px-4 flex gap-4 items-start animate-pulse"
          >
            <ProfileIcon
              :profile-icon-id="100"
              :account-level="1"
              class="text-transparent"
            />
            <h1 class="text-2xl font-bold text-transparent bg-gray-300/20">
              Dummy Summoner Name
            </h1>
          </div>
        </div>
        <div
          v-else-if="summonerInfo"
          class="w-default items-start m-auto px-4 flex gap-4"
        >
          <ProfileIcon
            :profile-icon-id="summonerInfo.profileIconId"
            :account-level="summonerInfo.summonerLevel"
          />
          <h1 class="text-2xl font-bold">{{ summonerInfo.name }}</h1>
        </div>
      </div>
    </main>
  </div>
</template>
