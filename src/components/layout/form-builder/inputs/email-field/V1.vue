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
          component: "Email",
          label: "Email Address",
          hint: "Enter your active email to recieve the pin code to verify your email account",
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
        rules: {
          required: (value: any) => !!value || "Required.",
          counter: (value: any) => value.length <= 20 || "Max 20 characters",
          email: (value: any) => {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          },
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
        value: "alikasmou@gmail.com",
      };
    },
  },
});
const inputValue = ref(props.init.value || null);
const inputRef = ref(props.input.attributes.ref);
const ObjectValue = reactive({
  key: inputRef,
  value: inputValue,
});
</script>
<template>
  <!--[X] Done-->
  <v-text-field
    v-model="inputValue"
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
</template>
