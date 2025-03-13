<script setup lang="ts">
type SIconProps = {
  id: string;
  color?: string;
  size?: string | number
};
const props = withDefaults(defineProps<SIconProps>(), {
  size: 20
});
</script>

<template>
  <svg class="icon" :width="size" :height="size" :fill="color">
    <use :href="id"></use>
  </svg>
</template>

<style scoped lang="scss"></style>
