<script lang="ts" setup>
import { computed, reactive, ref } from "@vue/runtime-core";
import AngelsRight from "@/components/icons/AnglesRight.vue";
import AnglesLeft from "@/components/icons/AnglesLeft.vue";
import { useLayoutStore } from "@/stores/layout";
import ProfileMenu from "@/components/layout/profile-menu/V1.vue";
import breadcrumbs from "../breadcrumbs/V1.vue";
// const props = defineProps({
//   section: {
//     default: () => {
//       return [{ name: "", title: "menu title", subs: [] }];
//     },
//     required: true,
//     type: Array,
//   },
// });
const AngelsRightVue = AngelsRight;
const AngelsLeftVue = AnglesLeft;
const store = useLayoutStore();
const rail = computed(() => {
  return store.getSideMenuRail;
});

function toggleRail() {
  store.toggleSideMenuRail();
}

function getComponent(component: string) {
  return eval(component + "Vue");
}

const showMenu = computed(() => {
  return store.getProfileMenuStatus;
});

// function close() {
//   store.closeProfileMenu();
// }
function open() {
  store.openProfileMenu();
}
// function toggleMenu() {
//   store.toggleProfileMenu();
// }

const items = reactive([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>
<template>
  <v-app-bar color="bg-light" flat fixed app>
    <div class="tw-grid tw-grid-cols-12 tw-w-full">
      <div class="tw-col-span-4">
        <v-btn icon @click.stop="toggleRail()">
          <!-- <v-icon> </v-icon> -->
          <component
            :is="
              rail ? getComponent('AngelsRight') : getComponent('AngelsLeft')
            "
            class="tw-w-5"
          ></component>
        </v-btn>
      </div>
      <div class="tw-col-span-4"></div>
      <div
        class="tw-col-span-4 tw-flex tw-justify-end tw-items-center tw-relative"
      >
        <v-btn icon @click="open">
          <v-avatar large>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></v-avatar>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
  <ProfileMenu :show="showMenu" />
</template>
