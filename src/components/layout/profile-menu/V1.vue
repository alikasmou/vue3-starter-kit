<script lang="ts" setup>
import { computed, reactive, ref } from "@vue/runtime-core";
import { useLayoutStore } from "@/stores/layout";
const props = defineProps({
  show: { default: false, type: Boolean, required: true },
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
    class="tw-w-56 tw-bg-white tw-fixed tw-z-[999] tw-top-14 tw-right-4 tw-rounded-lg tw-shadow-2xl tw-overflow-hidden"
    :class="[{ 'tw-flex': show }, { 'tw-hidden': !show }]"
    v-click-away="onClickAway"
  >
    <div class="tw-flex tw-flex-col tw-w-full">
      <div
        class="tw-flex tw-px-4 tw-py-5 tw-items-center tw-gap-2 tw-border-b-slate-200 tw-border-b-[1px] tw-w-full"
      >
        <div class="tw-shadow-lg tw-shadow-cyan-500/30 tw-rounded-full">
          <v-avatar large>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></v-avatar>
        </div>
        <div class="text-primary tw-text-xs">
          <div
            class="text-primary tw-text-xs tw-flex tw-gap-1 tw-relative tw-font-bold"
          >
            USER NAME<span
              class="tw-bg-cyan-500 tw-rounded-md tw-px-1 tw-py-0.5 tw-absolute -tw-top-1.5 -tw-right-1 tw-text-micro tw-text-white tw-shadow-lg tw-shadow-cyan-500/50"
              >admin</span
            >
          </div>
          <div class="tw-text-tiny">admin@edusims.com</div>
        </div>
      </div>
      <div
        class="tw-flex tw-items-center tw-gap-2 tw-border-b-slate-200 tw-border-b-[1px] tw-w-full"
      >
        <div class="text-primary tw-flex tw-flex-col tw-w-full">
          <router-link
            class="tw-w-full tw-px-4 tw-py-2 hover:tw-bg-cyan-500/30 tw-cursor-pointer tw-text-sm"
            :to="{ name: 'users-create' }"
          >
            {{ "My Profile" }}
          </router-link>
          <router-link
            class="tw-w-full tw-px-4 tw-py-2 hover:tw-bg-cyan-500/30 tw-cursor-pointer tw-text-sm"
            :to="{ name: 'users-create' }"
          >
            {{ "Settings" }}
          </router-link>
          <router-link
            class="tw-w-full tw-px-4 tw-py-2 hover:tw-bg-cyan-500/30 tw-cursor-pointer tw-text-sm"
            :to="{ name: 'users-create' }"
          >
            {{ "Notifications" }}
          </router-link>
        </div>
      </div>
      <div
        class="tw-flex tw-items-center tw-gap-2 tw-border-b-slate-200 tw-border-b-[1px] tw-w-full"
      >
        <div class="tw-w-1/2 tw-flex tw-justify-center text-primary">
          <button
            class="tw-h-full tw-py-2 tw-w-full tw-flex tw-items-center tw-justify-start tw-px-4 tw-gap-1"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="tw-h-3 tw-w-3"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"
                />
              </svg>
            </span>
            <span class="tw-text-xs">Logout</span>
          </button>
        </div>
        <div class="tw-w-1/2 tw-flex tw-justify-center"></div>
      </div>
    </div>
  </div>
</template>
