<template lang="pug">
  .homePage
    Background
    .row
      .jar-xs-100
        Header
    .row
      .jar-md-90
        About
        Projects
      .jar-md-10.jar-sm-hidden.jar-xs-hidden
        Grass.hidden-xs.hidden-md-off
    Footer
</template>

<script>
import Background from '@components/Background'
import Header from '@partials/Header'
import Grass from '@partials/Grass'
import About from '@partials/About'
import Projects from '@partials/Projects'
import Footer from '@partials/Footer'

export default {
  name: 'HomePage',
  components: {
    Background,
    Header,
    Grass,
    About,
    Projects,
    Footer
  }
}
</script>
