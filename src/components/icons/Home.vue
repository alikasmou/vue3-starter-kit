<script lang="ts" setup>
import {} from "vue";
const props = defineProps({
  fill: { required: false, type: String },
});
</script>
<template>
  <div class="tw-w-full" :class="fill">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.98 512">
      <path
        d="M575.8,255.5c0,18-15,32.1-32,32.1h-32l.7,160.1c.1,35.5-28.6,64.3-64,64.3H128.1c-35.35,0-64.01-28.7-64.01-64v-160.4H32.05c-18.03,0-32.05-14.1-32.05-32.1,0-9,3-17,10.01-24L266.4,8.02c7-7.02,15-8.02,22-8.02s15,2,21.1,7.01l42.5,37.39,3.01,2.64,60.99,53.66v-.04l96,84.39,24.71,21.72,28.09,24.73c8,7,12.1,15,11,24Z"
      />
      <path
        class="tw-opacity-75"
        d="M512.89,55.84V185.05l-96-84.39V55.84c0-17.67,14.3-32,32-32h32c17.7,0,32,14.33,32,32Z"
      />
      <rect
        class="tw-opacity-75 tw-fill-white"
        x="224"
        y="192"
        width="128"
        height="128"
        rx="24"
        ry="24"
      />
    </svg>
  </div>
</template>
