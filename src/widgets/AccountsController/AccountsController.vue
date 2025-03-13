<script setup lang="ts">
import AccountList from "@src/entities/account/ui/AccountList/AccountList.vue";
import CreateAccountButton from "@src/features/CreateAccountButton/CreateAccountButton.vue";
import Icon from "@src/shared/ui/Icon.vue";
</script>

<template>
  <div class="flex flex-col gap-[15px]">
    <div class="flex gap-[15px] items-center">
      <h2 class="text-xl">Учетные записи</h2>
      <CreateAccountButton></CreateAccountButton>
    </div>
    <div class="">
      <p
        class="flex justify-start items-center gap-[10px] rounded-md p-5 text-gray-500 text-zinc-400 dark:bg-zinc-900"
      >
        <Icon color="oklch(0.705 0.015 286.067)" id="#question" />Для указания
        нескольких меток для одной пары логин/пароль используйте разделитель ";"
      </p>
    </div>
    <AccountList></AccountList>
  </div>
</template>

<style scoped></style>
