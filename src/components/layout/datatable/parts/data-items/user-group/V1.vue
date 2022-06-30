<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
const props = defineProps({
  data: { type: Array, required: true, default: "ok" },
});
const userGroup = computed(() => {
  let result = {
    uuid: null,
    avatar: null,
    email: null,
    ussername: null,
  };
  props.data.map((item) => {
    result[item.key] = item.value;
  });
  return result;
});
</script>
<template>
  <div class="tw-flex tw-items-center tw-w-full">
    <div
      class="tw-mr-2 tw-w-12 tw-h-12 tw-rounded-full tw-object-contain"
      :class="userGroup.gender == 'm' ? 'male' : 'female'"
    >
      <img
        class="tw-max-w-full tw-max-h-full tw-w-full tw-h-full tw-rounded-full"
        :src="userGroup.avatar"
        alt=""
      />
    </div>
    <div class="tw-flex tw-flex-col tw-justify-start">
      <RouterLink
        :to="`/users/${userGroup.uuid}/show`"
        class="tw-font-semibold tw-text-sm tw-uppercase"
      >
        {{ userGroup.username || "ANANYMOS" }}
      </RouterLink>
      <span
        v-if="userGroup.email"
        class="tw-text-gray-700 tw-font-semibold tw-flex tw-text-xs tw-uppercase"
      >
        {{ userGroup.email }}
      </span>
      <div v-else>No email</div>
    </div>
  </div>
</template>
