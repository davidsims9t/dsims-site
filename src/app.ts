import { defineApp } from 'iles'
import Hero from "~/components/hero.vue"
import Grid from "~/components/grid.vue"
import GridItem from "~/components/grid-item.vue"
import List from "~/components/list.vue"
import ListItem from "~/components/list-item.vue"
import Image from "~/components/image.vue"

export default defineApp({
    mdxComponents: {
        Hero,
        Grid,
        GridItem,
        List,
        ListItem,
        Image
    },
})
