<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import MenuTitle from "@/components/layout/menu-title/V1.vue";
import Sidebar from "@/components/layout/sidebar/V1.vue";
import Topbar from "@/components/layout/topbar/V1.vue";
import { useLayoutStore } from "@/stores/layout";
import BreadCrumbs from "@/components/layout/breadcrumbs/V1.vue";
import PopMenu from "../components/layout/pop-menu/V1.vue";
import { useRoute, useRouter } from "vue-router";
const store = useLayoutStore();
const router = useRouter();
const SideMenuSections = computed(() => {
  return store.getSideMenuSections;
});

const props = defineProps({
  base: { type: String, required: true, default: "" },
});
function pushTo(value: string) {
  let view = value == "index" ? "" : value;
  let url = "/" + props.base + "/" + view;
  router.push(url);
}
const showPopMenu = ref(false);
function openPopMenu() {
  showPopMenu.value = true;
}
function closePopMenu() {
  showPopMenu.value = false;
}
const quickMenu = ref([
  { title: "Listing", name: "listing", short: "CTR+L", icon: "fas fa-cubes" },
  {
    title: "Create",
    name: "create",
    short: "CTR+C",
    icon: "fas fa-circle-plus",
  },
  {
    title: "Statistics",
    name: "statistics",
    short: "CTR+S",
    icon: "fas fa-chart-area",
  },
  { title: "Filtering", name: "filter", short: "CTR+F", icon: "fas fa-filter" },
  { title: "Index", name: "index", short: "CTR+I", icon: "fas fa-list-ul" },
  { title: "Trash", name: "trash", short: "CTR+T", icon: "fas fa-trash-can" },
]);
</script>
<template>
  <v-app>
    <Sidebar :sections="SideMenuSections" />
    <Topbar />
    <v-main class="bg-white">
      <div class="tw-grid tw-grid-cols-12">
        <div
          class="tw-col-span-12 tw-px-8 tw-border-b-[1px] tw-border-slate-100 tw-mb-4 tw-py-4"
        >
          <div class="tw-w-full tw-grid tw-grid-cols-12">
            <div class="tw-col-span-4">
              <BreadCrumbs />
            </div>
            <div class="tw-col-span-8 tw-flex tw-justify-end">
              <div class="tw-relative tw-flex tw-flex-col tw-justify-center">
                <button
                  @click="openPopMenu"
                  class="tw-flex tw-items-center tw-gap-1"
                >
                  <span
                    class="tw-text-xs tw-uppercase tw-relative tw-top-[2px] tw-text-slate-500"
                    >Menu</span
                  >
                  <span>
                    <v-icon
                      class="tw-text-brand-dark !tw-text-s"
                      icon="fas fa-layer-group"
                    ></v-icon>
                  </span>
                </button>
                <PopMenu
                  :show="showPopMenu"
                  width="tw-w-72"
                  v-click-away="closePopMenu"
                >
                  <template #menuContent>
                    <div class="tw-grid tw-grid-cols-2">
                      <div
                        class="tw-col-span-2 tw-flex tw-justify-center tw-items-center tw-h-32 tw-overflow-hidden tw-bg-brand-dark tw-mix-blend-multiply tw-object-fill tw-relative"
                      >
                        <img
                          src="/src/assets/imgs/menu-bg.png"
                          class="tw-absolute tw-opacity-80"
                        />
                        <span
                          class="tw-text-white tw-z-[1] tw-flex tw-flex-col tw-justify-center tw-items-center tw-uppercase tw-font-bold"
                        >
                          <span>
                            <v-icon
                              icon="fas fa-bolt-lightning"
                              size="20px"
                            ></v-icon>
                          </span>
                          <span> Model Actions </span>
                          <span class="tw-text-xs tw-font-normal tw-opacity-80">
                            CMD + M
                          </span>
                        </span>
                      </div>
                      <div
                        class="tw-flex tw-flex-col tw-col-span-1 tw-justify-center tw-items-center hover:tw-bg-slate-100 tw-p-4 tw-cursor-pointer"
                        v-for="(item, index) in quickMenu"
                        :key="index"
                        @click="pushTo(item.name)"
                      >
                        <span class="tw-p-1"
                          ><v-icon
                            :icon="item.icon"
                            size="18px"
                            class="tw-text-slate-400"
                          ></v-icon
                        ></span>
                        <span
                          class="tw-text-sm tw-text-slate-500 tw-uppercase tw-font-semibold"
                          >{{ item.title }}</span
                        >
                      </div>
                      <div
                        class="tw-col-span-2 tw-p-2 tw-flex tw-justify-center tw-items-center"
                      >
                        <button
                          class="tw-flex tw-justify-center tw-items-center tw-gap-2"
                        >
                          <span class="tw-text-slate-600 tw-text-sm"
                            >show all items</span
                          >
                          <span>
                            <v-icon
                              class="tw-text-slate-400"
                              icon="fas fa-right-long"
                            ></v-icon>
                          </span>
                        </button>
                      </div>
                    </div>
                  </template>
                </PopMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-container fluid>
        <div class="tw-grid tw-grid-cols-12">
          <slot name="content"></slot>
        </div>
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} - edusims</span>
    </v-footer> -->
  </v-app>
</template>
