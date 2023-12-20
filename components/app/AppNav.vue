<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useNavigationStore } from '~/stores/app';
import { useSidebarStore } from '~/stores/app';
import { useAuthStore } from '~/stores/auth';

const { smAndDown } = useDisplay();
const auth = useAuthStore();
const drawer = useSidebarStore();
const navigation = useNavigationStore();
</script>

<template>
  <v-app-bar
    id="app-nav"
    app
    flat
    color="transparent"
  >
    <v-app-bar-nav-icon
      v-if="smAndDown"
      @click="drawer.toggle"
    />

    <router-link
      class="plain"
      to="/"
    >
      <app-logo />
    </router-link>

    <v-spacer />

    <div v-if="!smAndDown">
      <base-btn
        v-for="option in navigation.options"
        :key="option.label"
        class="mx-1 plain"
        plain
        :color="option.color"
        :to="option.to"
        @click="option.action"
      >
        {{ option.label }}
      </base-btn>

      <app-admin-menu v-if="auth.isAuthenticated" />
    </div>
  </v-app-bar>
</template>

<style scoped>
@media (min-width: 600px) {
	#app-nav {
		padding: 0 2rem;
	}
}
</style>
