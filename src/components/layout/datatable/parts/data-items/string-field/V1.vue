<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  data: { type: String, required: false },
});
</script>
<template>
  <p class="tw-w-full tw-truncate">{{ data }}</p>
</template>
