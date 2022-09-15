<template>
    <div class="grid container">
        <slot />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style>
.grid {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

@media (min-width: 767px) {
    .grid {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>