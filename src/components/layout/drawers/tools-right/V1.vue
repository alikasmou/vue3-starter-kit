<script lang="ts" setup>
import { computed } from "@vue/reactivity";
const props = defineProps({
  open: { type: Boolean, required: false },
});
const drawer = computed(() => props.open);
</script>
<template>
  <transition
    mode="out-in"
    enter-active-class="el"
    appear-to-class="unitless-values-demo"
  >
    <div
      class="tw-h-full tw-w-full tw-absolute tw-top-0 tw-right-0 tw-flex tw-flex-col tw-items-end"
      v-if="drawer"
    >
      <div
        class="tw-absolute tw-top-0 tw-w-full tw-h-full tw-bg-slate-400/40"
        @click="$emit('closeDrawer', false)"
      ></div>
      <div
        class="tw-w-4/12 tw-bg-white tw-h-full tw-flex tw-flex-col tw-p-6 tw-shadow-xl tw-shadow-black/40 tw-relative tw-z-50 tw-translate-x-full- unitless-values-demo el tw-transition-all tw-delay-[2s] tw-overflow-y-scroll custom-scrollbar"
        :class="[{ 'tw-flex': drawer }, { 'tw-hidden': !drawer }]"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>
