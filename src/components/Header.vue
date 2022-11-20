<template>
    <div class="flex bg-header justify-between">
        <div>
            <p class="text-3xl font-bold text-black px-5 py-7 uppercase">Supreyo Atonu</p>
        </div>
        <Navigation/>
        <Websites/>
    </div>
    
</template>
  
<script>
import Navigation from './Navigation.vue'
import Websites from './Websites.vue'

export default {
    components: {
        Navigation,
        Websites
    }
}
</script>