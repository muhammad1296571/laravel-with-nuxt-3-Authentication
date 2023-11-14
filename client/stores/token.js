export const useTokenStore = defineStore('token', {
    state: () => ({
        token: null,
        loggedin: false,
    }),
    persist: true,

    getters: {

      getToken: (state)=>state.token,
      getStatus: (state) => state.loggedin,

  },
    actions: {
        setToken(token) {
            this.token = token;
            this.loggedin = true;

        },
        removeToken() {


            const auth = useAuthStore();
            auth.$reset();
            this.$reset();

        }
    },
});