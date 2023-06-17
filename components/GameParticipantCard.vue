<script setup lang="ts">
interface GameParticipantCardProps {
  teamColor: "red" | "blue";
  // championName: string;
  bestPlayer?: boolean;
  mostTilted?: boolean;
}

const borderColor = computed(() => {
  return props.teamColor === "red" ? "border-red-700" : "border-blue-700";
});

const bestPlayerStyle = computed(() => {
  return props.bestPlayer ? "border-2 border-yellow-200 shimmer-winning" : "";
});

const mostTiltedStyle = computed(() => {
  return props.mostTilted ? "border-2 border-red-500 shimmer-losing" : "";
});

const props = withDefaults(defineProps<GameParticipantCardProps>(), {
  teamColor: "red",
  bestPlayer: false,
  mostTilted: false,
});
</script>

<template>
  <div
    class="w-card drop-shadow border-2 rounded min-h-fit h-32 p-2 bg-cover bg-center bg-[url('~/assets/champion/centered/Aatrox_0.jpg')] bg-blend-overlay bg-black/60"
    :class="[borderColor, bestPlayerStyle, mostTiltedStyle]"
  >
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-400 text-sm">Fragment</h1>
      <div class="flex items-center gap-10">
        <IconFlame />
        <UILabel> Winning </UILabel>
      </div>
    </div>
  </div>
</template>

<style>
.shimmer-winning {
  background-color: rgba(254, 240, 138, 0.2);
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
}

.shimmer-losing {
  background-color: rgb(239 68 68 / 0.2);
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  100% {
    -webkit-mask-position: left;
  }
}
</style>
