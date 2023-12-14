<script setup lang="ts">

const route = useRoute();

</script>

<template>
  <base-page title="Oops">
    <p>Can't find a page that matches the <code class="underline">{{ route.path }}</code> path</p>
  </base-page>
</template>

<style scoped>
  h2 {
    text-align: center;
    padding-top: 200px;
  }
</style>