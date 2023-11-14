<script setup>
 const auth = useAuthStore();
 definePageMeta({
    middleware: [

        'auth',
        'is-admin'

        
    ],
});

</script>

<template>


<div>


    <button class="py-2 px-5 bg-orange-500 text-white text-lg mt-2">    
            <h1>Name : {{ auth.getUser?.name }}  </h1>
             <h1>Email : {{ auth.getUser?.email }}  </h1>
    </button>

    

</div>



</template>