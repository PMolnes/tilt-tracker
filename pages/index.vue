<template>
  <div></div>
</template>

<script setup lang="ts">
const { data: summonerInfo } = await useFetch("/api/summoner/Pella");
</script>
