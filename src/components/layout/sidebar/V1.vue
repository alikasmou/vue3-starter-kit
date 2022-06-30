<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import MenuTitle from "@/components/layout/menu-title/V1.vue";
import Brand from "../dashboard-brand/V1.vue";
import AngelsRight from "@/components/icons/AnglesRight.vue";
import AnglesLeft from "@/components/icons/AnglesLeft.vue";
import { useLayoutStore } from "@/stores/layout";
const AngelsRightVue = AngelsRight;
const AngelsLeftVue = AnglesLeft;
const store = useLayoutStore();
const props = defineProps({
  sections: {
    required: true,
    type: Array,
    default: () => {
      return [];
    },
  },
});
const open = ref([]);
const SideMenuSections = computed(() => {
  let data = props.sections;
  if (data.length > 0) {
    data.map((item) => {
      open.value.push(item.title);
    });
    return data;
  }
  return [];
});

const drawer = computed(() => {
  return store.getSideMenuDrawer;
});

const rail = computed(() => {
  return store.getSideMenuRail;
});

function toggleDrawer() {
  store.toggleSideMenuDrawer();
}

function closeRail() {
  store.closeSideMenuRail();
}

const footerLinks = reactive([
  {
    icon: "fas fa-circle-user",
    title: "Profile",
    to: "/profile",
  },
  {
    icon: "fas fa-gear",
    title: "Settings",
    to: "/settings",
  },
  {
    icon: "fas fa-arrow-right-from-bracket",
    title: "Sign out",
    to: "/signout",
  },
]);
</script>
<template>
  <v-navigation-drawer
    @click="closeRail()"
    v-model="drawer"
    :rail="rail"
    permanent
    app
    fixed
    class="MainSidear tw-border-none"
    color="primary"
  >
    <div
      class="tw-grid tw-grid-cols-12 tw-h-full tw-max-h-full"
      :class="{ 'tw-overflow-y-scroll scrollbar custom-scrollbar': !rail }"
    >
      <div class="tw-col-span-12 tw-flex tw-flex-col tw-h-8/12 tw-relative">
        <!--Side Menu Header-->
        <div class="tw-sticky tw-z-50 tw-top-0 bg-primary">
          <Brand appTitle="edusims" :displayTitle="rail" />
        </div>
        <!--MENU LISTS-->
        <div class="">
          <div v-if="SideMenuSections.length == 0">NO DATA</div>
          <div v-else class="">
            <Transition name="slide-fade">
              <MenuTitle v-if="!rail" :title="'DASHBOARD'" class="tw-py-2" />
            </Transition>
            <div
              v-for="(section, sectionIndex) in SideMenuSections"
              :key="sectionIndex"
            >
              <div v-if="!rail">
                <v-list
                  v-model:opened="open"
                  density="compact"
                  class="tw-w-full"
                  nav
                  bg-color="primary"
                  active-color="primary-dark"
                >
                  <v-list-group class="tw-mb-0">
                    <template v-slot:activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        prepend-icon="fas fa-bullseye"
                        class="tw-uppercase"
                        :title="section.title"
                        :value="section.title"
                      ></v-list-item>
                    </template>
                    <v-list-group
                      v-for="(group, groupIndex) in section.groups"
                      :key="groupIndex"
                      class="tw-mb-1"
                    >
                      <template v-slot:activator="{ props }">
                        <v-list-item
                          v-bind="props"
                          :title="group.title"
                          :value="section.title"
                          prepend-icon="fas fa-bullseye"
                          class="tw-mt-2"
                        ></v-list-item>
                      </template>
                      <div class="tw-flex tw-items-center tw-ml-[8px]">
                        <div class="tw-relative tw-top-0.5 tw-flex-1">
                          <v-list-item
                            v-for="(link, linkIndex) in group.links"
                            :key="linkIndex"
                            class="tw-px-1"
                            :value="link.title"
                            :title="link.title"
                            active-color="primary-dark"
                            :to="{ name: link.name }"
                          ></v-list-item>
                        </div>
                      </div>
                    </v-list-group>
                  </v-list-group>
                </v-list>
              </div>
            </div>
          </div>
        </div>
        <div
          id="FooterMenu"
          class="tw-flex tw-flex-col w-full tw-pb-4"
          :class="{ 'tw-absolute tw-bottom-0': rail }"
        >
          <v-list class="no-scroll" bg-color="primary">
            <v-list-item
              v-for="(item, i) in footerLinks"
              :key="i"
              :value="item.title"
              active-color="primary-dark"
            >
              <v-list-item-avatar start>
                <v-icon color="white" :icon="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-title
                v-if="!rail"
                class="StaticMenuItem"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>
