<script setup lang="ts">
import { computed } from "vue";
import type { Account } from "../../entities/account/types/account.types.ts";

type AccountPasswordInputProps = {
  modelValue: Account["password"];
  requiredError: boolean;
};
const props = defineProps<AccountPasswordInputProps>();
const emit = defineEmits(["update:modelValue", "onChange"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// const isValid
//
// const onPasswordChange = (value: Account['password']) => {
//
// }
</script>

<template>
  <Password
    maxlength="100"
    @change="(event) => emit('onChange', event.target.value)"
    placeholder="Пароль"
    :required="requiredError"
    :invalid="requiredError"
    toggle-mask
    v-model="value"
  ></Password>
</template>

<style scoped></style>
