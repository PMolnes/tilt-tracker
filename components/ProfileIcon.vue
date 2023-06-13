<script setup lang="ts">
interface ProfileIconProps {
  profileIconId: number;
  accountLevel: number;
  loading?: boolean;
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
      class="aspect-square h-32 flex-shrink-0 rounded"
      :class="loading ? 'bg-gray-200' : 'bg-white border border-white'"
      :src="profileIconUrl"
      alt="profile-icon"
    />
    <span
      class="-mt-4 py-1 px-4 rounded max-w-fit"
      :class="loading ? 'bg-gray-200' : 'bg-slate-900 border border-white'"
      >{{ accountLevel }}</span
    >
  </div>
</template>
