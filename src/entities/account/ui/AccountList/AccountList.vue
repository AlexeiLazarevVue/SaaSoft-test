<script setup lang="ts">

import {AccountPasswordInput, AccountTypeSelector, AccountValueInput, TagsInput} from "@src/features";
import {computed, ref} from "vue";
import {useAccountStore} from "@src/entities/account/model/account.store";
import {type Account, AccountTypes} from "@src/entities/account/types/account.types.ts";
import AccountItem from "@src/entities/account/ui/AccountList/AccountItem.vue";

const accountStore = useAccountStore()

const accounts = computed(() => accountStore.accounts)


</script>

<template>
  <table class="w-[1000px]">
    <tr>
      <th class="w-[27%]">Метки</th>
      <th class="w-[20%]">Тип</th>
      <th class="w-[27%]">Значение</th>
      <th class="w-[26%]">Пароль</th>
    </tr>
      <AccountItem v-for="(account, index) in accounts" @on-account-delete="accountStore.deleteAccount(index)" :account-index="index" :account="account"></AccountItem>
  </table>


</template>

<style scoped>
th {
  padding: 5px;
}
</style>