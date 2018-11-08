<template lang="pug">
  .homePage(@wheel="scrollViewport" :class="{rest: rest}")
    button.messed(v-if="messed" @click="unmessIt()") X
    .row
      .jar-md-90
        About
        Projects
      .jar-md-10.hidden-xs.hidden-md-off
        Grass
    Footer(v-on:mess="messIt()")
</template>

<script>
import { owner } from '@data/data'
import Grass from '@partials/Grass'
import About from '@partials/About'
import Projects from '@partials/Projects'
import Footer from '@partials/Footer'
import { mess, unmess } from '@utils/Mess'
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
      messed: false,
      mess: mess,
      unmess: unmess,
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
    }, 2000);
  },
  methods: {
    messIt() {
      this.messed = true;
      this.mess();
    },
    unmessIt() {
      this.messed = false;
      this.unmess();
    },
    scrollViewport(e) {
      if(this.isDesktop()) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if(this.scrollEnable) {
          this.timer();
          this.scrollTrigger(e);
        }
      }
    },
    timer() {
      this.scrollEnable = false;
      setTimeout(this.scrollTrue, 500)
    },
    scrollTrue() {
      this.scrollEnable = true;
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

.messed
  position: fixed
  top: 30px
  right: 30px
  z-index: 10
  width: 100px
  height: 100px
  font-size: 10rem
  font-weight: bold
  color: #6fe7db
  cursor: pointer
  background: none
  border: none
  opacity: 0.5
  transition: opacity .3s ease-in-out
  &:hover
    opacity: 1
</style>
