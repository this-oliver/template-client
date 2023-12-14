import { defineStore } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import { useNotification } from '~/composables/useNotification';
import type { ActionItem } from '~/components/base/BaseCard.vue';

export const useNavigationStore = defineStore('navigation', () => {
  const authStore = useAuthStore();
  const { notify } = useNotification();

  const options = computed<ActionItem[]>(() => {
    const base: ActionItem[] = [
      {
        label: 'about',
        icon: 'mdi-information-outline',
        to: '/about'
      },
      {
        label: 'ui components',
        icon: 'mdi-view-dashboard-outline',
        to: '/components'
      },
      {
        label: 'notifications',
        icon: 'mdi-bell-outline',
        action: () => {
          notify('Nav Bar', 'Notification triggered', 'success')
        }
      }
    ];

    const auth: ActionItem[] = [
      {
        label: 'login',
        icon: 'mdi-login',
        color: 'primary',
        to: '/auth/login',
      }
    ];

    return authStore.isAuthenticated ? base : [...base, ...auth];
  });

  return {
    options
  }
})