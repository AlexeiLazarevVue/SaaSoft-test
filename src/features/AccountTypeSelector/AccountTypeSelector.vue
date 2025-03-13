<script setup lang="ts">
import {AccountTypes} from "../../entities/account/types/account.types.ts";
import {computed} from "vue";

const accountSelectorOptions = [
  {
    label: 'Локальный',
    value: AccountTypes.LOCAL
  },
  {
    label: 'LDAB',
    value: AccountTypes.LDAB
  }
]
type AccountTypeSelectorProps = {
  modelValue: string
}
const props = defineProps<AccountTypeSelectorProps>()
const emit = defineEmits(['update:modelValue', 'onChange'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
<Select class="w-[200px]" option-label="label" @change="(value) => emit('onChange', value)" option-value="value" v-model="value" :options="accountSelectorOptions"></Select>
</template>

<style scoped>

</style>