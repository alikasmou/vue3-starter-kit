<script lang="ts" setup>
const props = defineProps({
  title: { default: "Menu", type: String, required: true },
});
</script>
<template>
  <div class="tw-px-[16px] tw-py-1 tw-mt-2 tw-flex tw-flex-col tw-w-full">
    <h2 class="tw-text-sm tw-opacity-60 tw-uppercase">{{ title }}</h2>
    <div
      class="tw-w-2/12 tw-h-[2px] bg-primary-dark tw-opacity-50 tw-mt-1"
    ></div>
  </div>
</template>
