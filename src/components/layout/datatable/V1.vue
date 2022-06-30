<script lang="ts" setup>
import {
  ref,
  computed,
  defineAsyncComponent,
  reactive,
  onMounted,
  watch,
} from "vue";
import { MapAndGetData } from "@/use/UseDatatableMapper";
import { GetAll, Trash, GetObject } from "@/use/UseHttpRequest";
import { getModelKeyValue } from "@/use/UseHelpers";
import GripVue from "../../icons/Grip.vue";
import Bell from "../../icons/Bell.vue";
import anime from "animejs/lib/anime.es.js";
import Plus from "../../icons/Plus.vue";
import HatWizard from "../../icons/HatWizard.vue";
import WandSparkles from "../../icons/WandSparkles.vue";
import Gear from "../../icons/Gear.vue";
import MagnifyingGlass from "../../icons/magnifyingGlass.vue";
import EnterButton from "../../icons/EnterButton2.vue";
import ToolDrawer from "../drawers/tools-right/V1.vue";
import FormBuilder from "@/components/layout/form-builder/V1.vue";
import { useSettings } from "@/stores/settings";
import Fullscreen from "@/components/layout/modals/fullscreen/V1.vue";
import { createForLoopParams } from "@vue/compiler-core";
const UserGroupComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/datatable/parts/data-items/user-group/v1.vue")
);
const StringComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/datatable/parts/data-items/string-field/v1.vue")
);
const IsDeletedComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/datatable/parts/data-items/is-deleted/v1.vue")
);

const settingsStore = useSettings();

//==> #2 Get the component instance
function getComponent(name: string) {
  return eval(name + "Component");
}

//=======> Define Datatable Props
const props = defineProps({
  index: { type: Object, required: true },
  create: { type: Object, required: true },
  edit: { type: Object, required: true },
});

const data = ref([]);
const searchKey = ref(null);
const filtersObject = ref({ ...settingsStore.getDatatableFilters });
const paginationObject = ref({
  current_page: null,
  first_page_url: null,
  from: null,
  last_page: null,
  last_page_url: "",
  next_page_url: null,
  path: "",
  per_page: null,
  prev_page_url: null,
  to: null,
  total: 0,
  links: [],
});
const distinationPage = ref("1");

function setPage(page: string) {
  let dist = page.split("?page=");
  distinationPage.value = dist[1];
  getDataTable();
  // console.log(dist[1]);
}
const getFilters = computed(() => {
  filtersObject.value = { ...settingsStore.getDatatableFilters };
  return filtersObject;
});

function setFilters() {
  settingsStore.setDatatableFilters(
    filtersObject.value.orderBy,
    filtersObject.value.order,
    filtersObject.value.trashed,
    filtersObject.value.start_date,
    filtersObject.value.end_date,
    filtersObject.value.per_page
  );
  getDataTable();
}

onMounted(() => {
  getDataTable();
});

watch(
  () => searchKey.value,
  () => {
    if (!searchKey.value) {
      getDataTable();
    }
  }
);

async function getDataTable() {
  let params = {
    ...props.index.params,
    ...filtersObject.value,
    search: searchKey.value,
    page: distinationPage.value,
  };
  await GetAll({
    endpoint: props.index.endpoint,
    params: params,
  })
    .then((res) => {
      console.log("promise Example", res.data.api);
      data.value = res.data.data.data;
      paginationObject.value = res.data.data;
      delete paginationObject.value["data"];
    })
    .catch((e) => {
      // console.error(e);
    });
}

const tableHeader = computed(() => {
  return props.index.mapper;
});

const tableData = computed(() => {
  let rows = MapAndGetData(props.index.mapper, data.value);
  return rows;
});

function trashObject(index) {
  Trash(data.value[index][props.index.modelKey], {
    endpoint: props.index.endpoint,
  });
  data.value.splice(index, 1);
}

function editObject(index) {
  alert(index);
}

function showObject(index) {
  alert(index);
}

const drawer = reactive({
  display: false,
  mode: "",
  title: "",
  description: "",
});

const objectToEdit = reactive({});

async function openEditModal(index: number) {
  let modelKey = getModelKeyValue(tableData.value[index][0].value);
  await GetObject(modelKey, {
    endpoint: props.index.endpoint,
  }).then((res) => {
    objectToEdit.value = {};
    objectToEdit.value = res.data.data;
  });
  drawer.display = true;
  drawer.mode = "edit";
  drawer.title = props.edit.form.attributes.label;
  drawer.description = props.edit.form.attributes.description;
}

