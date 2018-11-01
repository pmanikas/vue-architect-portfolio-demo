<template lang="pug">
  .credits.text-center
    .designer
      p
        | Designed by 
        a(href='#about') Lefteris Kapsalas
    
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
  width: 330px
  text-align: center
  top: $base-spacing*3
  float: right
  p
    padding: 0
    margin: 0
    font-size: 1.4rem
    line-height: 2
    font-weight: bold
    color: transparentize($mainFontColor, 0.3)
  .designer, .developer
    position: relative
  
</style>