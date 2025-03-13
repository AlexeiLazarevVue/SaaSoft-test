<script setup lang="ts">
import { useAccountStore } from "@src/entities/account/model/account.store";

const accountStore = useAccountStore();
</script>

<template>
  <Button
    variant="outlined"
    @click="accountStore.addNewAccount()"
    class="size-[40px]"
    size="large"
    >+</Button
  >
</template>

<style scoped></style>
