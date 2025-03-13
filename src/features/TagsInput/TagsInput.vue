<script setup lang="ts">
import { computed } from "vue";
import { Account } from "@src/entities/account/types/account.types";

type TagsInputProps = {
  modelValue: Account["tags"];
};

const props = defineProps<TagsInputProps>();

const emit = defineEmits(["update:modelValue", "onChange"]);

const value = computed({
  get: () => props.modelValue.map((tag) => tag.text).join("; "),
  set: (value: string) =>
    emit(
      "update:modelValue",
      value.split("; ")?.map((tag: string) => ({
        text: tag,
      })),
    ),
});
</script>

<template>
  <InputText
    @change="(event) => emit('onChange', event.target.value)"
    placeholder="Метки"
    type="text"
    maxlength="50"
    v-model="value"
  ></InputText>
</template>

<style scoped></style>
