<template>
    <div class="hero" role="banner" :style="`background-image: url(${resolvedImg})`">
        <slot />
    </div>
</template>

<script>
import { defineComponent, computed, toRef } from 'vue'

export default defineComponent({
    props: {
        image: {
            type: String,
        }
    },
    async setup(props) {
        const image = toRef(props, "image")
        const { default: resolvedImg } = await import(/* @vite-ignore */ `../assets/images/${image.value}.jpg`)

        return {
            resolvedImg
        }
    },
})
</script>

<style>
.hero {
    background-repeat: no-repeat;
    background-color: black;
    min-height: 60vh;
    background-position: center top;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1rem;
}

.hero h1 {
    color: white;
    text-align: center;
    max-width: 560px;
    text-shadow: 0 0 5px rgba(0, 0, 0, .5);
}
</style>
