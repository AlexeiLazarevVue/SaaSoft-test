<script setup lang="ts">
import { computed } from "vue";

type AccountValueInputProps = {
  modelValue: string;
  requiredError: boolean;
};

const props = defineProps<AccountValueInputProps>();

const emit = defineEmits(["update:modelValue", "onChange"]);

const value = computed({
  get: () => props.modelValue,
  set: (modelValue: string) => emit("update:modelValue", modelValue),
});
</script>

<template>
  <InputText
    maxlength="100"
    placeholder="Значение"
    @change="(event) => emit('onChange', event.target.value)"
    required
    :invalid="requiredError"
    class="w-full"
    type="text"
    v-model="value"
  ></InputText>
</template>

<style scoped></style>
