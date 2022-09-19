<template>
    <figure class="figcaption" v-if="caption">
        <img :src="src" class="image" loading="lazy" :alt="alt" />
        <figcaption>{{ caption }}</figcaption>
    </figure>
    <img v-else :src="src" class="image" loading="lazy" :alt="alt" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        src: {
            type: String
        },
        caption: {
            type: String,
        },
        alt: {
            type: String
        }
    },
    setup(props) {
        
    }
})
</script>

<style>
.image {
    max-width: 100%;
}
</style>