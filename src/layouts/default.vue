<template>
  <NavBar />

  <main class="wrapper">
    <slot />
  </main>

  <Footer />
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from "~/components/navbar.vue"
import Footer from "~/components/footer.vue"

export default defineComponent({
  components: {
    NavBar,
    Footer
  }
})
</script>


<style>
@import '~/assets/normalize.css';
@import '~/assets/fonts.css';
@import '~/assets/base.css';
</style>
