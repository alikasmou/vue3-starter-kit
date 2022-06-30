<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  data: { type: String, required: false },
});
</script>
<template>
  <span class="">{{ data || "active" }}</span>
</template>
