<template>
    <footer class="footer">
        <div class="footer__container">
            &copy; David Sims 2022
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style>
.footer {
    background-color: black;
    color: white;
    padding: 1.25rem 1rem;
    grid-area: "footer";
}

.footer__container {
    max-width: 1290px;
    margin: 0 auto;
    padding: 1.25rem 1rem;
}
</style>