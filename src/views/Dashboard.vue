<script lang="ts" setup>
import CPanelLayout from "@/layouts/CPanel.vue";
</script>
<template>
  <CPanelLayout>
    <template #content>
      <div class="tw-col-span-4">dashboard content from home page</div>
    </template>
  </CPanelLayout>
</template>
<!--
// Model 
  1-folder 
    User => users Course => courses CourseLesson course-lessons kebab case
  2- actions
      -> Create
  3- basics under the main folder of model
    -> index data table, quick create, quick edit, trash action, view action modal
    -> filter view to make detailed filter
    -> show single page of the model also contains the edit 
    -> listings cards with simple filter (card contains more details)
-->
