<template>
    <div class="grid container" :class="`grid-${cols}`">
        <slot />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        cols: {
            type: String,
            default: "5"
        }
    },
    setup() {
        
    },
})
</script>


<style>
.grid {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: grid;
    gap: 1rem;
}

.grid-2,
.grid-3 {
    grid-template-columns: 1fr;
}

.grid-5 {
    grid-template-columns: repeat(3, 1fr);
}

@media (min-width: 767px) {
    .grid-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-5 {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>