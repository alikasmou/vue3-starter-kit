<script lang="ts" setup>
import XMark from "@/components/icons/XMark.vue";
import Expand from "@/components/icons/Expand.vue";
import Minimize from "@/components/icons/Minimize.vue";
import { computed, reactive, ref } from "vue";
const props = defineProps({
  show: { default: false, type: Boolean, required: true },
  id: { default: "MODALID", required: false, type: String },
  title: { default: "Title here", required: false, type: String },
});

const modes = reactive({
  full: {
    name: "fullscreen",
    style: ["tw-top-0", "tw-left-0", "tw-w-full", "tw-h-full", "tw-p-5"],
  },
  center: {
    name: "center",
    style: [
      "tw-top-1/2",
      "tw-left-1/2",
      "tw-w-1/2",
      "tw-h-1/2",
      "-tw-translate-x-1/2",
      "-tw-translate-y-1/2",
      "tw-p-5",
    ],
  },
});
const selectedMode = ref("center");
const getMode = computed(() => {
  let getModels = Object.assign({}, modes);
  return getModels[selectedMode.value].style;
});
</script>
<template>
  <transition
    enter-from-class="dialog-bottom-transition-enter-active"
    leave-class="dialog-bottom-transition-leave-active"
  >
    <div
      :id="id"
      class="tw-fixed tw-flex tw-flex-col tw-bg-white tw-shadow-2xl tw-z-[999] tw-rounded-md tw-transition-all tw-duration-300 tw-ease-in-out"
      :class="[...getMode]"
      v-if="show"
    >
      <div class="tw-w-full tw-flex tw-justify-between tw-py-2">
        <div>{{ title }}</div>
        <div class="tw-flex tw-items-center tw-gap-1">
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-3 tw-rounded-md tw-relative tw-cursor-pointer"
            @click="selectedMode = 'center'"
            v-if="selectedMode == 'full'"
          >
            <Minimize
              fill="tw-fill-brand-dark"
              class="tw-w-3 tw-h-3 tw-absolute"
            />
          </button>
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-3 tw-rounded-md tw-relative tw-cursor-pointer"
            @click="selectedMode = 'full'"
            v-if="selectedMode == 'center'"
          >
            <Expand
              fill="tw-fill-brand-dark"
              class="tw-w-3 tw-h-3 tw-absolute"
            />
          </button>
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-3 tw-rounded-md tw-relative tw-cursor-pointer"
            @click="$emit('closeCreateForm')"
          >
            <XMark fill="tw-fill-red-600" class="tw-w-3 tw-h-3 tw-absolute" />
          </button>
        </div>
      </div>
      <div class="tw-w-full tw-flex tw-items-center tw-h-full">
        <div class="tw-grid tw-w-full">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
