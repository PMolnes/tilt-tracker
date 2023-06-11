<script setup lang="ts">
interface ProfileIconProps {
  profileIconId: number;
  accountLevel: number;
}

const props = defineProps<ProfileIconProps>();

const profileIconUrl = computed(() => {
  if (props.profileIconId)
    return `https://ddragon.leagueoflegends.com/cdn/13.11.1/img/profileicon/${props.profileIconId}.png`;
  return "";
});
</script>

<template>
  <div class="flex flex-col items-center">
    <img
      class="aspect-square h-32 bg-white flex-shrink-0 border border-white rounded"
      :src="profileIconUrl"
      alt="profile-icon"
    />
    <span
      class="bg-slate-900 -mt-4 py-1 px-4 border border-white rounded max-w-fit"
      >{{ accountLevel }}</span
    >
  </div>
</template>
