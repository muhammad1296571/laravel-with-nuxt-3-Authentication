<template>
    <div class="relative">
        <div class="overflow-hidden">
            <div class="flex transition-transform transform-gpu"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
                    <img :src="image.src" alt="Image" class="w-full h-auto" />
                </div>
            </div>
        </div>

        <button @click="prev"
            class="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-cyan-500 px-2 py-1 rounded-md cursor-pointer">
            <span class="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button @click="next"
            class="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-cyan-500 px-2 py-1 rounded-md cursor-pointer">
            <span class="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</template>

<style>
.your-class {
    background-color: red;
    /* Semicolon here */
    color: white;
    /* Semicolon here */
}
</style>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            images: [
                { src: 'https://freepngimg.com/save/133273-11-apple-iphone-png-free-photo/1500x1500' },
                { src: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png' },
                { src: 'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png' },
                // Add more image objects as needed
            ],
        };
    },
  methods: {
        next() {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Loop back to the first image
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.images.length - 1; // Loop back to the last image
            }
        },
    },
    mounted() {
        // Automatically change the image every 5 seconds
        setInterval(this.next, 5000);
    },
};
</script>
