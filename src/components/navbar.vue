<template>
    <header class="header">
        <div class="header__container">
            <div class="logo">
                <router-link to="/">David Sims</router-link>
            </div>
            <nav class="nav">
                <router-link to="/backpacking">Backpacking</router-link>
                <router-link to="/traveling">Traveling</router-link>
            </nav>
        </div>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    grid-area: "nav";
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
}

.header a {
    color: white;
}

.header__container {
    display: grid;
    grid-template-areas: "logo" "nav";
    grid-template-columns: auto auto;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: .5rem 1rem;
}

.nav {
    grid-area: "logo";
    display: flex;
    gap: 1rem;
}

.logo {
    grid-area: "nav";
}
</style>