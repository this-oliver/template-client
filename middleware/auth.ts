import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware(() => {
	const authStore = useAuthStore();

	if (!authStore.isAuthenticated) {
		// return abortNavigation('Unauthorized');
		return navigateTo('/500');
	}
});
