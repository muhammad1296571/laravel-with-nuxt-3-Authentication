export default defineNuxtRouteMiddleware((to, from) => {


    const token = useTokenStore();

    if (!token.getToken) {
        return navigateTo('/login');
    }
})
