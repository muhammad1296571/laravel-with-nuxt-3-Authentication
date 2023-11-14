export default defineNuxtRouteMiddleware((to, from) => {


    const auth_role = useAuthStore();

    if (auth_role.getUser.role == 'admin') {
        return navigateTo('/admin_dashboard');
    }
})
