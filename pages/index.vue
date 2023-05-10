<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar-store';

const sidebarStore = useSidebarStore();
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig)

</script>

<template>
  <BasePage title="Welcome!" class="text-center">
    <h2>This is a Nuxt template</h2>

    <v-row class="mt-2" justify="center">
      <v-col cols="11" md="6">
        <BaseCard>
          <v-card-title>Store Demo</v-card-title>
          <v-card-subtitle>See how the store works</v-card-subtitle>

          <v-card-text>
            Theme {{ sidebarStore.visible ? 'Visible' : 'Hidden' }}
          </v-card-text>
          
          <BaseBtn tonal @click="sidebarStore.toggle()">
            Toggle Sidebar
          </BaseBtn>
        </BaseCard>
      </v-col>

      <v-col cols="11" md="6">
        <BaseCard>
          <v-card-title>Env Demo</v-card-title>
          <v-card-subtitle>See how the environmental variables works</v-card-subtitle>

          <v-card-text>
            <ul>
              <li>Server: {{ runtimeConfig.restApi }}</li>
              <li>Client: {{ runtimeConfig.public.restApi }}</li>
            </ul>
          </v-card-text>
        </BaseCard>
      </v-col>
    </v-row>
  </BasePage>
</template>