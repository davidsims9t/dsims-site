import { defineApp } from 'iles'
import Hero from "~/components/hero.vue"
import Grid from "~/components/grid.vue"
import GridItem from "~/components/grid-item.vue"

export default defineApp({
    mdxComponents: {
        Hero,
        Grid,
        GridItem
    },
})
