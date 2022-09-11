<template>
    <header class="header">
        <div class="logo">
            <router-link to="/">David Sims</router-link>
        </div>
        <nav class="nav">
            <router-link to="/backpacking">Backpacking</router-link>
            <router-link to="/traveling">Traveling</router-link>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style>
.header {
    position: sticky;
    inset: 0;
    display: grid;
    grid-template-areas: "logo" "nav";
    grid-template-columns: auto auto;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: .5rem 1rem;
    grid-area: "nav";
}

.nav {
    grid-area: "logo";
}

.logo {
    grid-area: "nav";
}
</style>