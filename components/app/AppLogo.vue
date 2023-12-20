<script setup lang="ts">
import { useShopStore } from '~/stores/shop';

const shopStore = useShopStore();
</script>

<template>
  <span>
    <h2>{{ shopStore.getShopName }} <small>(📓 Nuxt Template)</small></h2>
  </span>
</template>

<style scoped>
@media (max-width: 768px) {
  small {
    font-size: 0.5em;
  }
}
</style>