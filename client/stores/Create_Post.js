export const useCreate_PostStore = defineStore("post", {
    state: () => ({
        post: {},
        validationErrors: [],
    }),
    actions: {
        async createPost(formData_post) {
            try {
                
                const fd = new FormData();
                fd.append("description", formData_post.description);
                fd.append("image", formData_post.image);
                fd.append("title", formData_post.title);
                fd.append("price", formData_post.price);
                fd.append("tag", formData_post.tag);

                const token = useTokenStore();
                const { data, error } = await useFetch(
                    "http://127.0.0.1:8000/api/posts",
                    {
                        method: "POST",
                        body: fd,
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token.getToken}`,
                        },
                    }
                );

                if (error.value && error.value.statusCode === 422) {
                    this.validationErrors = error.value.data.errors;
                    return;
                }
             } catch (error) {
                throw error;
            }
        },
    },
});
