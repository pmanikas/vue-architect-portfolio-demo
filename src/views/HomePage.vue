<template lang="pug">
  .homePage(@wheel="scrollViewport" :class="{rest: rest}")
    .row
      .jar-md-90
        About
        Projects
      .jar-md-10.hidden-xs.hidden-md-off
        Grass
    Footer
</template>

<script>
import { owner } from '@data/data'
import Grass from '@partials/Grass'
import About from '@partials/About'
import Projects from '@partials/Projects'
import Footer from '@partials/Footer'
import { scrollTrigger } from '@utils/ScrollViewport'
import { isDesktop } from '@utils/IsDesktop'

export default {
  name: 'HomePage',
  metaInfo() {
    return {
      title: 'Architect Portfolio | Lefteris Kapsalas',
      titleTemplate: null,
      meta: [
        { vmid: 'description', name: 'description', content: this.owner.description }
      ]
    }
  },
  components: {
    Grass,
    About,
    Projects,
    Footer
  },
  data() {
    return {
      owner: owner,
      scrollTrigger: scrollTrigger,
      isDesktop: isDesktop,
      scrollEnable: true,
      rest: false
    }
  },
  mounted() {
    document.addEventListener('scroll', function(e){
      e.preventDefault();
    })
  },
  created() {
    setTimeout(() => {
      this.rest = true
    }, 1000);
  },
  methods: {
    scrollViewport(e) {
      if(this.isDesktop) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if(this.scrollEnable) {
          this.scrollEnable = false;
          setTimeout(() => (this.scrollEnable = true), 500);
          this.scrollTrigger(e);
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.homePage
  height: 100vh
  overflow-y: hidden
  &.rest
    height: auto
    overflow-y: auto
</style>
