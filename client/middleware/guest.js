export default defineNuxtRouteMiddleware((to, from) => {


    const token = useTokenStore();


    
    // if (auth.getUser) {
    //     return navigateTo('/login');
    // }
    

    if (token.getStatus ) {
        return navigateTo('/dashboard');
    }
})
