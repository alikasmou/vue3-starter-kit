<script lang="ts" setup>
import CPanelLayout from "@/layouts/CPanel.vue";
import Datatable from "@/components/layout/datatable/V1.vue";
import { IndexUserResource } from "@/resources/users/IndexUserResource";
import { CreateUserResource } from "@/resources/users/CreateUserResource";
import { EditUserResource } from "@/resources/users/EditUserResource";
</script>
<template>
  <CPanelLayout base="users">
    <template #content>
      <div class="tw-col-span-12">
        <Datatable
          :index="IndexUserResource"
          :create="CreateUserResource"
          :edit="EditUserResource"
        />
      </div>
    </template>
  </CPanelLayout>
</template>
