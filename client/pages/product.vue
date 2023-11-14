<script setup>

const { data } = await useFetch(`http://127.0.0.1:8000/api/product`);

</script>

<template>

    <div class="bg-gray-800 p-10">

    <div class="p-2 grid grid-cols-2 gap-5">




        <div class="grid grid-cols-2 gap-5 border-2 border-gray-500 p-5  bg-gray-700 rounded-xl" v-for="post in data" :key="post.id">
            <div>
                <img src="https://i.pinimg.com/originals/6a/2d/58/6a2d58d467296a69ac3eb9771aa1fc96.jpg"
                    alt="" class="rounded-md">
            </div>
            <div>
                <div class="grid grid-cols-2 bg-gray-200 rounded-full p-1 mr-5 border-x-4 border-cyan-500 ">
                    <button class="bg-white rounded-full p-1 border-2 border-cyan-500 font-bold">Details</button>
                    <button class="font-bold text-cyan-500">Seller</button>
                </div>


                <div>
                <h1 class="my-2 text-white">
                    <span class="text-lg font-bold">Title :</span> {{ post.title }}</h1>

                    <div class="grid grid-cols-2 text-white">
                    <h1 class="my-2"><span class="text-lg font-bold">Tag :</span> {{ post.tag }}</h1>
                    <h1 class="my-2"> <span class="text-lg font-bold">Price :</span>  {{ post.price }} PKR </h1>
                    </div>




                    <p class="text-white"><span class="text-lg font-bold "> Description :</span>  {{ post.description }}</p>


                </div>


                        <button class="bg-green-300 rounded-full p-1 border-2 border-green-600 font-bold px-10 my-2 mx-12">View More</button>


            </div>

        </div>
        



    </div>

        </div>

</template>

<style></style>