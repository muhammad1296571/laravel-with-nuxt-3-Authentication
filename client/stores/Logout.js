export const useLogoutStore = defineStore("logout", {
    state: () =>
    ({
       
    }),

    getters: {


    },
    actions: {

       


        async logout() {
            try {

                const tokenStore = useTokenStore();


                const res = await useFetch('http://127.0.0.1:8000/api/logout', {
                    method: "POST",
                    // body: { ...formDtat },
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${tokenStore.getToken}`,
                    },
                });
                tokenStore.removeToken();


                return navigateTo("/login");





            } catch (error) {
                throw error;

            }
        },
    },
});