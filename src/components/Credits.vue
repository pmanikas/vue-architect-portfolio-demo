<template lang="pug">
  .credits.text-center
    .designer
      p
        | Designed by 
        router-link(to="skills") Lefteris Kapsalas
    
    .developer
      BaseHorLine(:widthy="'100%'" :top="'-5px'" :left="'0'")
      p
        | Crafted by 
        a(href='http://manikasdesign.eu', target='_blank') Pandelis Manikas

</template>

<script>
import { owner } from '@data/data'
export default {
  name: 'Credits',
  data() {
    return {
      owner: owner
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.credits
  position: relative
  top: $base-spacing * 3
  float: right
  width: 330px
  text-align: center
  p
    padding: 0
    margin: 0
    font-size: 1.4rem
    font-weight: bold
    line-height: 2
    color: transparentize($main-font-color, 0.3)
  .designer, .developer
    position: relative
  
</style>