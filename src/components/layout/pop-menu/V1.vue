<script lang="ts" setup>
import { computed, reactive, ref } from "@vue/runtime-core";
import { useLayoutStore } from "@/stores/layout";
const props = defineProps({
  show: { default: false, type: Boolean, required: true },
  width: { default: "tw-w-56", type: String, required: true },
});
const store = useLayoutStore();
const showMenu = computed(() => {
  return store.getProfileMenuStatus;
});
function close() {
  store.closeProfileMenu();
}
function onClickAway(event) {
  close();
}
</script>
<template>
  <div
    v-if="show"
    class="tw-bg-white tw-absolute tw-z-[999] tw-top-11 tw-right-0 tw-rounded-lg tw-shadow-2xl tw-overflow-hidden"
    :class="[{ 'tw-flex': show }, { 'tw-hidden': !show }, width]"
    v-click-away="onClickAway"
  >
    <div class="tw-flex tw-flex-col tw-w-full">
      <slot name="menuContent"></slot>
    </div>
  </div>
</template>
