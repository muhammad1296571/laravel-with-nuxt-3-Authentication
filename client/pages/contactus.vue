<!-- pages/Login.vue -->

<script setup>

const auth_contact = useContactStore();
definePageMeta({
    middleware: [

        'auth',
    ],
});


const form = reactive({
    email: null,
    commit: null,



});







const handlecontact = async () => {


    try {
        await auth_contact.contactus(form);

    } catch (error) {
        // Handle registration errors
        if (error.response.status === 422) {
            // Validation errors
            console.log('Validation errors:', error.response.data.errors);
        } else {
            // Other errors
            console.error('Registration error:', error.message);
        }
    }
};


</script>


<template>
    <div class="bg-orange-500 pt-10">



        <form @submit.prevent="handlecontact">


            <div class="grid h-screen place-items-center">
                <!-- component -->
                <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div
                        class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border text-white shadow-lg shadow-orange-500/40">
                        <h3
                            class="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Register
                        </h3>
                    </div>


                    <div class="flex flex-col gap-4 p-6">




                        <div class="relative h-11 w-full min-w-[200px] my-5">
                            <input v-model="form.email" type="email"
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-orange before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>

                        </div>
                        <div class="relative h-11 w-full min-w-[200px] my-5">
                            <input v-model="form.commit" type="text"
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-orange before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Commit
                            </label>

                        </div>

                    </div>


                    <div class="p-6 pt-4">
                        <button
                            class="block w-full select-none rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit" data-ripple-light="true">
                            Register
                        </button>
                        <p
                            class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            I have already account

                            <NuxtLink to="login">

                                <a href="#signup"
                                    class="ml-1 block font-sans text-sm font-bold leading-normal text-orange-500 antialiased">
                                    Sign in
                                </a>
                            </NuxtLink>

                        </p>
                    </div>
                </div>



            </div>

        </form>

    </div>
</template>
