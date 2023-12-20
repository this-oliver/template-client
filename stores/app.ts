import { defineStore } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import type { ActionItem } from '~/components/base/BaseCard.vue';

const useNavigationStore = defineStore('navigation', () => {
	const authStore = useAuthStore();

	const options = computed<ActionItem[]>(() => {
		const base: ActionItem[] = [
			{
				label: 'features',
				icon: 'mdi-view-dashboard-outline',
				to: '/features'
			}
		];

		const protectedRoutes: ActionItem[] = [
			{
				label: 'start',
				color: 'success',
				to: '/start'
			}
		];

		const authRoutes: ActionItem[] = [
			{
				label: 'login',
				icon: 'mdi-login',
				color: 'primary',
				to: '/auth/login',
			}
		];

		return authStore.isAuthenticated 
			? [...base, ...protectedRoutes] 
			: [...base, ...authRoutes];
	});

	return { options };
});

const useSidebarStore = defineStore('sidebar', {
	state: () => ({ visible: false }),
	actions: {
		toggle() {
			this.visible = !this.visible;
		}
	}
});


export { useNavigationStore, useSidebarStore };