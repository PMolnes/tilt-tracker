<script setup lang="ts">
import { SummonerInfo } from "~/models/SummonerInfo";

const props = defineProps<{
  loading: boolean;
  summonerInfo: SummonerInfo | null;
}>();
</script>

<template>
  <div v-if="loading">
    <!-- Skeleton Loading -->
    <div class="w-default m-auto px-4 flex gap-4 items-start animate-pulse">
      <ProfileIcon
        :profile-icon-id="100"
        :account-level="100"
        :loading="loading"
        class="text-transparent"
      />
      <h1 class="text-2xl font-bold rounded text-transparent bg-gray-200">
        Summoner Name
      </h1>
    </div>
  </div>
  <div v-else-if="summonerInfo" class="w-default m-auto px-4 flex gap-4">
    <ProfileIcon
      :profile-icon-id="summonerInfo.profileIconId"
      :account-level="summonerInfo.summonerLevel"
    />
    <h1 class="text-2xl font-bold">{{ summonerInfo.name }}</h1>
  </div>
</template>
