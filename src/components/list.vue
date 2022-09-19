<template>
    <ul class="list">
        <slot></slot>
    </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup(props) {
        
    }
})
</script>

<style>
.list {
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>