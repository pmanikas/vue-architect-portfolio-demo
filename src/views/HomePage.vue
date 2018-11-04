<template lang="pug">
  .homePage
    .row
      .jar-xs-100
        Header
    .row
      .jar-md-90
        About
        Projects
      .jar-md-10.hidden-xs.hidden-md-off
        Grass
    Footer
</template>

<script>
import Header from '@partials/Header'
import Grass from '@partials/Grass'
import About from '@partials/About'
import Projects from '@partials/Projects'
import Footer from '@partials/Footer'

export default {
  name: 'HomePage',
  components: {
    Header,
    Grass,
    About,
    Projects,
    Footer
  }
}
</script>
