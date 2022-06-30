<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onUpdated } from "vue";
import { useFormBuilderStore } from "@/stores/formbuilder";
const formbuilderStore = useFormBuilderStore();
const props = defineProps({
  input: {
    type: Object,
    required: true,
    default: () => {
      return {};
    },
  },
  init: {
    type: Object,
    required: false,
    default: () => {
      return { value: [] };
    },
  },
});
const emits = defineEmits(["getValueObject"]);
//set init value in edit mode
const inputInitValue = ref(props.init.value || []);
//set input Ref key
const inputRef = ref(props.input.attributes.ref);
//set isParnet
const isParent = ref(props.input.dependency.children == null ? false : true);
//collect the data which come from the store with inputDataSync
const inputData = ref([]);
//get input data from the store
const inputDataSync = computed(() => {
  let data = formbuilderStore.getInputData(inputRef.value);
  inputData.value = data;
  return inputData.value;
});
//set object to emit to the parent FormBuilder component
const ObjectValue = reactive({
  key: inputRef,
  value: inputInitValue,
  input: props.input,
});
//sync object and data when value updated
function syncInput() {
  emits("getValueObject", ObjectValue);
  //I need listener for after update instead of setTimeout func
  setTimeout(() => {
    if (isParent.value === true) {
      //parent, and children arrays
      formbuilderStore.syncChildrenInputs(
        inputRef.value,
        props.input.dependency.children,
        inputInitValue.value
      );
    }
  }, 1400);
}
</script>
<template>
  <!--[X] Done-->
  <v-autocomplete
    v-model="inputInitValue"
    :items="inputDataSync"
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
    @update:model-value="syncInput()"
  ></v-autocomplete>
</template>
