<script lang="ts" setup>
import {
  reactive,
  defineAsyncComponent,
  ref,
  onMounted,
  computed,
  watch,
} from "vue";
import { useFormBuilderStore } from "@/stores/formbuilder";
//===> Components
const StringFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/string-field/V1.vue")
);
const EmailFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/email-field/V1.vue")
);
const PhoneFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/phone-field/V1.vue")
);
const TextareaFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/textarea-field/V1.vue")
);
const SwitcherFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/switcher-field/V1.vue")
);
const SelectFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/select-field/V1.vue")
);
const MultiselectFieldComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/form-builder/inputs/multiselect-field/V1.vue")
);
const SliderFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/slider-field/V1.vue")
);
const PasswordFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/password-field/V1.vue")
);
const UploadFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/upload-field/V1.vue")
);
const MultiUploadFieldComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/form-builder/inputs/multiupload-field/V1.vue")
);
const RadioFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/radio-field/V1.vue")
);
const RangeFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/range-field/V1.vue")
);
const MoneyFieldComponent = defineAsyncComponent(
  () => import("@/components/layout/form-builder/inputs/money-field/V1.vue")
);
const AutoCompleteFieldComponent = defineAsyncComponent(
  () =>
    import("@/components/layout/form-builder/inputs/autocomplete-field/V1.vue")
);
const FloppyDiskSolid = defineAsyncComponent(
  () => import("@/components/icons/FloppyDiskSolid.vue")
);
const props = defineProps({
  resource: {
    type: Object,
    required: true,
    default: () => {
      return {
        form: {},
        inputs: {},
        request: {},
        buttons: {},
      };
    },
  },
});
const formbuilderStore: any = useFormBuilderStore();
const initObject: any = reactive({});

onMounted(() => {
  formbuilderStore.setSchema(props.resource);
  formbuilderStore.setDataForInputs();
});

//get the input component
function getComponent(name: string) {
  return eval(name + "FieldComponent");
}

//get the input init value if exists (edit mode)
function getComponentInitValue(vmodel: any) {
  if (!vmodel) {
    return { value: null };
  }
  let value = Reflect.get(props.resource.data?.value || {}, vmodel);
  return { value };
}

//set emitted values from inputs
function inputsValue(inputValue: object) {
  props.resource.inputs.map(() => {
    initObject[inputValue.key] = inputValue.value;
  });
  // formbuilderStore.
  formbuilderStore.setInputs(initObject);
}

function save() {
  if (props.resource.data) {
    formbuilderStore.updateRequest(props.resource?.data?.value);
  } else if (!props.resource.data) {
    formbuilderStore.createRequest();
  }
}

//for testing values output
const formInputValues = computed(() => {
  return formbuilderStore.getFormInputValues;
});
</script>
<template>
  <div>
    <form
      :id="resource.form.attributes.id"
      :autocomplete="resource.form.attributes.autocomplete"
      :action="resource.form.attributes.action"
      :enctype="resource.form.attributes.enctype"
      :method="resource.form.attributes.method"
      :name="resource.form.attributes.id"
      :ref="resource.form.attributes.id"
      @submit.prevent="save()"
    >
      <div
        :class="[
          'cols-' + resource.form.style.cols,
          'gap-' + resource.form.style.gap,
          'my-' + resource.form.style.my,
          resource.form.style.mx ? 'tw-mx-' + resource.form.style.mx : '',
        ]"
        class="tw-grid tw-gap-2"
      >
        <div
          v-for="(input, inputIndex) in resource.inputs"
          :key="inputIndex"
          :class="[
            input.style.position.sm,
            input.style.position.md,
            input.style.position.lg,
            input.style.position.xl,
            input.style.position.xxl,
          ]"
        >
          <component
            :is="getComponent(input.attributes.component)"
            :input="input"
            :init="getComponentInitValue(input.attributes.vmodel)"
            @getValueObject="inputsValue"
          />
        </div>
      </div>
      <!-- CTA -->
      <div class="">
        <button
          type="submit"
          id=""
          class="tw-flex tw-justify-center tw-items-center tw-gap-2"
          :class="[
            'btn-' + resource.button.style.theme,
            resource.button.style.outlined == true
              ? 'btn-outlined'
              : 'btn-block ',
            resource.button.style.reverse == true ? 'tw-flex-row-reverse' : '',
          ]"
        >
          <span>
            <FloppyDiskSolid class="tw-w-3" fill="tw-fill-white" />
          </span>
          <span class="tw-text-sm tw-font-semibold">
            {{ resource.button.label }}
          </span>
        </button>
      </div>
    </form>
    <div class="tw-mt-4">
      {{ formInputValues }}
    </div>
    <div class="tw-mt-4"></div>
  </div>
</template>
