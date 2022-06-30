<script lang="ts" setup>
import VuetifyLogo from "@/components/VuetifyLogo.vue";

const props = defineProps({
  displayTitle: { type: Boolean, required: true, default: true },
  appTitle: { type: String, required: true, default: "edusims v1.0" },
});
</script>
<template>
  <div class="tw-py-3 tw-px-[16px] tw-flex tw-items-center tw-gap-x-2">
    <div
      class="tw-w-9 tw-h-9 tw-p-1 tw-object-contain tw-flex tw-justify-center tw-items-center tw-rounded-full"
    >
      <VuetifyLogo class="" />
    </div>
    <Transition name="slide-fade">
      <div v-if="!displayTitle" class="tw-uppercase tw-text-xs">
        {{ appTitle }}
      </div>
    </Transition>
  </div>
  <div class="tw-bg-white/10 tw-h-1 tw-mb-1"></div>
</template>
