<script lang="ts" setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import History from "@/components/icons/ClockRotateLeft.vue";
import Home from "@/components/icons/Home.vue";
let route = useRoute();
let router = useRouter();
let links = ref([]);
onMounted(() => {
  setLinks();
});
function setLinks() {
  let path = route.path;
  path = path.split("/");
  path = path.filter((x) => x != "");
  console.log("path", path);
  path.map((item, index) => {
    let idx = index == path.length - 1 ? true : false;
    links.value.push({
      text: item,
      disabled: idx,
      path: item,
    });
  });
  console.log("links", links);
}
</script>
<template>
  <div class="tw-flex tw-items-center tw-gap-2">
    <button
      class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-5 tw-rounded-md tw-relative tw-cursor-pointer"
    >
      <History fill="tw-fill-brand-dark" class="tw-w-4 tw-h-4 tw-absolute" />
    </button>
    <button class="">
      <router-link
        :to="{ name: 'home' }"
        class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-5 tw-rounded-md tw-relative tw-cursor-pointer"
      >
        <Home fill="tw-fill-brand-dark" class="tw-w-4 tw-h-4 tw-absolute" />
      </router-link>
    </button>
    <button v-for="(item, index) in links" :key="index" class="tw-text-sm">
      <router-link
        v-if="index != links.length - 1"
        :to="{ name: item.path }"
        class="tw-text-brand-dark tw-underline tw-underline-offset-2 tw-px-3 tw-uppercase tw-relative tw-top-[1px] tw-text-xs"
      >
        {{ item.text }}
      </router-link>
      <span v-if="index != links.length - 1"
        ><v-icon
          class="tw-text-brand-dark/30 !tw-text-[5px]"
          icon="fas fa-circle"
        ></v-icon
      ></span>
      <span
        class="tw-text-slate-500 tw-uppercase tw-relative tw-top-[1px] tw-text-xs"
        v-else
        >{{ item.text }}</span
      >
    </button>
  </div>
</template>
