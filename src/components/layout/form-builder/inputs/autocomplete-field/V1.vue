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
        rules: {},
        options: [],
        showIf: { key: "", is: true },
      };
    },
  },
  init: {
    type: Object,
    required: false,
    default: () => {
      return {
        value: [
          { title: "value 1", value: "1" },
          { title: "value 2", value: "2" },
          { title: "value 3", value: "3" },
        ],
      };
    },
  },
});
const inputValue = ref(props.init.value || []);
const inputRef = ref(props.input.attributes.ref);
const ObjectValue = reactive({
  key: inputRef,
  value: inputValue,
});
</script>
<template>
  <!--[X] Done-->
  <v-autocomplete
    v-model="inputValue"
    :items="input.options"
    :label="input.attributes.label"
    dense
    density="compact"
    chips
    closable-chips
    filled
    small-chips
    multiple
    solo
    hide-details
    @update:model-value="$emit('getValueObject', ObjectValue)"
  ></v-autocomplete>
</template>
