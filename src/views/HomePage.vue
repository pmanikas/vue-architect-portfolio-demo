<template lang="pug">
  .homePage
    button.messed(v-if="messed" @click="unmess()") X
    .row
      .jar-xs-100
        Header
    .row
      .jar-md-90
        About
        Projects
      .jar-md-10.hidden-xs.hidden-md-off
        Grass
    Footer(v-on:mess="mess()")
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
  },
  data() {
    return {
      messed: false
    }
  },
  created() {
    // Cancel default scroll.
    document.addEventListener('scoll', function(e) {
      e.preventDefault();
    });


    // Use wheel event to simulate scroll.
    document.addEventListener('wheel', function(e) {
      e.preventDefault();
      // #e1 is 100vh, get height in pixels for conversion rate.
      var pxPerVh = window.innerHeight / 100;
      
      
      // Current scroll.
      var currScroll = document.documentElement.scrollTop || document.body.scrollTop;

      var newScroll = 0;
      
      // Modify scroll 100 vh
      if (e.wheelDelta < 0) { // scroll up
        newScroll = currScroll + 100 * pxPerVh;
      } else if (e.wheelDelta > 0) { // scroll down
        newScroll = currScroll - 100 * pxPerVh;
      } else { // no scroll
        newScroll = currScroll;
      }
      console.log('p', e.wheelDelta, currScroll, newScroll, pxPerVh);

      window.scrollTo({ top: newScroll, behavior: 'smooth' });
    });
  },
  methods: {
    mess() {
      this.messed = true;
      let elDivA = document.querySelectorAll("p");
      let elDivB = document.querySelectorAll("img");
      let elDivC = document.querySelectorAll("span");
      let elDivD = document.querySelectorAll(".homePage div");
      elDivA.forEach(function(element){
        element.classList.add('messA')
      });
      elDivB.forEach(function(element){
        element.classList.add('messB')
      });
      elDivC.forEach(function(element){
        element.classList.add('messC')
      });
      elDivD.forEach(function(element){
        element.classList.add('messD')
      })
    },
    unmess() {
      this.messed = false;
      let elDiv = document.querySelectorAll(".messA, .messB, .messC, .messD");
      elDiv.forEach(function(element){
        element.classList.remove("messA", "messB", "messC", "messD")
      });
    }
  }
}
</script>

<style lang="sass" scoped>
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
</style>
