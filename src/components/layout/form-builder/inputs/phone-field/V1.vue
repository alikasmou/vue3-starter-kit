<script lang="ts" setup>
import { ref, reactive, computed } from "vue";

const props = defineProps({
  input: {
    type: Object,
    required: true,
    default: () => {
      return {
        style: {
          position: {
            sm: { start: "1", end: "2" },
            md: { start: "1", end: "2" },
            lg: { start: "1", end: "2" },
            xl: { start: "1", end: "2" },
            xxl: { start: "1", end: "2" },
          },
        },
        attributes: {
          component: "Email",
          label: "Email Address",
          help: "Enter your active email to recieve the pin code to verify your email account",
          isRequired: true,
          isReadOnly: false,
          placeholder: "e.g. example@domain.com",
          type: "email",
          vmodel: "email",
          ref: "email", //for title,name,id and ref
          size: 24,
          maxlength: 24,
          min: 5,
          max: 24,
          pattern: null,
          autocomplete: "off",
        },
        rules: {},
        options: null,
        showIf: { key: "", is: true },
      };
    },
  },
  init: {
    type: Object,
    required: false,
    default: () => {
      return {
        value: {
          code: "+90",
          phone: "5541811507",
        },
      };
    },
  },
});
const internationalCode = ref(props.init.value?.code || null);
const phoneNumber = ref(props.init.value?.phone || null);
const inputRef = ref(props.input.attributes.ref);
const fullNumber = computed(() => {
  return internationalCode.value + "-" + phoneNumber.value;
});
const ObjectValue = reactive({
  key: inputRef,
  value: fullNumber,
});
</script>
<template>
  <div class="tw-w-full tw-flex tw-gap-0.5">
    <div class="tw-w-2/6">
      <v-select
        :items="['+966', '+90', '+933', '+987']"
        label="Code"
        density="compact"
        hide-details
        v-model="internationalCode"
        @update:model-value="$emit('getValueObject', ObjectValue)"
      ></v-select>
    </div>
    <div class="tw-w-4/6">
      <v-text-field
        v-model="phoneNumber"
        :prefix="input.attributes.prefix"
        :suffix="input.attributes.suffix"
        :label="input.attributes.label"
        :placeholder="input.attributes.placeholder"
        :rules="[input.rules.required, input.rules.email]"
        :loading="'condition-here' ? true : true"
        :type="input.attributes.type"
        density="compact"
        color="cyan darken"
        hide-details
        @update:model-value="$emit('getValueObject', ObjectValue)"
      ></v-text-field>
    </div>
  </div>
</template>
