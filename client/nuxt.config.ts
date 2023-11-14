// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
       
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss'
    ],

    
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },

    imports:{
    dirs:['./stores'],
    },
    // plugins: [
    //     '~/plugins/toastification.js',
    // ],
   
      

   
  
  
 
})

