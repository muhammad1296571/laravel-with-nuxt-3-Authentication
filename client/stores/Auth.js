export const useAuthStore = defineStore("auth", {
    state: () =>
    ({
        user: {},
     }),

    persist: {
    paths: ["user"],
 },
    getters: {
    getUser: (state) => state.user,
},
    actions: {
        async login(formData) {
            try {

                const token = useTokenStore();
                const { data } = await useFetch('http://localhost:8000/api/login', {
                    method: "POST",
                    body: { ...formData },
                });

                token.setToken(data._rawValue.token);
                this.user = data._rawValue.user;
                const role = data._rawValue.user.role;

                if (role == 'admin') {

                    return navigateTo("/admin_dashboard");


                } else {

                    return navigateTo("/dashboard");


                }
             } catch (error) {
            }
        },

       
    },
});