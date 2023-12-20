<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <base-btn
    id="admin-menu"
    color="primary"
  >
    {{ authStore.user ? authStore.user.username : "Admin" }}
  </base-btn>

  <v-menu
    activator="#admin-menu"
    open-on-hover
    color="primary"
  >
    <v-list
      variant="flat"
      elevation="0"
    >
      <v-list-item to="/profile">
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>
      <v-list-item
        class="text-error"
        @click="authStore.logout()"
      >
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
