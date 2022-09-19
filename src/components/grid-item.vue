<template>
    <a v-if="to?.startsWith('https:')" :class="{'grid-item':!noStyles}" :href="to" target="_blank" rel="noopener">
        <slot />
    </a>
    <router-link v-else-if="to" :to="to" :class="{'grid-item':!noStyles}">
        <slot />
    </router-link>
    <div :class="{'grid-item':!noStyles}" v-else>
        <slot />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        to: {
            type: String,
        },
        noStyles: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        
    },
})
</script>


<style>
.grid-item {
    min-height: 200px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    transition: opacity .5s, font-size .5s;
    text-align: center;
    opacity: .8;
}

.grid-item:hover {
    text-decoration: none;
    opacity: 1;
    font-size: 2rem;
}
</style>