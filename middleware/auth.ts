import { useAuthStore } from '~/stores/auth-store';

export default defineNuxtRouteMiddleware(() => {
	const authStore = useAuthStore();

	if (!authStore.isAuthenticated) {
		// return abortNavigation('Unauthorized');
		return navigateTo('/500');
	}
});