function openSettings() {
  searchKey.value = null;
  drawer.display = true;
  drawer.mode = "settings";
  drawer.title = "Settings";
  drawer.description = "Quick filters for the datatable";
}

function closeDrawer() {
  drawer.display = false;
}
function onClickAway(event) {
  closeDrawer();
}
const createForm = reactive({
  status: false,
});

function openCreateForm() {
  createForm.status = true;
}
function closeCreateForm() {
  createForm.status = false;
}
</script>

<template>
  <div class="tw-w-full">
    <ToolDrawer
      class="tw-z-[1]"
      @closeDrawer="closeDrawer"
      :open="drawer.display"
    >
      <template #content>
        <div>
          <span class="tw-text-lg">
            {{ drawer.title }}
          </span>
          <span class="tw-text-xs">
            <p class="tw-max-w-10/12">
              {{ drawer.description }}
            </p>
          </span>
        </div>
        <div v-if="drawer.mode == 'edit'">
          <FormBuilder :resource="{ ...edit, data: objectToEdit }" />
        </div>
        <div v-if="drawer.mode == 'settings'">
          <div class="tw-grid tw-gap-2 cols-4 my-4">
            <v-select
              class="tw-col-span-4"
              v-model="filtersObject.orderBy"
              :items="index.params.select"
              label="Order By"
              density="comfortable"
              hide-details
            />
            <v-select
              class="tw-col-span-4"
              v-model="filtersObject.order"
              :items="['asc', 'desc']"
              label="Order"
              density="comfortable"
              hide-details
            />
            <v-select
              class="tw-col-span-4"
              v-model="filtersObject.trashed"
              :items="['without', 'with', 'only']"
              label="Trashed"
              density="comfortable"
              hide-details
            />
            <v-select
              class="tw-col-span-4"
              v-model="filtersObject.per_page"
              :items="['5', '10', '15', '20', '25', '50']"
              label="Recored per Page"
              density="comfortable"
              hide-details
            />
            <v-text-field
              class="tw-col-span-4"
              label="Search Key"
              v-model="searchKey"
              density="comfortable"
              clearable
              hide-details
            ></v-text-field>
            <button @click="setFilters">apply</button>
          </div>
          <div>{{ getFilters }}</div>
        </div>
      </template>
    </ToolDrawer>
    <Fullscreen @closeCreateForm="closeCreateForm" :show="createForm.status">
      <template #content>
        <FormBuilder :resource="{ ...create, data: null }" />
      </template>
    </Fullscreen>
    <div
      class="tw-grid tw-grid-cols-12 tw-w-full tw-max-w-full tw-py-4 tw-px-8"
    >
      <div
        class="tw-col-span-1 tw-col-start-1 tw-flex tw-gap-2 tw-items-center"
      >
        <div class="">
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-5 tw-rounded-md tw-relative tw-cursor-pointer"
            @click="openCreateForm"
          >
            <Plus fill="tw-fill-brand-dark" class="tw-w-4 tw-h-4 tw-absolute" />
          </button>
        </div>
        <div class="">
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-5 tw-rounded-md tw-relative tw-cursor-pointer"
          >
            <WandSparkles
              fill="tw-fill-brand-dark"
              class="tw-w-4 tw-h-4 tw-absolute"
            />
          </button>
        </div>
      </div>
      <div
        class="tw-col-span-4 tw-col-start-9 tw-flex tw-justify-end tw-items-center tw-flex-row-reverse tw-gap-2"
      >
        <div>
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-5 tw-rounded-md tw-relative tw-cursor-pointer"
            @click="openSettings()"
          >
            <Gear fill="tw-fill-brand-dark" class="tw-w-4 tw-h-4 tw-absolute" />
          </button>
        </div>
        <div
          class="tw-w-full tw-h-full tw-relative tw-flex tw-justify-end tw-items-center"
        >
          <input
            v-model="searchKey"
            v-on:keyup.enter="getDataTable()"
            type="text"
            placeholder="SEARCH"
            class="tw-w-full tw-h-full tw-bg-slate-50 tw-pl-4 tw-pr-6 tw-rounded-md tw-text-gray-500 focus:!tw-ring-indigo-500 focus:!tw-border-indigo-500 !tw-border-transparent"
          />
          <span class="tw-flex">
            <EnterButton
              fill="tw-fill-slate-400"
              class="tw-w-5 tw-h-5 tw-absolute tw-right-10 tw-top-1/2 -tw-translate-y-1/2"
            />
          </span>
          <span>
            <MagnifyingGlass
              fill="tw-fill-brand-dark"
              class="tw-w-4 tw-h-4 tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2"
            />
          </span>
        </div>
      </div>
    </div>
    <div
      class="tw-grid tw-grid-cols-12 tw-w-full tw-max-w-full tw-py-3 tw-px-8 tw-rounded-xl tw-bg-slate-100 tw-shadow-md tw-shadow-slate-500/0 tw-cursor-pointer"
    >
      <div
        class="tw-row-start-1 tw-uppercase tw-text-xs tw-flex tw-items-center tw-font-semibold tw-text-gray-600"
        v-for="(column, idx) in tableHeader"
        :key="idx"
        :class="[
          'col-' + column.col,
          { 'tw-flex tw-justify-end': column.isLast },
        ]"
      >
        {{ column.label }}
      </div>
      <div
        class="tw-row-start-1 tw-uppercase tw-text-xs tw-items-center tw-font-semibold tw-text-gray-600 tw-col-span-1 tw-flex tw-justify-end"
      >
        Options
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-w-full tw-gap-4 tw-py-4">
      <div
        v-for="(row, rowIndex) in tableData"
        :key="rowIndex"
        class="tw-grid tw-grid-cols-12 tw-w-full tw-max-w-full tw-px-8 tw-py-2 hover:tw-bg-slate-100/40 hover:tw-shadow-md tw-rounded-xl tw-cursor-pointer hover-effect"
      >
        <div
          v-for="(rowColumn, rowColumnIndex) in row"
          :key="rowColumnIndex"
          class="tw-flex tw-items-center"
          :class="'col-' + tableHeader[rowColumnIndex].col"
        >
          <component
            :is="getComponent(rowColumn.component)"
            :data="rowColumn.value"
            class="tw-text-sm"
          ></component>
        </div>
        <div
          class="tw-col-span-1 tw-flex tw-items-center tw-justify-end tw-text-sm tw-gap-2"
        >
          <button
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-p-4 tw-rounded-md tw-relative tw-cursor-pointer tw-shadow-sm hover:tw-shadow-black/40 tw-transition-all tw-duration-700 tw-ease-in-out"
            @click="openEditModal(rowIndex)"
          >
            <GripVue
              fill="tw-fill-brand-dark"
              class="tw-w-3.5 tw-h-3.5 tw-absolute"
            />
          </button>
        </div>
        <!--COMPONENT-->
      </div>
      <div class="tw-grid tw-grid-cols-12 tw-w-full tw-max-w-full tw-px-8">
        <div class="tw-flex tw-gap-2 tw-col-span-6">
          <button
            v-for="(item, index) in paginationObject.links"
            :key="index"
            @click="setPage(item.url)"
            class="tw-flex tw-justify-center tw-items-center tw-bg-slate-100 tw-text-slate-600 tw-text-sm tw-px-2 tw-py-1 tw-rounded-md tw-relative tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out tw-outline-brand-dark"
            :class="{
              'tw-outline tw-outline-offset-2 tw-outline-brand-dark':
                item.active,
            }"
          >
            {{
              index == 0 || index == paginationObject.links.length - 1
                ? ""
                : item.label
            }}
            <span v-if="index == 0"><v-icon icon="fas fa-chevron-left" /></span>
            <span v-if="index == paginationObject.links.length - 1"
              ><v-icon icon="fas fa-chevron-right"
            /></span>
          </button>
        </div>
        <div class="tw-flex tw-justify-end tw-items-center tw-col-span-6">
          <div
            class="tw-text-sm tw-flex tw-justify-end tw-items-center tw-gap-2 tw-bg-slate-100 tw-px-4 tw-py-2 tw-rounded-lg tw-text-slate-600 tw-cursor-pointer"
          >
            <span>{{ paginationObject.total }}</span>
            <span class="tw-capitalize">
              {{ paginationObject.total > 1 ? "records" : "record" }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
