<script lang="ts" setup>
import { ref, reactive } from "vue";
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
          component: "Password",
          label: "Password",
          hint: "At least 8 characters",
          isRequired: true,
          isReadOnly: false,
          placeholder: "new password",
          type: "password",
          vmodel: "password",
          ref: "password", //for title,name,id and ref
          size: 24,
          maxlength: 24,
          min: 5,
          max: 24,
          pattern: null,
          autocomplete: "off",
        },
        rules: {
          required: (value: any) => !!value || "Required.",
          min: (v: any) => v.length >= 8 || "Min 8 characters",
          emailMatch: () => `The email and password you entered don't match`,
        },
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
        value: "*************",
      };
    },
  },
});
const inputValue = ref(null);
const show = ref(false);
const inputRef = ref(props.input.attributes.ref);
const ObjectValue = reactive({
  key: inputRef,
  value: inputValue,
});
</script>
<template>
  <v-text-field
    v-model="inputValue"
    :append-inner-icon="show ? 'fas fa-eye' : 'fas fa-eye-off'"
    :rules="[input.rules.required, input.rules.min]"
    :type="show ? 'text' : 'password'"
    :label="input.attributes.label"
    density="compact"
    @click:append="show = !show"
    hide-details
    @update:model-value="$emit('getValueObject', ObjectValue)"
  ></v-text-field>
</template>
