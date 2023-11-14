export const useContactStore = defineStore("contact", {
    state: () =>
    ({
        user: {},

    }),


    getters: {

    },
    actions: {



        async contactus(formData) {
            try {


                const { data } = await useFetch('http://127.0.0.1:8000/api/contact', {
                    method: "POST",
                    body: { ...formData },
                });


                return navigateTo("/");

            } catch (error) {

                throw error;

            }
        },




    },
});