export const useCreateStore = defineStore("User", {
    state: () =>
    ({
        user: {},
        validationErrors: [], 

     }),

      getters: {
             },

    _actions: {
        async register(formData) {
            try {
                const { data, error } = await useFetch('http://127.0.0.1:8000/api/sign_up', {
                    method: "POST",
                    body: { ...formData },
                });
                
                if (error.value && error.value.statusCode === 422) {
                    this.validationErrors = error.value.data.errors;
                    return;
                }
                return navigateTo("/login");

            } catch (error) {
                throw error;
            }
           


        },
    },
    get actions() {
        return this._actions;
    },
    set actions(value) {
        this._actions = value;
    },
});