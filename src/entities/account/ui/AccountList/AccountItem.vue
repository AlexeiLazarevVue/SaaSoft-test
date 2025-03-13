<script setup lang="ts">

import {type Account, AccountTypes} from "@src/entities/account/types/account.types";
import {AccountPasswordInput, AccountTypeSelector, AccountValueInput, TagsInput} from "@src/features";
import {ref} from "vue";
import {useAccountStore} from "@src/entities/account/model/account.store";
import Icon from "@src/shared/ui/Icon.vue";

type AccountItemProps = {
  account: Account;
  accountIndex: number
}

const props = defineProps<AccountItemProps>()
const emit = defineEmits(['onAccountDelete'])

const accountStore = useAccountStore()

const showRequiredFieldsError = ref(false)

const checkRequiredFields = () => {
  const requiredFields: (keyof Account)[] = ['value', 'password'];
  for (const field of requiredFields) {
    console.log('fffffffff')
    console.log(props.account.type)
    console.log(props.account[field])
    if (!props.account[field] && !(field === 'password' && props.account.type === AccountTypes.LDAB)) {
      showRequiredFieldsError.value = true
      break
    }
    showRequiredFieldsError.value = false
  }
  if (showRequiredFieldsError.value === false)
    accountStore.saveAccount(props.accountIndex)
}

const checkErrorStatus = (field: keyof Account) => showRequiredFieldsError.value && !props.account[field]
</script>

<template>
  <tr>
    <td>
      <TagsInput @onChange="(value) =>{
      checkRequiredFields()}" class="w-full"
                 v-model="account.tags"></TagsInput>
    </td>
    <td>
      <AccountTypeSelector @onChange="(value) => {if(value === AccountTypes.LDAB) account.password = null
      checkRequiredFields()}" class="w-full" v-model="account.type"></AccountTypeSelector>
    </td>
    <td :colspan="account.type === AccountTypes.LDAB ? 2 : 1">
      <AccountValueInput :required-error="checkErrorStatus('value')"
                         @onChange="(value) => checkRequiredFields()" class="w-full"
                         v-model="account.value"></AccountValueInput>
    </td>
    <td v-if="account.type !== AccountTypes.LDAB">
      <AccountPasswordInput @onChange="(value) => checkRequiredFields()"
                            :requiredError="checkErrorStatus('password')"
                            v-model="account.password"></AccountPasswordInput>
    </td>
    <td><Icon class="cursor-pointer" @click="emit('onAccountDelete', accountIndex)" color="#fff" id="#trash"></Icon>
    </td>
  </tr>
</template>

<style scoped>
td {
  padding: 5px;
}
</style>