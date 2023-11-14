<script setup>

const token = useTokenStore();
const auth_logout = useLogoutStore();

</script>

<template>
    <div>



        <div class="bg-gray-800 py-4 drop-shadow-xl">
            <div class="flex gap-5 justify-center text-xl font-bold">
                <NuxtLink to="/">
                    <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle
                     font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg 
                     hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Home</h1>
                </NuxtLink>
                 <NuxtLink to="product">
                                                <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans 
                                    text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40
                                     active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Product Gallery</h1>
                                            </NuxtLink>

                <template v-if="!token.getStatus">
                    <NuxtLink to="login">
                        <h1 class="text-white select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center 
                        align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg
                         hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Login</h1>
                    </NuxtLink>

                    <NuxtLink to="register">
                        <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans 
                        text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 
                        active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Register</h1>
                    </NuxtLink>
                </template>
                  <template v-if="token.getStatus">
                    <NuxtLink to="product">
                                            <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans 
                                    text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40
                                     active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Product Gallery</h1>
                                        </NuxtLink>
                       
                         
                        <NuxtLink to="Post">
                                <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans 
                                text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 
                                active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">ADD Product</h1>
                            </NuxtLink>

                             <NuxtLink to="dashboard">
                                <h1 class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans
                             text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 
                             active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Profile</h1>
                            </NuxtLink>
                           

                       <Button class=" select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs
                        font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] 
                        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" @click.prevent="auth_logout.logout()">
                        Logout

                       </Button>
                    </template>


            </div>

        </div>
    </div>
</template>