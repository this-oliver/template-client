<script setup lang="ts">

const props = defineProps({
	title: {
		type: String,
		default: undefined
	}
});
</script>

<template>
  <v-row
    justify="center"
    class="pa-1"
  >
    <v-col
      v-if="props.title"
      class="text-center my-1"
    >
      <h1>{{ props.title }}</h1>
    </v-col>

    <v-divider class="border-opacity-0" />

    <v-col>
      <slot />
    </v-col>
  </v-row>
</template>